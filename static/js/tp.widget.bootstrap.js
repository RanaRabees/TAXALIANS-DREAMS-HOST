(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var EMPTY_WIDGET_ID = '000000000000000000000000';
        var LAZY_LOADED_WIDGETS = ['54d39695764ea907c0f34825', '577258fb31f02306e4e3aaf9'];

        exports.EMPTY_WIDGET_ID = EMPTY_WIDGET_ID;
        exports.LAZY_LOADED_WIDGETS = LAZY_LOADED_WIDGETS;

    }, {}],
    2: [function(require, module, exports) {
        'use strict';

        var hasCreatedJsonLd = false;

        function createJsonLdElement(jsonLdData) {
            /* eslint-disable no-empty */
            try {
                if (hasCreatedJsonLd) {
                    return;
                }

                var jsonElement = document.createElement('script');
                jsonElement.setAttribute('type', 'application/ld+json');
                jsonElement.innerHTML = JSON.stringify(jsonLdData);
                document.head.appendChild(document.createComment('Added by Trustpilot'));
                document.head.appendChild(jsonElement);
                document.head.appendChild(document.createComment('/Added by Trustpilot'));
                hasCreatedJsonLd = true;
            } catch (ignoreIE8) {}
            /* eslint-enable no-empty */
        }

        var xhr = require('./xhr.js');

        function getLocalBusinessSnippet(_ref) {
            var businessunitId = _ref.businessunitId,
                location = _ref.location,
                locale = _ref.locale,
                templateId = _ref.templateId;

            var params = ['url=' + encodeURIComponent(window.location.href), 'templateId=' + templateId, 'locale=' + locale].join('&');
            var locationPath = '/data/jsonld/business-unit/' + businessunitId + '/location/' + location;
            var url = '#{WidgetRoot}' + locationPath + '?' + params;

            xhr.xhrGet({
                url: url,
                success: function success(data) {
                    data.url = document.location.href;
                    data['@id'] = document.location.href;
                    createJsonLdElement(data, null);
                },
                error: function error(data) {
                    // eslint-disable-next-line
                    console.error(data);
                }
            });
        }

        function getProductSnippet(_ref2) {
            var businessunitId = _ref2.businessunitId,
                locale = _ref2.locale,
                templateId = _ref2.templateId,
                name = _ref2.name,
                sku = _ref2.sku,
                reviewnumber = _ref2.reviewnumber,
                price = _ref2.price,
                priceCurrency = _ref2.priceCurrency,
                availability = _ref2.availability;

            var language = locale && locale.split('-')[0];

            var includeImported = templateId === '5763bccae0a06d08e809ecbb'; // multisource seo
            var regularPath = '/data/jsonld/business-unit/' + businessunitId + '/product';
            var importedPath = '/data/jsonld/business-unit/' + businessunitId + '/product-imported';
            var path = includeImported ? importedPath : regularPath;

            var url = '#{WidgetRoot}' + path + '?sku=' + encodeURIComponent(sku) + '&numberOfReviews=' + (reviewnumber || 10) + (name ? '&productName=' + encodeURIComponent(name) : '') + '&language=' + language + '&templateId=' + templateId + '&url=' + encodeURIComponent(window.location.origin + window.location.pathname);

            var offer = price && priceCurrency && availability ? {
                '@type': 'Offer',
                priceCurrency: priceCurrency,
                price: price,
                availability: availability
            } : null;

            xhr.xhrGet({
                url: url,
                success: function success(data) {
                    if (offer) {
                        data.offers = offer;
                    }
                    // Structured Data rules: Either ‘offers’, ‘review’ or ‘aggregateRating’ should be specified
                    if (data.offers || data.review || data.aggregateRating) {
                        createJsonLdElement(data, offer);
                    }
                },
                error: function error(data) {
                    // eslint-disable-next-line
                    console.error(data);
                }
            });
        }

        var snippet = function snippet(dataset) {
            if (hasCreatedJsonLd) {
                // in case there's a second widget with snippet markup
                return false;
            }

            var isPRCarousel = dataset.templateId === '60f537b5b0f1639de1fe048c'; // PR Carousel

            if (dataset.schemaType && dataset.location) {
                // LocalBusiness JSON-LD
                getLocalBusinessSnippet(dataset);
                return true;
            } else if (dataset.sku) {
                if (dataset.name || isPRCarousel && dataset.schemaType === 'Product') {
                    // product JSON-LD
                    getProductSnippet(dataset);
                    return true;
                }
            }
            return false;
        };

        module.exports = snippet;

    }, {
        "./xhr.js": 7
    }],
    3: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _snippets = require('./snippets');

        var _snippets2 = _interopRequireDefault(_snippets);

        var _widget = require('./widget');

        var _widget2 = _interopRequireDefault(_widget);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var WidgetManagement = function() {
            function WidgetManagement(window, document, version) {
                _classCallCheck(this, WidgetManagement);

                this.window = window;
                this.document = document;
                this.widgets = [];
                this.stats = {
                    applied: 0,
                    findAndApplyCalls: 0,
                    applyFromDomCalls: 0,
                    elements: 0
                };
                this.version = version;
            }

            /**
             * Check the state of loading, and then initialize the widgets on the page.
             */


            _createClass(WidgetManagement, [{
                key: 'initializeOnPageLoad',
                value: function initializeOnPageLoad() {
                    if (this.document.readyState !== 'loading') {
                        this.findAndApplyWidgets();
                    } else {
                        this.document.addEventListener('DOMContentLoaded', this.findAndApplyWidgets.bind(this));
                    }
                }

                /**
                 * Create a widget at a given DOM element.
                 *
                 * This method will construct a widget on a DOM element. If it has already
                 * been loaded, it will only be created if the forceReload flag is true.
                 *
                 * @param {HTMLElement} element - The DOM element on which to create a widget
                 * @param {Boolean} forceReload - Flag whether to force a reload of an
                 * already existing widget
                 */

            }, {
                key: 'applyWidgetFromDomElement',
                value: function applyWidgetFromDomElement(element, forceReload) {
                    var alreadyLoaded = element.firstChild && element.firstChild.tagName === 'IFRAME';

                    if (alreadyLoaded && !forceReload) {
                        return;
                    }

                    this.createWidget(element);
                }

                /**
                 * Find all widget container elements and initalize widgets in each.
                 *
                 * This method is called by some of our clients when using SPAs. We should
                 * treat this as a documented public method and ensure it works consistently
                 * and properly.
                 */

            }, {
                key: 'findAndApplyWidgets',
                value: function findAndApplyWidgets() {
                    var _this = this;

                    this.stats.findAndApplyCalls += 1;
                    var elements = this.widgetElements;

                    if (!elements || elements.length === 0) {
                        return;
                    }
                    this.stats.elements = elements.length;
                    elements.forEach(function(element) {
                        return _this.createWidget(element);
                    });
                }

                /**
                 * Create a widget at the given element.
                 *
                 * Takes a DOM element and constructs a widget at that element.
                 */

            }, {
                key: 'createWidget',
                value: function createWidget(element) {
                    this.removeWidget(element);

                    var dataset = element.dataset;
                    (0, _snippets2.default)(dataset);

                    var widgetArgs = {
                        container: element,
                        dataset: dataset
                    };
                    var widget = new _widget2.default(widgetArgs);
                    widget.initialize();

                    this.stats.applied += 1;
                    this.stats.applyFromDomCalls += 1;
                    this.widgets.push(widget);

                    return widget;
                }

                /**
                 * Remove a widget element from the DOM.
                 */

            }, {
                key: 'removeWidget',
                value: function removeWidget(element) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }

                    // Clean up lazy loaded widgets
                    this.widgets.filter(function(widget) {
                        return widget.isLazyLoaded && widget.isSameNodeAs(element);
                    }).forEach(function(widget) {
                        widget.destroy();
                    });
                }

                /**
                 * Close all open popups.
                 */

            }, {
                key: 'closePopups',
                value: function closePopups() {
                    this.widgets.forEach(function(widget) {
                        return widget.closePopup();
                    });
                }
            }, {
                key: 'businessUnitId',
                get: function get() {
                    return this.widgetElements[0].dataset.businessunitId;
                }
            }, {
                key: 'widgetElements',
                get: function get() {
                    return [].slice.call(this.document.getElementsByClassName('trustpilot-widget'));
                }
            }]);

            return WidgetManagement;
        }();

        exports.default = WidgetManagement;

    }, {
        "./snippets": 2,
        "./widget": 5
    }],
    4: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var widgetHtmlFile = 'index.html';
        var widgetHtmlAllowRobotsFile = 'index_allow_robots.html';
        var widgetIFrameOrigin = '#{WidgetRoot}';
        var widgetBaseUrl = '#{WidgetRoot}/trustboxes';
        var widgetsThatCanAllowRobots = '#{WidgetsThatCanAllowRobots}'.split(',');

        function makeIframeElement(options) {
            var iframe = document.createElement('iframe');
            iframe.style.position = options.position;
            iframe.style.zIndex = options.zindex;
            iframe.style.margin = options.margin;
            iframe.style.top = options.top;
            iframe.style.bottom = options.bottom;
            iframe.style.left = options.left;
            iframe.style.right = options.right;
            iframe.style.height = options.height;
            iframe.style.width = options.width;
            iframe.style.minHeight = options.minHeight;
            iframe.style.minWidth = options.minWidth;
            iframe.style.borderStyle = options.borderStyle;
            iframe.style.backgroundColor = options.backgroundColor;
            iframe.style.display = options.display;
            iframe.style.overflow = options.overflow;
            iframe.allowTransparency = options.allowTransparency;
            iframe.title = 'Customer reviews powered by Trustpilot';
            iframe.loading = options.loading || 'auto';
            iframe.src = options.src;

            if (options.allow) {
                iframe.allow = options.allow;
            }

            return iframe;
        }

        function getAttributeValue(attribute) {
            var suffixRegEx = /(px|\%)/i;
            var value = '';

            if (attribute && attribute.length > 0) {
                attribute = attribute.toLowerCase();
                if (suffixRegEx.test(attribute)) {
                    value = attribute;
                } else {
                    value = attribute + 'px';
                }
            }
            return value;
        }

        var IFrame = function() {
            function IFrame(name, dataset, iframeData) {
                var isScrollBlocking = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

                _classCallCheck(this, IFrame);

                this.OVERFLOW_PROPERTIES = ['overflow', 'overflow-x', 'overflow-y'];

                this.name = name;
                this.dataset = dataset;
                this.iframeData = iframeData || this.defaultIframeOptions;
                this.defaultOverflowProperties = {};
                this.isVisible = false;
                this.isScrollBlocking = isScrollBlocking;
            }

            _createClass(IFrame, [{
                key: 'getIframeOptionsFromData',
                value: function getIframeOptionsFromData() {
                    var iframeData = this.iframeData || {
                        styles: {}
                    };
                    return _extends({}, this.defaultIframeOptions, {
                        position: iframeData.styles.position || '',
                        zindex: iframeData.styles.zindex || '',
                        margin: iframeData.styles.margin || '',
                        top: iframeData.styles.top || '',
                        bottom: iframeData.styles.bottom || '',
                        left: iframeData.styles.left || '',
                        right: iframeData.styles.right || '',
                        height: iframeData.styles.height || '',
                        width: iframeData.styles.width || this.defaultIframeOptions.styles.width || '',
                        minWidth: iframeData.styles.minWidth || '',
                        minHeight: iframeData.styles.minHeight || '',
                        display: iframeData.show ? 'block' : 'none',
                        src: this.baseUrl + iframeData.source + this.queryString,
                        borderStyle: this.defaultIframeOptions.styles.borderStyle,
                        overflow: this.defaultIframeOptions.styles.overflow,
                        loading: this.dataset.loading,
                        allow: iframeData.allow
                    });
                }
            }, {
                key: 'initialize',
                value: function initialize(container, onLoad) {
                    this._iframe = makeIframeElement(this.getIframeOptionsFromData());

                    container.appendChild(this._iframe);
                    this._iframe.addEventListener('load', onLoad);
                }
            }, {
                key: 'sendMessage',
                value: function sendMessage(message) {
                    if (this._iframe.contentWindow) {
                        message = JSON.stringify(message); // This is to make it IE8 compatible
                        this._iframe.contentWindow.postMessage(message, widgetIFrameOrigin);
                    }
                }
            }, {
                key: 'isInViewport',
                value: function isInViewport(allowance) {
                    var rect = this._iframe.getBoundingClientRect();

                    var rectSize = {
                        width: rect.width || this._iframe.offsetWidth,
                        height: rect.height || this._iframe.offsetHeight
                    };

                    return rect.top >= 0 && rect.left >= 0 && rect.bottom - rectSize.height * allowance <= (window.innerHeight || document.documentElement.clientHeight) && rect.right - rectSize.width * allowance <= (window.innerWidth || document.documentElement.clientWidth);
                }
            }, {
                key: 'setWidgetId',
                value: function setWidgetId(widgetId) {
                    this.sendMessage({
                        command: 'setId',
                        widgetId: widgetId
                    });
                }
            }, {
                key: 'setStyle',
                value: function setStyle(styles) {
                    var _this = this;

                    Object.keys(styles).forEach(function(property) {
                        var style = styles[property];
                        _this._iframe.style[property] = style;
                    });
                }
            }, {
                key: 'isScrollBlockingPopup',
                value: function isScrollBlockingPopup() {
                    return this.name === 'popup' && this.isScrollBlocking;
                }
            }, {
                key: 'disablePageScroll',
                value: function disablePageScroll() {
                    this.defaultOverflowProperties = this.OVERFLOW_PROPERTIES.reduce(function(dict, property) {
                        dict[property] = document.body.style.getPropertyValue(property);
                        return dict;
                    }, {});
                    document.body.style.overflow = 'hidden';
                }
            }, {
                key: 'restorePageScroll',
                value: function restorePageScroll() {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = this.OVERFLOW_PROPERTIES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var property = _step.value;

                            document.body.style.removeProperty(property);
                            if (this.defaultOverflowProperties[property]) {
                                document.body.style.setProperty(property, this.defaultOverflowProperties[property]);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }, {
                key: 'show',
                value: function show() {
                    if (this.isScrollBlockingPopup() && !this.isVisible) {
                        this.disablePageScroll();
                    }
                    this._iframe.style.display = 'block';
                    this.isVisible = true;
                }
            }, {
                key: 'hide',
                value: function hide() {
                    if (this.isScrollBlockingPopup() && this.isVisible) {
                        this.restorePageScroll();
                    }
                    this._iframe.style.display = 'none';
                    this.isVisible = false;
                }
            }, {
                key: 'focus',
                value: function focus() {
                    this._iframe.contentWindow.focus();
                }
            }, {
                key: 'resizeHeight',
                value: function resizeHeight(height) {
                    if (typeof height !== 'number' || height === 0) {
                        return;
                    }
                    this._iframe.style.height = height + 'px';
                }
            }, {
                key: '_shouldAllowRobots',
                value: function _shouldAllowRobots() {
                    return this.dataset.allowRobots === 'true' && this.dataset.location && widgetsThatCanAllowRobots.indexOf(this.templateId) > -1;
                }
            }, {
                key: 'dimensions',
                get: function get() {
                    return {
                        height: getAttributeValue(this.dataset.styleHeight),
                        width: getAttributeValue(this.dataset.styleWidth)
                    };
                }

                /**
                 * Get the query string for populating this iframe's URL.
                 *
                 * The query string also includes hash parameters. These are used to ensure
                 * that the URL does not contain unneeded query params for fetching the
                 * Trustbox HTML itself as we include a number of parameters only needed for
                 * making the TrustBox data call.
                 */

            }, {
                key: 'queryString',
                get: function get() {
                    var _this2 = this;

                    var mkPair = function mkPair(attribute) {
                        return attribute + '=' + encodeURIComponent(_this2.dataset[attribute]);
                    };
                    var mkPairs = function mkPairs(p) {
                        return Object.keys(_this2.dataset).filter(p).map(mkPair);
                    };

                    var searchKeys = ['businessunitId', 'templateId'];
                    var searchPairs = mkPairs(function(k) {
                        return searchKeys.indexOf(k) !== -1;
                    });
                    var hashPairs = mkPairs(function(k) {
                        return searchKeys.indexOf(k) === -1 && k !== 'allowRobots';
                    });
                    return '?' + searchPairs.join('&') + '#' + hashPairs.join('&');
                }
            }, {
                key: 'templateId',
                get: function get() {
                    return this.dataset.templateId;
                }
            }, {
                key: 'baseUrl',
                get: function get() {
                    return widgetBaseUrl + '/' + this.templateId + '/';
                }
            }, {
                key: 'defaultIframeOptions',
                get: function get() {
                    return {
                        source: this._shouldAllowRobots() ? widgetHtmlAllowRobotsFile : widgetHtmlFile,
                        allowTransparency: 'true',
                        styles: {
                            borderStyle: 'none',
                            backgroundColor: 'transparent',
                            display: 'block',
                            overflow: 'hidden',
                            height: this.dimensions.height,
                            width: this.dimensions.width,
                            position: 'relative'
                        },
                        show: true
                    };
                }
            }]);

            return IFrame;
        }();

        exports.default = IFrame;

    }, {}],
    5: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _tracking = require('./tracking');

        var _tracking2 = _interopRequireDefault(_tracking);

        var _iframe = require('./iframe');

        var _iframe2 = _interopRequireDefault(_iframe);

        var _constants = require('./../constants');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Widget = function() {
            _createClass(Widget, null, [{
                key: 'generateId',
                value: function generateId() {
                    var usedIds = this.usedIds;
                    var currId = void 0;
                    do {
                        currId = Math.random();
                    } while (usedIds.indexOf(currId) !== -1);
                    return this.usedIds.push(currId);
                }
            }]);

            function Widget(_ref) {
                var _this = this;

                var container = _ref.container,
                    dataset = _ref.dataset,
                    session = _ref.session,
                    anonymousId = _ref.anonymousId,
                    testId = _ref.testId,
                    sessionExpiry = _ref.sessionExpiry;

                _classCallCheck(this, Widget);

                // Check for required args
                var requiredArgs = {
                    container: container,
                    dataset: dataset,
                    templateId: dataset.templateId,
                    businessUnitId: dataset.businessunitId,
                    locale: dataset.locale
                };
                Object.keys(requiredArgs).forEach(function(arg) {
                    if (!requiredArgs[arg]) {
                        throw 'No ' + arg + ' supplied for TrustBox';
                    }
                });

                this.container = container;
                this.container.style.position = 'relative';

                this.dataset = dataset;
                this.iframes = {};
                this.tracking = new _tracking2.default(function(payload) {
                    return _this.iframes.main.sendMessage(payload);
                }, function() {
                    return _this.isInViewport(0.5);
                }, {
                    session: session,
                    group: dataset.group,
                    sessionExpiry: sessionExpiry,
                    anonymousId: anonymousId,
                    testId: testId,
                    templateId: dataset.templateId
                });
                this.isLazyLoaded = _constants.LAZY_LOADED_WIDGETS.indexOf(dataset.templateId) > -1;
                this.lazyLoadTimeout = null;
                this.isSameNodeAs = this.isSameNodeAs.bind(this);
                this.destroy = this.destroy.bind(this);

                this.stats = {
                    createIFrameCalls: 0,
                    iframeLoadEvents: 0,
                    events: {},
                    pongSent: false
                };
                // Doing this only once before putting in the event loop
                this.initialize = this.initialize.bind(this);
            }

            _createClass(Widget, [{
                key: 'isContainerInViewport',
                value: function isContainerInViewport() {
                    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

                    var rect = this.container.getBoundingClientRect();

                    var rectSize = {
                        width: rect.width || this.container.offsetWidth,
                        height: rect.height || this.container.offsetHeight
                    };

                    return rect.top >= 0 && rect.left >= 0 && rect.bottom - rectSize.height - offset <= (window.innerHeight || document.documentElement.clientHeight) && rect.right - rectSize.width - offset <= (window.innerWidth || document.documentElement.clientWidth);
                }
            }, {
                key: 'initialize',
                value: function initialize() {
                    if (!this.isLazyLoaded || this.isContainerInViewport()) {
                        this._widgetIFrameOrigin = '#{WidgetRoot}';
                        this.createIFrame('main');
                        this.attachMessageListener();
                    } else {
                        this.lazyLoadTimeout = setTimeout(this.initialize, 500);
                    }
                }
            }, {
                key: 'handleCommand',
                value: function handleCommand(_ref2) {
                    var data = _ref2.data,
                        origin = _ref2.origin;

                    try {
                        var parsedData = typeof data === 'string' ? JSON.parse(data) : data;
                        // Check if event is valid, i.e. it has a correct origin and widgetId.
                        var isValidEvent = origin === this._widgetIFrameOrigin && parsedData.widgetId === this.id;
                        if (!isValidEvent) {
                            return false;
                        }
                        return this.widgetIframeMessageHandler(parsedData);
                    } catch (ex) {
                        // eslint-disable-next-line
                        return false;
                    }
                }
            }, {
                key: 'attachMessageListener',
                value: function attachMessageListener() {
                    window.addEventListener('message', this.handleCommand.bind(this), false);
                }

                /**
                 * Handle messages intended for widgets/iframes.
                 *
                 * @param {Object} data - The message received.
                 * @param {Function} fallback - An optional function called where no matching
                 * action is found for the message received.
                 */

            }, {
                key: 'widgetIframeMessageHandler',
                value: function widgetIframeMessageHandler(data) {
                    var _this2 = this;

                    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function() {};

                    this.stats.events[data.command] = (this.stats.events[data.command] || 0) + 1;
                    var name = data.name,
                        style = data.style,
                        height = data.height,
                        targets = data.targets,
                        attachToBody = data.attachToBody;

                    var targetIFrame = this.iframes[name];

                    var actions = {
                        createIFrame: function createIFrame() {
                            return _this2.createIFrame(name, data, attachToBody);
                        },
                        setStyle: function setStyle() {
                            return targetIFrame.setStyle(style);
                        },
                        show: function show() {
                            return targetIFrame.show();
                        },
                        hide: function hide() {
                            return targetIFrame.hide();
                        },
                        focus: function focus() {
                            return targetIFrame.focus();
                        },
                        loaded: function loaded() {
                            return _this2.iframes.main.sendMessage('loaded');
                        },
                        message: function message() {
                            return targetIFrame.sendMessage(data);
                        },
                        ping: function ping() {
                            _this2.iframes.main.sendMessage({
                                command: 'pong'
                            });
                            _this2.stats.pongSent = true;
                        },
                        'resize-height': function resizeHeight() {
                            return _this2.getIframeOrMain(name).resizeHeight(height);
                        },
                        impression: function impression() {
                            return _this2.tracking.initialize();
                        },
                        scrollTo: function scrollTo() {
                            return _this2.scrollToTrustBox(targets);
                        }
                    };

                    var action = actions[data.command];
                    if (action) {
                        action();
                        return true;
                    }

                    fallback();
                    return false;
                }
            }, {
                key: 'createIFrame',
                value: function createIFrame(name, iframeData) {
                    var _this3 = this;

                    var attachToBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                    var iframe = new _iframe2.default(name, this.dataset, iframeData, attachToBody);
                    this.iframes[name] = iframe;

                    this.stats.createIFrameCalls += 1;
                    iframe.initialize(attachToBody ? document.body : this.container, function() {
                        iframe.setWidgetId(_this3.id);
                        _this3.stats.iframeLoadEvents += 1;
                    });
                }
            }, {
                key: 'getIframeOrMain',
                value: function getIframeOrMain(iframeName) {
                    return this.iframes[iframeName] || this.iframes.main;
                }
            }, {
                key: 'isInViewport',
                value: function isInViewport(allowance) {
                    return this.iframes.main.isInViewport(allowance);
                }
            }, {
                key: 'isSameNodeAs',
                value: function isSameNodeAs(element) {
                    try {
                        return this.container.isSameNode(element);
                    } catch (e) {
                        return false;
                    }
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    if (this.lazyLoadTimeout) {
                        clearTimeout(this.lazyLoadTimeout);
                    }
                }
            }, {
                key: 'closePopup',
                value: function closePopup() {
                    // Only execute if we have a popup iframe
                    if ('popup' in this.iframes) {
                        // Message payload used to signal to the main iframe that a popup
                        // has been closed. This mirrors the message defined in the vanilla
                        // framework at
                        // https://github.com/trustpilot/node-trustbox-framework-vanilla/blob/09d18b9d3a8032bca52c87a9ad0364e464db2c3d/modules/communication.js#L85function.
                        var mainPayload = {
                            name: 'main',
                            command: 'message',
                            message: 'popup toggled',
                            visible: false
                        };
                        this.iframes.main.sendMessage(mainPayload);
                        this.iframes.popup.hide();
                    }
                }
            }, {
                key: 'scrollToTrustBox',
                value: function scrollToTrustBox() {
                    var templateIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                    var elem = document.querySelector(templateIds.map(function(t) {
                        return '[data-template-id=\'' + t + '\']';
                    }).join(','));
                    if (elem) {
                        var iframe = elem.querySelector('iframe');
                        if (iframe) {
                            elem.scrollIntoView({
                                behavior: 'smooth'
                            });
                            iframe.contentWindow.focus();
                        }
                    }
                }
            }, {
                key: 'id',
                get: function get() {
                    if (!this._id) {
                        this._id = this.constructor.generateId();
                    }
                    return this._id;
                }
            }]);

            return Widget;
        }();

        Widget.usedIds = [];
        exports.default = Widget;

    }, {
        "./../constants": 1,
        "./iframe": 4,
        "./tracking": 6
    }],
    6: [function(require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        var _constants = require('../constants');

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Tracking = function() {
            function Tracking(sendMessage, isTrustBoxVisible, _ref) {
                var session = _ref.session,
                    sessionExpiry = _ref.sessionExpiry,
                    group = _ref.group,
                    anonymousId = _ref.anonymousId,
                    testId = _ref.testId,
                    templateId = _ref.templateId;

                _classCallCheck(this, Tracking);

                this.hasSentImpression = false;
                this.hasSentViewTracking = false;
                this.sendMessage = sendMessage;
                this.isTrustBoxVisible = isTrustBoxVisible;

                this.session = session;
                this.group = group;
                this.sessionExpiry = sessionExpiry;
                this.anonymousId = anonymousId;
                this.testId = testId;
                this.templateId = templateId;
            }

            /**
             * Initialize a Tracking instance.
             *
             * This should only be called once the TrustBox has indicated it is ready to
             * handle tracking events.
             */


            _createClass(Tracking, [{
                key: 'initialize',
                value: function initialize() {
                    this.sendImpressionData();
                    this.attachListener();
                    this.shouldDetachListener();
                }
            }, {
                key: 'getTrackingData',
                value: function getTrackingData(commandName) {
                    var data = {
                        command: commandName,
                        url: window.document.URL,
                        referrer: window.document.referrer,
                        userAgent: window.navigator.userAgent,
                        language: window.navigator.userLanguage || window.navigator.language,
                        platform: window.navigator.platform
                    };

                    if (this.session && this.group) {
                        data.session = this.session;
                        data.sessionExpiry = this.sessionExpiry;
                    }

                    if (this.anonymousId) {
                        data.anonymousId = this.anonymousId;
                    }

                    if (this.testId) {
                        data.testId = this.testId;
                    }

                    return data;
                }
            }, {
                key: 'sendImpressionData',
                value: function sendImpressionData() {
                    if (this.hasSentImpression) {
                        return;
                    }
                    this.hasSentImpression = true;

                    var data = this.getTrackingData('impression-received');
                    this.sendMessage(data);
                }
            }, {
                key: 'sendVisibilityData',
                value: function sendVisibilityData() {
                    if (this.hasSentViewTracking) {
                        return;
                    }
                    this.hasSentViewTracking = true;

                    var data = this.getTrackingData('trustbox-in-viewport');
                    this.sendMessage(data);
                }
            }, {
                key: 'attachListener',
                value: function attachListener() {
                    var _arguments = arguments,
                        _this = this;

                    var debounce = function debounce(func, wait) {
                        var timeout = void 0;
                        return function() {
                            var args = _arguments;
                            var later = function later() {
                                timeout = null;
                                func(args);
                            };
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                        };
                    };

                    var checkViewPortVisibility = debounce(function() {
                        var isEmptyWidget = _this.templateId === _constants.EMPTY_WIDGET_ID; // Filter out empty iframe widgets from the view tracking
                        var removeListener = isEmptyWidget || _this.shouldDetachListener();
                        if (removeListener) {
                            /* eslint-disable */
                            window.removeEventListener('scroll', scrollEventListener, eventOptions);
                            window.removeEventListener('resize', resizeEventListener, eventOptions);
                            /* eslint-enable */
                        }
                    }, 100);

                    var eventOptions = {
                        passive: true,
                        capture: false
                    };
                    var scrollEventListener = window.addEventListener('scroll', checkViewPortVisibility, eventOptions);
                    var resizeEventListener = window.addEventListener('resize', checkViewPortVisibility, eventOptions);
                    checkViewPortVisibility();
                }

                /**
                 * Track the visibility of the TrustBox.
                 *
                 * What this method actually does is set the current 'seen' state of the
                 * TrustBox, and returns a boolean flag which can be used to determine
                 * whether or not to continue listening for visibility events and calling
                 * this method.
                 */

            }, {
                key: 'shouldDetachListener',
                value: function shouldDetachListener() {
                    // we can't send the view data until the iframe is ready to receive it.
                    // We're using `hasSentImpression` to know it's loaded and rely on the
                    // `impression` message handler to call us when that changes.
                    if (this.hasSentViewTracking) {
                        return true;
                    }

                    // already detected it, weren't ready to send earlier though
                    if (this.hasBeenVisible) {
                        if (this.hasSentImpression) {
                            this.sendVisibilityData();
                        }
                        return true;
                    }

                    if (!this.isTrustBoxVisible()) {
                        return false;
                    }

                    if (!this.hasSentImpression) {
                        this.hasBeenVisible = true;
                        return true;
                    }

                    this.sendVisibilityData();
                    return true;
                }
            }]);

            return Tracking;
        }();

        exports.default = Tracking;

    }, {
        "../constants": 1
    }],
    7: [function(require, module, exports) {
        'use strict';

        function parse(req) {
            try {
                return JSON.parse(req.responseText);
            } catch (e) {
                return req.responseText;
            }
        }

        function xhrGet(params) {
            var request = new window.XMLHttpRequest();
            request.open('GET', params.url, true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 300) {
                        params.success(parse(request));
                    } else if (params.error) {
                        params.error(parse(request));
                    }
                }
            };
            request.send();
        }

        module.exports = {
            xhrGet: xhrGet
        };

    }, {}],
    8: [function(require, module, exports) {
        'use strict';

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        /* eslint global-require: 0 */
        (function(currentVersion) {
            try {
                (function() {
                    var WidgetManagement = require('./lib/widget-management.js').default;

                    var isLoaded = window.Trustpilot && Object.keys(window.Trustpilot).length > 0;
                    window.Trustpilot = isLoaded ? window.Trustpilot : {
                        loadFromElement: function loadFromElement(element, forceReload) {
                            if (!element) {
                                // eslint-disable-next-line
                                console.error('No element supplied to "Trustpilot.loadFromElement"');
                                return;
                            }
                            return this.Modules.WidgetManagement && this.Modules.WidgetManagement.applyWidgetFromDomElement(element, forceReload);
                        }
                    };
                    window.Trustpilot.Modules = window.Trustpilot.Modules || {};

                    if (!window.Trustpilot.Modules.WidgetManagement) {
                        window.Trustpilot.Modules.WidgetManagement = new WidgetManagement(window, document, currentVersion);
                        window.Trustpilot.Modules.WidgetManagement.initializeOnPageLoad();

                        // Use as a fallback. Try to load trustbox no matter what
                        window.addEventListener('load', function() {
                            try {
                                var elementArray = document.getElementsByClassName('trustpilot-widget');
                                for (var i = 0; i < elementArray.length; ++i) {
                                    var trustbox = elementArray[i];
                                    var tagName = trustbox.firstChild && trustbox.firstChild.tagName;
                                    if (tagName && tagName !== 'IFRAME') {
                                        window.Trustpilot.loadFromElement(trustbox);
                                    }
                                }
                            } catch (e) {
                                // eslint-disable-next-line
                                console.error('Error loading trustboxes ' + e);
                            }
                        });
                    } else if (window.Trustpilot.Modules.WidgetManagement.version !== currentVersion) {
                        // eslint-disable-next-line
                        console.log('Detected legacy TrustBox bootstrap with version:', window.Trustpilot.Modules.WidgetManagement.version, ', current:', currentVersion);
                    }
                    window.addEventListener('click', function() {
                        window.Trustpilot.Modules.WidgetManagement.closePopups();
                    });
                })();
            } catch (e) {
                (function() {
                    function postError(message) {
                        // eslint-disable-next-line
                        console.error('Error on bootstrap:' + message);

                        var url = '#{WidgetRoot}/feedback/report-error';
                        var params = ['error=' + encodeURIComponent(message), 'uri=' + encodeURIComponent(document.URL), 'bootstrapVersion=' + currentVersion].join('&');

                        var img = document.createElement('img');
                        img.src = url + '?' + params;
                    }

                    try {
                        if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object') {
                            postError(e.message);
                        } else {
                            postError(e);
                        }
                    } catch (e) {
                        // eslint-disable-next-line
                        console.error('Error on error reporting method:' + e);
                    }
                })();
            }
        })('#{Octopus.Release.Number}');

    }, {
        "./lib/widget-management.js": 3
    }]
}, {}, [8]);