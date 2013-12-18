(function () {
    var c = this,
        a = c._,
        d = {}, b = Array.prototype,
        h = Object.prototype,
        k = b.push,
        l = b.slice,
        n = b.concat,
        m = h.toString,
        q = h.hasOwnProperty,
        v = b.forEach,
        t = b.map,
        r = b.reduce,
        p = b.reduceRight,
        u = b.filter,
        y = b.every,
        B = b.some,
        C = b.indexOf,
        D = b.lastIndexOf,
        h = Array.isArray,
        E = Object.keys,
        F = Function.prototype.bind,
        f = function (a) {
            if (a instanceof f) return a;
            if (!(this instanceof f)) return new f(a);
            this._wrapped = a
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = f), exports._ =
        f) : c._ = f;
    f.VERSION = "1.4.2";
    var w = f.each = f.forEach = function (a, g, b) {
        if (null != a)
            if (v && a.forEach === v) a.forEach(g, b);
            else if (a.length === +a.length)
            for (var e = 0, c = a.length; e < c && g.call(b, a[e], e, a) !== d; e++);
        else
            for (e in a)
                if (f.has(a, e) && g.call(b, a[e], e, a) === d) break
    };
    f.map = f.collect = function (a, g, b) {
        var e = [];
        if (null == a) return e;
        if (t && a.map === t) return a.map(g, b);
        w(a, function (a, s, d) {
            e[e.length] = g.call(b, a, s, d)
        });
        return e
    };
    f.reduce = f.foldl = f.inject = function (a, g, b, e) {
        var d = 2 < arguments.length;
        null == a && (a = []);
        if (r &&
            a.reduce === r) return e && (g = f.bind(g, e)), d ? a.reduce(g, b) : a.reduce(g);
        w(a, function (a, s, f) {
            d ? b = g.call(e, b, a, s, f) : (b = a, d = !0)
        });
        if (!d) throw new TypeError("Reduce of empty array with no initial value");
        return b
    };
    f.reduceRight = f.foldr = function (a, g, b, e) {
        var d = 2 < arguments.length;
        null == a && (a = []);
        if (p && a.reduceRight === p) return e && (g = f.bind(g, e)), 2 < arguments.length ? a.reduceRight(g, b) : a.reduceRight(g);
        var c = a.length;
        if (c !== +c) var h = f.keys(a),
        c = h.length;
        w(a, function (f, x, m) {
            x = h ? h[--c] : --c;
            d ? b = g.call(e, b, a[x], x, m) :
                (b = a[x], d = !0)
        });
        if (!d) throw new TypeError("Reduce of empty array with no initial value");
        return b
    };
    f.find = f.detect = function (a, g, b) {
        var e;
        H(a, function (a, s, d) {
            if (g.call(b, a, s, d)) return e = a, !0
        });
        return e
    };
    f.filter = f.select = function (a, g, b) {
        var e = [];
        if (null == a) return e;
        if (u && a.filter === u) return a.filter(g, b);
        w(a, function (a, s, d) {
            g.call(b, a, s, d) && (e[e.length] = a)
        });
        return e
    };
    f.reject = function (a, g, b) {
        var e = [];
        if (null == a) return e;
        w(a, function (a, s, d) {
            g.call(b, a, s, d) || (e[e.length] = a)
        });
        return e
    };
    f.every = f.all =
        function (a, g, e) {
            g || (g = f.identity);
            var b = !0;
            if (null == a) return b;
            if (y && a.every === y) return a.every(g, e);
            w(a, function (a, s, f) {
                if (!(b = b && g.call(e, a, s, f))) return d
            });
            return !!b
    };
    var H = f.some = f.any = function (a, g, b) {
        g || (g = f.identity);
        var e = !1;
        if (null == a) return e;
        if (B && a.some === B) return a.some(g, b);
        w(a, function (a, s, f) {
            if (e || (e = g.call(b, a, s, f))) return d
        });
        return !!e
    };
    f.contains = f.include = function (a, g) {
        var e = !1;
        return null == a ? e : C && a.indexOf === C ? -1 != a.indexOf(g) : e = H(a, function (a) {
            return a === g
        })
    };
    f.invoke = function (a,
        g) {
        var e = l.call(arguments, 2);
        return f.map(a, function (a) {
            return (f.isFunction(g) ? g : a[g]).apply(a, e)
        })
    };
    f.pluck = function (a, g) {
        return f.map(a, function (a) {
            return a[g]
        })
    };
    f.where = function (a, g) {
        return f.isEmpty(g) ? [] : f.filter(a, function (a) {
            for (var s in g)
                if (g[s] !== a[s]) return !1;
            return !0
        })
    };
    f.max = function (a, g, e) {
        if (!g && f.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.max.apply(Math, a);
        if (!g && f.isEmpty(a)) return -Infinity;
        var b = {
            computed: -Infinity
        };
        w(a, function (a, s, d) {
            s = g ? g.call(e, a, s, d) : a;
            s >= b.computed &&
                (b = {
                value: a,
                computed: s
            })
        });
        return b.value
    };
    f.min = function (a, g, e) {
        if (!g && f.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.min.apply(Math, a);
        if (!g && f.isEmpty(a)) return Infinity;
        var b = {
            computed: Infinity
        };
        w(a, function (a, s, d) {
            s = g ? g.call(e, a, s, d) : a;
            s < b.computed && (b = {
                value: a,
                computed: s
            })
        });
        return b.value
    };
    f.shuffle = function (a) {
        var g, e = 0,
            b = [];
        w(a, function (a) {
            g = f.random(e++);
            b[e - 1] = b[g];
            b[g] = a
        });
        return b
    };
    var A = function (a) {
        return f.isFunction(a) ? a : function (g) {
            return g[a]
        }
    };
    f.sortBy = function (a, g, e) {
        var b =
            A(g);
        return f.pluck(f.map(a, function (a, g, s) {
            return {
                value: a,
                index: g,
                criteria: b.call(e, a, g, s)
            }
        }).sort(function (a, g) {
            var s = a.criteria,
                e = g.criteria;
            if (s !== e) {
                if (s > e || void 0 === s) return 1;
                if (s < e || void 0 === e) return -1
            }
            return a.index < g.index ? -1 : 1
        }), "value")
    };
    var G = function (a, g, e, b) {
        var d = {}, f = A(g);
        w(a, function (g, c) {
            var h = f.call(e, g, c, a);
            b(d, h, g)
        });
        return d
    };
    f.groupBy = function (a, g, e) {
        return G(a, g, e, function (a, g, e) {
            (f.has(a, g) ? a[g] : a[g] = []).push(e)
        })
    };
    f.countBy = function (a, g, e) {
        return G(a, g, e, function (a, g, e) {
            f.has(a,
                g) || (a[g] = 0);
            a[g]++
        })
    };
    f.sortedIndex = function (a, g, e, b) {
        e = null == e ? f.identity : A(e);
        g = e.call(b, g);
        for (var d = 0, c = a.length; d < c;) {
            var h = d + c >>> 1;
            e.call(b, a[h]) < g ? d = h + 1 : c = h
        }
        return d
    };
    f.toArray = function (a) {
        return !a ? [] : a.length === +a.length ? l.call(a) : f.values(a)
    };
    f.size = function (a) {
        return a.length === +a.length ? a.length : f.keys(a).length
    };
    f.first = f.head = f.take = function (a, g, e) {
        return null != g && !e ? l.call(a, 0, g) : a[0]
    };
    f.initial = function (a, g, e) {
        return l.call(a, 0, a.length - (null == g || e ? 1 : g))
    };
    f.last = function (a, g, e) {
        return null !=
            g && !e ? l.call(a, Math.max(a.length - g, 0)) : a[a.length - 1]
    };
    f.rest = f.tail = f.drop = function (a, g, e) {
        return l.call(a, null == g || e ? 1 : g)
    };
    f.compact = function (a) {
        return f.filter(a, function (a) {
            return !!a
        })
    };
    var g = function (a, e, b) {
        w(a, function (a) {
            f.isArray(a) ? e ? k.apply(b, a) : g(a, e, b) : b.push(a)
        });
        return b
    };
    f.flatten = function (a, e) {
        return g(a, e, [])
    };
    f.without = function (a) {
        return f.difference(a, l.call(arguments, 1))
    };
    f.uniq = f.unique = function (a, g, e, b) {
        e = e ? f.map(a, e, b) : a;
        var d = [],
            c = [];
        w(e, function (e, b) {
            if (g ? !b || c[c.length - 1] !==
                e : !f.contains(c, e)) c.push(e), d.push(a[b])
        });
        return d
    };
    f.union = function () {
        return f.uniq(n.apply(b, arguments))
    };
    f.intersection = function (a) {
        var g = l.call(arguments, 1);
        return f.filter(f.uniq(a), function (a) {
            return f.every(g, function (g) {
                return 0 <= f.indexOf(g, a)
            })
        })
    };
    f.difference = function (a) {
        var g = n.apply(b, l.call(arguments, 1));
        return f.filter(a, function (a) {
            return !f.contains(g, a)
        })
    };
    f.zip = function () {
        for (var a = l.call(arguments), g = f.max(f.pluck(a, "length")), e = Array(g), b = 0; b < g; b++) e[b] = f.pluck(a, "" + b);
        return e
    };
    f.object = function (a, g) {
        for (var e = {}, b = 0, d = a.length; b < d; b++) g ? e[a[b]] = g[b] : e[a[b][0]] = a[b][1];
        return e
    };
    f.indexOf = function (a, g, e) {
        if (null == a) return -1;
        var b = 0,
            d = a.length;
        if (e)
            if ("number" == typeof e) b = 0 > e ? Math.max(0, d + e) : e;
            else return b = f.sortedIndex(a, g), a[b] === g ? b : -1;
        if (C && a.indexOf === C) return a.indexOf(g, e);
        for (; b < d; b++)
            if (a[b] === g) return b;
        return -1
    };
    f.lastIndexOf = function (a, g, e) {
        if (null == a) return -1;
        var b = null != e;
        if (D && a.lastIndexOf === D) return b ? a.lastIndexOf(g, e) : a.lastIndexOf(g);
        for (e = b ? e : a.length; e--;)
            if (a[e] ===
                g) return e;
        return -1
    };
    f.range = function (a, g, e) {
        1 >= arguments.length && (g = a || 0, a = 0);
        e = arguments[2] || 1;
        for (var b = Math.max(Math.ceil((g - a) / e), 0), d = 0, c = Array(b); d < b;) c[d++] = a, a += e;
        return c
    };
    var e = function () {};
    f.bind = function (a, g) {
        var b, d;
        if (a.bind === F && F) return F.apply(a, l.call(arguments, 1));
        if (!f.isFunction(a)) throw new TypeError;
        d = l.call(arguments, 2);
        return b = function () {
            if (!(this instanceof b)) return a.apply(g, d.concat(l.call(arguments)));
            e.prototype = a.prototype;
            var c = new e,
                f = a.apply(c, d.concat(l.call(arguments)));
            return Object(f) === f ? f : c
        }
    };
    f.bindAll = function (a) {
        var g = l.call(arguments, 1);
        0 == g.length && (g = f.functions(a));
        w(g, function (g) {
            a[g] = f.bind(a[g], a)
        });
        return a
    };
    f.memoize = function (a, g) {
        var e = {};
        g || (g = f.identity);
        return function () {
            var b = g.apply(this, arguments);
            return f.has(e, b) ? e[b] : e[b] = a.apply(this, arguments)
        }
    };
    f.delay = function (a, g) {
        var e = l.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, e)
        }, g)
    };
    f.defer = function (a) {
        return f.delay.apply(f, [a, 1].concat(l.call(arguments, 1)))
    };
    f.throttle =
        function (a, g) {
            var e, b, d, c, h, x, m = f.debounce(function () {
                    h = c = !1
                }, g);
            return function () {
                e = this;
                b = arguments;
                d || (d = setTimeout(function () {
                    d = null;
                    h && (x = a.apply(e, b));
                    m()
                }, g));
                c ? h = !0 : (c = !0, x = a.apply(e, b));
                m();
                return x
            }
    };
    f.debounce = function (a, g, e) {
        var b, d;
        return function () {
            var c = this,
                f = arguments,
                h = e && !b;
            clearTimeout(b);
            b = setTimeout(function () {
                b = null;
                e || (d = a.apply(c, f))
            }, g);
            h && (d = a.apply(c, f));
            return d
        }
    };
    f.once = function (a) {
        var g = !1,
            e;
        return function () {
            if (g) return e;
            g = !0;
            e = a.apply(this, arguments);
            a = null;
            return e
        }
    };
    f.wrap = function (a, g) {
        return function () {
            var e = [a];
            k.apply(e, arguments);
            return g.apply(this, e)
        }
    };
    f.compose = function () {
        var a = arguments;
        return function () {
            for (var g = arguments, e = a.length - 1; 0 <= e; e--) g = [a[e].apply(this, g)];
            return g[0]
        }
    };
    f.after = function (a, g) {
        return 0 >= a ? g() : function () {
            if (1 > --a) return g.apply(this, arguments)
        }
    };
    f.keys = E || function (a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var g = [],
            e;
        for (e in a) f.has(a, e) && (g[g.length] = e);
        return g
    };
    f.values = function (a) {
        var g = [],
            e;
        for (e in a) f.has(a,
            e) && g.push(a[e]);
        return g
    };
    f.pairs = function (a) {
        var g = [],
            e;
        for (e in a) f.has(a, e) && g.push([e, a[e]]);
        return g
    };
    f.invert = function (a) {
        var g = {}, e;
        for (e in a) f.has(a, e) && (g[a[e]] = e);
        return g
    };
    f.functions = f.methods = function (a) {
        var g = [],
            e;
        for (e in a) f.isFunction(a[e]) && g.push(e);
        return g.sort()
    };
    f.extend = function (a) {
        w(l.call(arguments, 1), function (g) {
            for (var e in g) a[e] = g[e]
        });
        return a
    };
    f.pick = function (a) {
        var g = {}, e = n.apply(b, l.call(arguments, 1));
        w(e, function (e) {
            e in a && (g[e] = a[e])
        });
        return g
    };
    f.omit = function (a) {
        var g = {}, e = n.apply(b, l.call(arguments, 1)),
            d;
        for (d in a) f.contains(e, d) || (g[d] = a[d]);
        return g
    };
    f.defaults = function (a) {
        w(l.call(arguments, 1), function (g) {
            for (var e in g) null == a[e] && (a[e] = g[e])
        });
        return a
    };
    f.clone = function (a) {
        return !f.isObject(a) ? a : f.isArray(a) ? a.slice() : f.extend({}, a)
    };
    f.tap = function (a, g) {
        g(a);
        return a
    };
    var x = function (a, g, e, b) {
        if (a === g) return 0 !== a || 1 / a == 1 / g;
        if (null == a || null == g) return a === g;
        a instanceof f && (a = a._wrapped);
        g instanceof f && (g = g._wrapped);
        var d = m.call(a);
        if (d != m.call(g)) return !1;
        switch (d) {
        case "[object String]":
            return a == String(g);
        case "[object Number]":
            return a != +a ? g != +g : 0 == a ? 1 / a == 1 / g : a == +g;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +g;
        case "[object RegExp]":
            return a.source == g.source && a.global == g.global && a.multiline == g.multiline && a.ignoreCase == g.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof g) return !1;
        for (var c = e.length; c--;)
            if (e[c] == a) return b[c] == g;
        e.push(a);
        b.push(g);
        var c = 0,
            h = !0;
        if ("[object Array]" == d) {
            if (c = a.length, h = c == g.length)
                for (; c-- && (h = x(a[c],
                    g[c], e, b)););
        } else {
            var d = a.constructor,
                k = g.constructor;
            if (d !== k && (!f.isFunction(d) || !(d instanceof d && f.isFunction(k) && k instanceof k))) return !1;
            for (var z in a)
                if (f.has(a, z) && (c++, !(h = f.has(g, z) && x(a[z], g[z], e, b)))) break;
            if (h) {
                for (z in g)
                    if (f.has(g, z) && !c--) break;
                h = !c
            }
        }
        e.pop();
        b.pop();
        return h
    };
    f.isEqual = function (a, g) {
        return x(a, g, [], [])
    };
    f.isEmpty = function (a) {
        if (null == a) return !0;
        if (f.isArray(a) || f.isString(a)) return 0 === a.length;
        for (var g in a)
            if (f.has(a, g)) return !1;
        return !0
    };
    f.isElement = function (a) {
        return !!(a &&
            1 === a.nodeType)
    };
    f.isArray = h || function (a) {
        return "[object Array]" == m.call(a)
    };
    f.isObject = function (a) {
        return a === Object(a)
    };
    w("Arguments Function String Number Date RegExp".split(" "), function (a) {
        f["is" + a] = function (g) {
            return m.call(g) == "[object " + a + "]"
        }
    });
    f.isArguments(arguments) || (f.isArguments = function (a) {
        return !(!a || !f.has(a, "callee"))
    });
    "function" !== typeof / . / && (f.isFunction = function (a) {
        return "function" === typeof a
    });
    f.isFinite = function (a) {
        return f.isNumber(a) && isFinite(a)
    };
    f.isNaN = function (a) {
        return f.isNumber(a) &&
            a != +a
    };
    f.isBoolean = function (a) {
        return !0 === a || !1 === a || "[object Boolean]" == m.call(a)
    };
    f.isNull = function (a) {
        return null === a
    };
    f.isUndefined = function (a) {
        return void 0 === a
    };
    f.has = function (a, g) {
        return q.call(a, g)
    };
    f.noConflict = function () {
        c._ = a;
        return this
    };
    f.identity = function (a) {
        return a
    };
    f.times = function (a, g, e) {
        for (var b = 0; b < a; b++) g.call(e, b)
    };
    f.random = function (a, g) {
        null == g && (g = a, a = 0);
        return a + (0 | Math.random() * (g - a + 1))
    };
    var z = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    z.unescape = f.invert(z.escape);
    var J = {
        escape: RegExp("[" + f.keys(z.escape).join("") + "]", "g"),
        unescape: RegExp("(" + f.keys(z.unescape).join("|") + ")", "g")
    };
    f.each(["escape", "unescape"], function (a) {
        f[a] = function (g) {
            return null == g ? "" : ("" + g).replace(J[a], function (g) {
                return z[a][g]
            })
        }
    });
    f.result = function (a, g) {
        if (null == a) return null;
        var e = a[g];
        return f.isFunction(e) ? e.call(a) : e
    };
    f.mixin = function (a) {
        w(f.functions(a), function (g) {
            var e = f[g] = a[g];
            f.prototype[g] = function () {
                var a = [this._wrapped];
                k.apply(a, arguments);
                a = e.apply(f, a);
                return this._chain ? f(a).chain() : a
            }
        })
    };
    var K = 0;
    f.uniqueId = function (a) {
        var g = K++;
        return a ? a + g : g
    };
    f.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
        L = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, M = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    f.template = function (a, g, e) {
        e = f.defaults({}, e, f.templateSettings);
        var b = RegExp([(e.escape || I).source, (e.interpolate || I).source, (e.evaluate || I).source].join("|") +
            "|$", "g"),
            d = 0,
            c = "__p+='";
        a.replace(b, function (g, e, b, f, h) {
            c += a.slice(d, h).replace(M, function (a) {
                return "\\" + L[a]
            });
            c += e ? "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : b ? "'+\n((__t=(" + b + "))==null?'':__t)+\n'" : f ? "';\n" + f + "\n__p+='" : "";
            d = h + g.length
        });
        c += "';\n";
        e.variable || (c = "with(obj||{}){\n" + c + "}\n");
        c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
        try {
            var h = new Function(e.variable || "obj", "_", c)
        } catch (x) {
            throw x.source = c, x;
        }
        if (g) return h(g,
            f);
        g = function (a) {
            return h.call(this, a, f)
        };
        g.source = "function(" + (e.variable || "obj") + "){\n" + c + "}";
        return g
    };
    f.chain = function (a) {
        return f(a).chain()
    };
    f.mixin(f);
    w("pop push reverse shift sort splice unshift".split(" "), function (a) {
        var g = b[a];
        f.prototype[a] = function () {
            var e = this._wrapped;
            g.apply(e, arguments);
            ("shift" == a || "splice" == a) && 0 === e.length && delete e[0];
            return this._chain ? f(e).chain() : e
        }
    });
    w(["concat", "join", "slice"], function (a) {
        var g = b[a];
        f.prototype[a] = function () {
            var a = g.apply(this._wrapped,
                arguments);
            return this._chain ? f(a).chain() : a
        }
    });
    f.extend(f.prototype, {
        chain: function () {
            this._chain = !0;
            return this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this);
(function () {
    var c = this,
        a = c.Backbone,
        d = Array.prototype.slice,
        b = Array.prototype.splice,
        h;
    h = "undefined" !== typeof exports ? exports : c.Backbone = {};
    h.VERSION = "0.9.2";
    var k = c._;
    !k && "undefined" !== typeof require && (k = require("underscore"));
    var l = c.jQuery || c.Zepto || c.ender;
    h.setDomLibrary = function (a) {
        l = a
    };
    h.noConflict = function () {
        c.Backbone = a;
        return this
    };
    h.emulateHTTP = !1;
    h.emulateJSON = !1;
    var n = /\s+/,
        m = h.Events = {
            on: function (a, e, b) {
                var d, c, f, h, m;
                if (!e) return this;
                a = a.split(n);
                for (d = this._callbacks || (this._callbacks = {}); c = a.shift();) f = (m = d[c]) ? m.tail : {}, f.next = h = {}, f.context = b, f.callback = e, d[c] = {
                    tail: h,
                    next: m ? m.next : f
                };
                return this
            },
            off: function (a, e, b) {
                var d, c, f, h, m, l;
                if (c = this._callbacks) {
                    if (!a && !e && !b) return delete this._callbacks, this;
                    for (a = a ? a.split(n) : k.keys(c); d = a.shift();)
                        if (f = c[d], delete c[d], f && (e || b))
                            for (h = f.tail;
                                (f = f.next) !== h;)
                                if (m = f.callback, l = f.context, e && m !== e || b && l !== b) this.on(d, m, l);
                    return this
                }
            },
            trigger: function (a) {
                var e, b, c, f, h, m;
                if (!(c = this._callbacks)) return this;
                h = c.all;
                a = a.split(n);
                for (m =
                    d.call(arguments, 1); e = a.shift();) {
                    if (b = c[e])
                        for (f = b.tail;
                            (b = b.next) !== f;) b.callback.apply(b.context || this, m);
                    if (b = h) {
                        f = b.tail;
                        for (e = [e].concat(m);
                            (b = b.next) !== f;) b.callback.apply(b.context || this, e)
                    }
                }
                return this
            }
        };
    m.bind = m.on;
    m.unbind = m.off;
    var q = h.Model = function (a, e) {
        var b;
        a || (a = {});
        e && e.parse && (a = this.parse(a));
        if (b = A(this, "defaults")) a = k.extend({}, b, a);
        e && e.collection && (this.collection = e.collection);
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = k.uniqueId("c");
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(a, {
            silent: !0
        });
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = k.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    k.extend(q.prototype, m, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (a) {
            return k.clone(this.attributes)
        },
        get: function (a) {
            return this.attributes[a]
        },
        escape: function (a) {
            var e;
            if (e = this._escapedAttributes[a]) return e;
            e = this.get(a);
            return this._escapedAttributes[a] = k.escape(null ==
                e ? "" : "" + e)
        },
        has: function (a) {
            return null != this.get(a)
        },
        set: function (a, e, b) {
            var d, c;
            k.isObject(a) || null == a ? (d = a, b = e) : (d = {}, d[a] = e);
            b || (b = {});
            if (!d) return this;
            d instanceof q && (d = d.attributes);
            if (b.unset)
                for (c in d) d[c] = void 0;
            if (!this._validate(d, b)) return !1;
            this.idAttribute in d && (this.id = d[this.idAttribute]);
            e = b.changes = {};
            var f = this.attributes,
                h = this._escapedAttributes,
                m = this._previousAttributes || {};
            for (c in d) {
                a = d[c];
                if (!k.isEqual(f[c], a) || b.unset && k.has(f, c)) delete h[c], (b.silent ? this._silent :
                    e)[c] = !0;
                b.unset ? delete f[c] : f[c] = a;
                !k.isEqual(m[c], a) || k.has(f, c) != k.has(m, c) ? (this.changed[c] = a, b.silent || (this._pending[c] = !0)) : (delete this.changed[c], delete this._pending[c])
            }
            b.silent || this.change(b);
            return this
        },
        unset: function (a, e) {
            (e || (e = {})).unset = !0;
            return this.set(a, null, e)
        },
        clear: function (a) {
            (a || (a = {})).unset = !0;
            return this.set(k.clone(this.attributes), a)
        },
        fetch: function (a) {
            a = a ? k.clone(a) : {};
            var e = this,
                b = a.success;
            a.success = function (d, c, f) {
                if (!e.set(e.parse(d, f), a)) return !1;
                b && b(e, d)
            };
            a.error = h.wrapError(a.error, e, a);
            return (this.sync || h.sync).call(this, "read", this, a)
        },
        save: function (a, e, b) {
            var d, c;
            k.isObject(a) || null == a ? (d = a, b = e) : (d = {}, d[a] = e);
            b = b ? k.clone(b) : {};
            if (b.wait) {
                if (!this._validate(d, b)) return !1;
                c = k.clone(this.attributes)
            }
            a = k.extend({}, b, {
                silent: !0
            });
            if (d && !this.set(d, b.wait ? a : b)) return !1;
            var f = this,
                m = b.success;
            b.success = function (a, g, e) {
                g = f.parse(a, e);
                b.wait && (delete b.wait, g = k.extend(d || {}, g));
                if (!f.set(g, b)) return !1;
                m ? m(f, a) : f.trigger("sync", f, a, b)
            };
            b.error = h.wrapError(b.error,
                f, b);
            e = this.isNew() ? "create" : "update";
            e = (this.sync || h.sync).call(this, e, this, b);
            b.wait && this.set(c, a);
            return e
        },
        destroy: function (a) {
            a = a ? k.clone(a) : {};
            var e = this,
                b = a.success,
                d = function () {
                    e.trigger("destroy", e, e.collection, a)
                };
            if (this.isNew()) return d(), !1;
            a.success = function (c) {
                a.wait && d();
                b ? b(e, c) : e.trigger("sync", e, c, a)
            };
            a.error = h.wrapError(a.error, e, a);
            var c = (this.sync || h.sync).call(this, "delete", this, a);
            a.wait || d();
            return c
        },
        url: function () {
            var a = A(this, "urlRoot") || A(this.collection, "url") || G();
            return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (a, e) {
            return a
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        change: function (a) {
            a || (a = {});
            var e = this._changing;
            this._changing = !0;
            for (var b in this._silent) this._pending[b] = !0;
            var d = k.extend({}, a.changes, this._silent);
            this._silent = {};
            for (b in d) this.trigger("change:" + b, this, this.get(b), a);
            if (e) return this;
            for (; !k.isEmpty(this._pending);) {
                this._pending = {};
                this.trigger("change", this, a);
                for (b in this.changed)!this._pending[b] && !this._silent[b] && delete this.changed[b];
                this._previousAttributes = k.clone(this.attributes)
            }
            this._changing = !1;
            return this
        },
        hasChanged: function (a) {
            return !arguments.length ? !k.isEmpty(this.changed) : k.has(this.changed, a)
        },
        changedAttributes: function (a) {
            if (!a) return this.hasChanged() ? k.clone(this.changed) : !1;
            var e, b = !1,
                d = this._previousAttributes,
                c;
            for (c in a)
                if (!k.isEqual(d[c], e = a[c]))(b || (b = {}))[c] = e;
            return b
        },
        previous: function (a) {
            return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[a]
        },
        previousAttributes: function () {
            return k.clone(this._previousAttributes)
        },
        isValid: function () {
            return !this.validate(this.attributes)
        },
        _validate: function (a, e) {
            if (e.silent || !this.validate) return !0;
            a = k.extend({}, this.attributes, a);
            var b = this.validate(a, e);
            if (!b) return !0;
            e && e.error ? e.error(this, b, e) : this.trigger("error", this, b, e);
            return !1
        }
    });
    var v = h.Collection = function (a, e) {
        e || (e = {});
        e.model && (this.model = e.model);
        e.comparator && (this.comparator = e.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, {
            silent: !0,
            parse: e.parse
        })
    };
    k.extend(v.prototype, m, {
        model: q,
        initialize: function () {},
        toJSON: function (a) {
            return this.map(function (e) {
                return e.toJSON(a)
            })
        },
        add: function (a, e) {
            var d, c, f, h, m, l = {}, q = {}, n = [];
            e || (e = {});
            a = k.isArray(a) ? a.slice() : [a];
            d = 0;
            for (c = a.length; d < c; d++) {
                if (!(f = a[d] = this._prepareModel(a[d], e))) throw Error("Can't add an invalid model to a collection");
                h = f.cid;
                m = f.id;
                l[h] || this._byCid[h] || null != m && (q[m] || this._byId[m]) ?
                    n.push(d) : l[h] = q[m] = f
            }
            for (d = n.length; d--;) a.splice(n[d], 1);
            d = 0;
            for (c = a.length; d < c; d++)(f = a[d]).on("all", this._onModelEvent, this), this._byCid[f.cid] = f, null != f.id && (this._byId[f.id] = f);
            this.length += c;
            b.apply(this.models, [null != e.at ? e.at : this.models.length, 0].concat(a));
            this.comparator && this.sort({
                silent: !0
            });
            if (e.silent) return this;
            d = 0;
            for (c = this.models.length; d < c; d++)
                if (l[(f = this.models[d]).cid]) e.index = d, f.trigger("add", f, this, e);
            return this
        },
        remove: function (a, e) {
            var b, d, c, f;
            e || (e = {});
            a = k.isArray(a) ?
                a.slice() : [a];
            b = 0;
            for (d = a.length; b < d; b++)
                if (f = this.getByCid(a[b]) || this.get(a[b])) delete this._byId[f.id], delete this._byCid[f.cid], c = this.indexOf(f), this.models.splice(c, 1), this.length--, e.silent || (e.index = c, f.trigger("remove", f, this, e)), this._removeReference(f);
            return this
        },
        push: function (a, e) {
            a = this._prepareModel(a, e);
            this.add(a, e);
            return a
        },
        pop: function (a) {
            var e = this.at(this.length - 1);
            this.remove(e, a);
            return e
        },
        unshift: function (a, e) {
            a = this._prepareModel(a, e);
            this.add(a, k.extend({
                at: 0
            }, e));
            return a
        },
        shift: function (a) {
            var e = this.at(0);
            this.remove(e, a);
            return e
        },
        get: function (a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a]
        },
        getByCid: function (a) {
            return a && this._byCid[a.cid || a]
        },
        at: function (a) {
            return this.models[a]
        },
        where: function (a) {
            return k.isEmpty(a) ? [] : this.filter(function (e) {
                for (var b in a)
                    if (a[b] !== e.get(b)) return !1;
                return !0
            })
        },
        sort: function (a) {
            a || (a = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            var e = k.bind(this.comparator, this);
            1 == this.comparator.length ?
                this.models = this.sortBy(e) : this.models.sort(e);
            a.silent || this.trigger("reset", this, a);
            return this
        },
        pluck: function (a) {
            return k.map(this.models, function (e) {
                return e.get(a)
            })
        },
        reset: function (a, e) {
            a || (a = []);
            e || (e = {});
            for (var b = 0, d = this.models.length; b < d; b++) this._removeReference(this.models[b]);
            this._reset();
            this.add(a, k.extend({
                silent: !0
            }, e));
            e.silent || this.trigger("reset", this, e);
            return this
        },
        fetch: function (a) {
            a = a ? k.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this,
                d = a.success;
            a.success = function (c,
                f, h) {
                b[a.add ? "add" : "reset"](b.parse(c, h), a);
                d && d(b, c)
            };
            a.error = h.wrapError(a.error, b, a);
            return (this.sync || h.sync).call(this, "read", this, a)
        },
        create: function (a, b) {
            var d = this;
            b = b ? k.clone(b) : {};
            a = this._prepareModel(a, b);
            if (!a) return !1;
            b.wait || d.add(a, b);
            var c = b.success;
            b.success = function (f, h, m) {
                b.wait && d.add(f, b);
                c ? c(f, h) : f.trigger("sync", a, h, b)
            };
            a.save(null, b);
            return a
        },
        parse: function (a, b) {
            return a
        },
        chain: function () {
            return k(this.models).chain()
        },
        _reset: function (a) {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function (a, b) {
            b || (b = {});
            a instanceof q ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
            return a
        },
        _removeReference: function (a) {
            this == a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (a, b, d, c) {
            ("add" == a || "remove" == a) && d != this || ("destroy" == a && this.remove(b, c), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this,
                arguments))
        }
    });
    k.each("forEach each map reduce reduceRight find detect filter select reject every all some any include contains invoke max min sortBy sortedIndex toArray size first initial rest last without indexOf shuffle lastIndexOf isEmpty groupBy".split(" "), function (a) {
        v.prototype[a] = function () {
            return k[a].apply(k, [this.models].concat(k.toArray(arguments)))
        }
    });
    var t = h.Router = function (a) {
        a || (a = {});
        a.routes && (this.routes = a.routes);
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    }, r = /:\w+/g,
        p = /\*\w+/g,
        u = /[-[\]{}()+?.,\\^$|#\s]/g;
    k.extend(t.prototype, m, {
        initialize: function () {},
        route: function (a, b, d) {
            h.history || (h.history = new y);
            k.isRegExp(a) || (a = this._routeToRegExp(a));
            d || (d = this[b]);
            h.history.route(a, k.bind(function (c) {
                c = this._extractParameters(a, c);
                d && d.apply(this, c);
                this.trigger.apply(this, ["route:" + b].concat(c));
                h.history.trigger("route", this, b, c)
            }, this));
            return this
        },
        navigate: function (a, b) {
            h.history.navigate(a, b)
        },
        _bindRoutes: function () {
            if (this.routes) {
                var a = [],
                    b;
                for (b in this.routes) a.unshift([b,
                    this.routes[b]
                ]);
                b = 0;
                for (var d = a.length; b < d; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
            }
        },
        _routeToRegExp: function (a) {
            a = a.replace(u, "\\$&").replace(r, "([^/]+)").replace(p, "(.*?)");
            return RegExp("^" + a + "$")
        },
        _extractParameters: function (a, b) {
            return a.exec(b).slice(1)
        }
    });
    var y = h.History = function () {
        this.handlers = [];
        k.bindAll(this, "checkUrl")
    }, B = /^[#\/]/,
        C = /msie [\w.]+/;
    y.started = !1;
    k.extend(y.prototype, m, {
        interval: 50,
        getHash: function (a) {
            return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ? a[1] :
                ""
        },
        getFragment: function (a, b) {
            if (null == a)
                if (this._hasPushState || b) {
                    a = window.location.pathname;
                    var d = window.location.search;
                    d && (a += d)
                } else a = this.getHash();
            a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
            return a.replace(B, "")
        },
        start: function (a) {
            if (y.started) throw Error("Backbone.history has already been started");
            y.started = !0;
            this.options = k.extend({}, {
                root: "/"
            }, this.options, a);
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !! this.options.pushState;
            this._hasPushState = !(!this.options.pushState || !window.history || !window.history.pushState);
            a = this.getFragment();
            var b = document.documentMode;
            if (b = C.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = l('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a);
            this._hasPushState ? l(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? l(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl,
                this.interval));
            this.fragment = a;
            a = window.location;
            b = a.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && (this._hasPushState && b && a.hash) && (this.fragment = this.getHash().replace(B, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            l(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            y.started = !1
        },
        route: function (a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function (a) {
            a = this.getFragment();
            a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a == this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (a) {
            var b = this.fragment = this.getFragment(a);
            return k.any(this.handlers,
                function (a) {
                    if (a.route.test(b)) return a.callback(b), !0
                })
        },
        navigate: function (a, b) {
            if (!y.started) return !1;
            if (!b || !0 === b) b = {
                trigger: b
            };
            var d = (a || "").replace(B, "");
            this.fragment != d && (this._hasPushState ? (0 != d.indexOf(this.options.root) && (d = this.options.root + d), this.fragment = d, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, d)) : this._wantsHashChange ? (this.fragment = d, this._updateHash(window.location, d, b.replace), this.iframe && d != this.getFragment(this.getHash(this.iframe)) && (b.replace ||
                this.iframe.document.open().close(), this._updateHash(this.iframe.location, d, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
        },
        _updateHash: function (a, b, d) {
            d ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var D = h.View = function (a) {
        this.cid = k.uniqueId("view");
        this._configure(a || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    }, E = /^(\S+)\s*(.*)$/,
        F = "model collection el id attributes className tagName".split(" ");
    k.extend(D.prototype, m, {
        tagName: "div",
        $: function (a) {
            return this.$el.find(a)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            this.$el.remove();
            return this
        },
        make: function (a, b, d) {
            a = document.createElement(a);
            b && l(a).attr(b);
            d && l(a).html(d);
            return a
        },
        setElement: function (a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof l ? a : l(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function (a) {
            if (a || (a = A(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var d = a[b];
                    k.isFunction(d) || (d = this[a[b]]);
                    if (!d) throw Error('Method "' + a[b] + '" does not exist');
                    var c = b.match(E),
                        f = c[1],
                        c = c[2],
                        d = k.bind(d, this),
                        f = f + (".delegateEvents" + this.cid);
                    "" === c ? this.$el.bind(f, d) : this.$el.delegate(c, f, d)
                }
            }
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function (a) {
            this.options && (a = k.extend({}, this.options, a));
            for (var b = 0, d = F.length; b < d; b++) {
                var c = F[b];
                a[c] && (this[c] = a[c])
            }
            this.options = a
        },
        _ensureElement: function () {
            if (this.el) this.setElement(this.el, !1);
            else {
                var a = A(this, "attributes") || {};
                this.id && (a.id = this.id);
                this.className && (a["class"] = this.className);
                this.setElement(this.make(this.tagName, a), !1)
            }
        }
    });
    q.extend = v.extend = t.extend = D.extend = function (a, b) {
        var d = H(this, a, b);
        d.extend = this.extend;
        return d
    };
    var f = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    h.sync = function (a, b, d) {
        var c = f[a];
        d || (d = {});
        var m = {
            type: c,
            dataType: "json"
        };
        d.url || (m.url = A(b, "url") || G());
        if (!d.data && b && ("create" == a || "update" == a)) m.contentType = "application/json",
        m.data = JSON.stringify(b.toJSON());
        h.emulateJSON && (m.contentType = "application/x-www-form-urlencoded", m.data = m.data ? {
            model: m.data
        } : {});
        if (h.emulateHTTP && ("PUT" === c || "DELETE" === c)) h.emulateJSON && (m.data._method = c), m.type = "POST", m.beforeSend = function (a) {
            a.setRequestHeader("X-HTTP-Method-Override", c)
        };
        "GET" !== m.type && !h.emulateJSON && (m.processData = !1);
        return l.ajax(k.extend(m, d))
    };
    h.wrapError = function (a, b, d) {
        return function (c, f) {
            f = c === b ? f : c;
            a ? a(b, f, d) : b.trigger("error", b, f, d)
        }
    };
    var w = function () {}, H = function (a,
            b, d) {
            var c;
            c = b && b.hasOwnProperty("constructor") ? b.constructor : function () {
                a.apply(this, arguments)
            };
            k.extend(c, a);
            w.prototype = a.prototype;
            c.prototype = new w;
            b && k.extend(c.prototype, b);
            d && k.extend(c, d);
            c.prototype.constructor = c;
            c.__super__ = a.prototype;
            return c
        }, A = function (a, b) {
            return !a || !a[b] ? null : k.isFunction(a[b]) ? a[b]() : a[b]
        }, G = function () {
            throw Error('A "url" property or function must be specified');
        }
}).call(this);
(function () {
    function c() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    var a = this._,
        d = this.Backbone;
    d.LocalStorage = window.Store = function (a) {
        this.name = a;
        this.records = (a = this.localStorage().getItem(this.name)) && a.split(",") || []
    };
    a.extend(d.LocalStorage.prototype, {
        save: function () {
            this.localStorage().setItem(this.name, this.records.join(","))
        },
        create: function (a) {
            a.id || (a.id = c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c(), a.set(a.idAttribute, a.id));
            this.localStorage().setItem(this.name + "-" +
                a.id, JSON.stringify(a));
            this.records.push(a.id.toString());
            this.save();
            return a.toJSON()
        },
        update: function (b) {
            this.localStorage().setItem(this.name + "-" + b.id, JSON.stringify(b));
            a.include(this.records, b.id.toString()) || this.records.push(b.id.toString());
            this.save();
            return b.toJSON()
        },
        find: function (a) {
            return JSON.parse(this.localStorage().getItem(this.name + "-" + a.id))
        },
        findAll: function () {
            return a(this.records).chain().map(function (a) {
                return JSON.parse(this.localStorage().getItem(this.name + "-" + a))
            }, this).compact().value()
        },
        destroy: function (b) {
            this.localStorage().removeItem(this.name + "-" + b.id);
            this.records = a.reject(this.records, function (a) {
                return a == b.id.toString()
            });
            this.save();
            return b
        },
        localStorage: function () {
            return localStorage
        }
    });
    d.LocalStorage.sync = window.Store.sync = d.localSync = function (a, d, c, l) {
        var n = d.localStorage || d.collection.localStorage;
        "function" == typeof c && (c = {
            success: c,
            error: l
        });
        var m;
        l = $.Deferred && $.Deferred();
        switch (a) {
        case "read":
            m = void 0 != d.id ? n.find(d) : n.findAll();
            break;
        case "create":
            m = n.create(d);
            break;
        case "update":
            m = n.update(d);
            break;
        case "delete":
            m = n.destroy(d)
        }
        m ? (c.success(m), l && l.resolve()) : (c.error("Record not found"), l && l.reject());
        return l && l.promise()
    };
    d.ajaxSync = d.sync;
    d.getSyncMethod = function (a) {
        return a.localStorage || a.collection && a.collection.localStorage ? d.localSync : d.ajaxSync
    };
    d.sync = function (a, c, k, l) {
        return d.getSyncMethod(c).apply(this, [a, c, k, l])
    }
})();
(function (c) {
    "function" === typeof define && define.amd ? define(["jquery"], c) : c(jQuery)
})(function (c) {
    var a = [],
        d = c(document),
        b = c.browser.msie && 6 === parseInt(c.browser.version) && "object" !== typeof window.XMLHttpRequest,
        h = c.browser.msie && 7 === parseInt(c.browser.version),
        k = null,
        l = c(window),
        n = [];
    c.modal = function (a, b) {
        return c.modal.impl.init(a, b)
    };
    c.modal.close = function () {
        c.modal.impl.close()
    };
    c.modal.focus = function (a) {
        c.modal.impl.focus(a)
    };
    c.modal.setContainerDimensions = function () {
        c.modal.impl.setContainerDimensions()
    };
    c.modal.setPosition = function () {
        c.modal.impl.setPosition()
    };
    c.modal.update = function (a, b) {
        c.modal.impl.update(a, b)
    };
    c.fn.modal = function (a) {
        return c.modal.impl.init(this, a)
    };
    c.modal.defaults = {
        appendTo: "body",
        focus: !0,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: !1,
        autoPosition: !0,
        zIndex: 1E3,
        close: !0,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: !0,
        overlayClose: !1,
        fixed: !0,
        position: null,
        persist: !1,
        modal: !0,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    c.modal.impl = {
        d: {},
        init: function (a, b) {
            if (this.d.data) return !1;
            k = c.browser.msie && !c.support.boxModel;
            this.o = c.extend({}, c.modal.defaults, b);
            this.zIndex = this.o.zIndex;
            this.occb = !1;
            if ("object" === typeof a) a = a instanceof c ? a : c(a), this.d.placeholder = !1, 0 < a.parent().parent().size() && (a.before(c("<span></span>").attr("id", "simplemodal-placeholder").css({
                    display: "none"
                })),
                this.d.placeholder = !0, this.display = a.css("display"), this.o.persist || (this.d.orig = a.clone(!0)));
            else if ("string" === typeof a || "number" === typeof a) a = c("<div></div>").html(a);
            else return alert("SimpleModal Error: Unsupported data type: " + typeof a), this;
            this.create(a);
            this.open();
            c.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]);
            return this
        },
        create: function (d) {
            this.getDimensions();
            this.o.modal && b && (this.d.iframe = c('<iframe src="javascript:false;"></iframe>').css(c.extend(this.o.iframeCss, {
                display: "none",
                opacity: 0,
                position: "fixed",
                height: n[0],
                width: n[1],
                zIndex: this.o.zIndex,
                top: 0,
                left: 0
            })).appendTo(this.o.appendTo));
            this.d.overlay = c("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(c.extend(this.o.overlayCss, {
                display: "none",
                opacity: this.o.opacity / 100,
                height: this.o.modal ? a[0] : 0,
                width: this.o.modal ? a[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: this.o.zIndex + 1
            })).appendTo(this.o.appendTo);
            this.d.container = c("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(c.extend({
                position: this.o.fixed ? "fixed" : "absolute"
            }, this.o.containerCss, {
                display: "none",
                zIndex: this.o.zIndex + 2
            })).append(this.o.close && this.o.closeHTML ? c(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo);
            this.d.wrap = c("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(this.d.container);
            this.d.data = d.attr("id", d.attr("id") || this.o.dataId).addClass("simplemodal-data").css(c.extend(this.o.dataCss, {
                display: "none"
            })).appendTo("body");
            this.setContainerDimensions();
            this.d.data.appendTo(this.d.wrap);
            (b || k) && this.fixIE()
        },
        bindEvents: function () {
            var h = this;
            c("." + h.o.closeClass).bind("click.simplemodal", function (a) {
                a.preventDefault();
                h.close()
            });
            h.o.modal && (h.o.close && h.o.overlayClose) && h.d.overlay.bind("click.simplemodal", function (a) {
                a.preventDefault();
                h.close()
            });
            d.bind("keydown.simplemodal", function (a) {
                h.o.modal && 9 === a.keyCode ? h.watchTab(a) : h.o.close && h.o.escClose && 27 === a.keyCode && (a.preventDefault(), h.close())
            });
            l.bind("resize.simplemodal orientationchange.simplemodal",
                function () {
                    h.getDimensions();
                    h.o.autoResize ? h.setContainerDimensions() : h.o.autoPosition && h.setPosition();
                    b || k ? h.fixIE() : h.o.modal && (h.d.iframe && h.d.iframe.css({
                        height: n[0],
                        width: n[1]
                    }), h.d.overlay.css({
                        height: a[0],
                        width: a[1]
                    }))
                })
        },
        unbindEvents: function () {
            c("." + this.o.closeClass).unbind("click.simplemodal");
            d.unbind("keydown.simplemodal");
            l.unbind(".simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function () {
            var a = this.o.position;
            c.each([this.d.iframe || null, !this.o.modal ? null : this.d.overlay,
                "fixed" === this.d.container.css("position") ? this.d.container : null
            ], function (b, d) {
                if (d) {
                    var c = d[0].style;
                    c.position = "absolute";
                    if (2 > b) c.removeExpression("height"), c.removeExpression("width"), c.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'), c.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');
                    else {
                        var h, k;
                        a && a.constructor ===
                            Array ? (h = a[0] ? "number" === typeof a[0] ? a[0].toString() : a[0].replace(/px/, "") : d.css("top").replace(/px/, ""), h = -1 === h.indexOf("%") ? h + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(h.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', a[1] && (k = "number" === typeof a[1] ?
                                a[1].toString() : a[1].replace(/px/, ""), k = -1 === k.indexOf("%") ? k + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(k.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (h = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
                                k = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');
                        c.removeExpression("top");
                        c.removeExpression("left");
                        c.setExpression("top", h);
                        c.setExpression("left", k)
                    }
                }
            })
        },
        focus: function (a) {
            var b = this;
            a = a && -1 !== c.inArray(a, ["first", "last"]) ? a : "first";
            var d = c(":input:enabled:visible:" + a, b.d.wrap);
            setTimeout(function () {
                    0 < d.length ? d.focus() : b.d.wrap.focus()
                },
                10)
        },
        getDimensions: function () {
            var b = "undefined" === typeof window.innerHeight ? l.height() : window.innerHeight;
            a = [d.height(), d.width()];
            n = [b, l.width()]
        },
        getVal: function (a, b) {
            return a ? "number" === typeof a ? a : "auto" === a ? 0 : 0 < a.indexOf("%") ? parseInt(a.replace(/%/, "")) / 100 * ("h" === b ? n[0] : n[1]) : parseInt(a.replace(/px/, "")) : null
        },
        update: function (a, b) {
            if (!this.d.data) return !1;
            this.d.origHeight = this.getVal(a, "h");
            this.d.origWidth = this.getVal(b, "w");
            this.d.data.hide();
            a && this.d.container.css("height", a);
            b && this.d.container.css("width",
                b);
            this.setContainerDimensions();
            this.d.data.show();
            this.o.focus && this.focus();
            this.unbindEvents();
            this.bindEvents()
        },
        setContainerDimensions: function () {
            var a = b || h,
                d = this.d.origHeight ? this.d.origHeight : c.browser.opera ? this.d.container.height() : this.getVal(a ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"),
                a = this.d.origWidth ? this.d.origWidth : c.browser.opera ? this.d.container.width() : this.getVal(a ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w"),
                k = this.d.data.outerHeight(!0),
                l = this.d.data.outerWidth(!0);
            this.d.origHeight = this.d.origHeight || d;
            this.d.origWidth = this.d.origWidth || a;
            var r = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null,
                p = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null,
                r = r && r < n[0] ? r : n[0],
                p = p && p < n[1] ? p : n[1],
                u = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto",
                d = d ? this.o.autoResize && d > r ? r : d < u ? u : d : k ? k > r ? r : this.o.minHeight && "auto" !== u && k < u ? u : k : u,
                r = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto",
                a = a ? this.o.autoResize && a > p ? p : a < r ? r : a :
                    l ? l > p ? p : this.o.minWidth && "auto" !== r && l < r ? r : l : r;
            this.d.container.css({
                height: d,
                width: a
            });
            this.d.wrap.css({
                overflow: k > d || l > a ? "auto" : "visible"
            });
            this.o.autoPosition && this.setPosition()
        },
        setPosition: function () {
            var a, b;
            a = n[0] / 2 - this.d.container.outerHeight(!0) / 2;
            b = n[1] / 2 - this.d.container.outerWidth(!0) / 2;
            var d = "fixed" !== this.d.container.css("position") ? l.scrollTop() : 0;
            this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) ? (a = d + (this.o.position[0] || a), b = this.o.position[1] ||
                b) : a = d + a;
            this.d.container.css({
                left: b,
                top: a
            })
        },
        watchTab: function (a) {
            if (0 < c(a.target).parents(".simplemodal-container").length) {
                if (this.inputs = c(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]), !a.shiftKey && a.target === this.inputs[this.inputs.length - 1] || a.shiftKey && a.target === this.inputs[0] || 0 === this.inputs.length) a.preventDefault(), this.focus(a.shiftKey ? "last" : "first")
            } else a.preventDefault(), this.focus()
        },
        open: function () {
            this.d.iframe && this.d.iframe.show();
            c.isFunction(this.o.onOpen) ?
                this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(), this.d.container.show(), this.d.data.show());
            this.o.focus && this.focus();
            this.bindEvents()
        },
        close: function () {
            if (!this.d.data) return !1;
            this.unbindEvents();
            if (c.isFunction(this.o.onClose) && !this.occb) this.occb = !0, this.o.onClose.apply(this, [this.d]);
            else {
                if (this.d.placeholder) {
                    var a = c("#simplemodal-placeholder");
                    this.o.persist ? a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display)) : (this.d.data.hide().remove(), a.replaceWith(this.d.orig))
                } else this.d.data.hide().remove();
                this.d.container.hide().remove();
                this.d.overlay.hide();
                this.d.iframe && this.d.iframe.hide().remove();
                this.d.overlay.remove();
                this.d = {}
            }
        }
    }
});
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (c) {
        var a = "",
            d, b, h, k, l, n, m = 0;
        for (c = Base64._utf8_encode(c); m < c.length;) d = c.charCodeAt(m++), b = c.charCodeAt(m++), h = c.charCodeAt(m++), k = d >> 2, d = (d & 3) << 4 | b >> 4, l = (b & 15) << 2 | h >> 6, n = h & 63, isNaN(b) ? l = n = 64 : isNaN(h) && (n = 64), a = a + Base64._keyStr.charAt(k) + Base64._keyStr.charAt(d) + Base64._keyStr.charAt(l) + Base64._keyStr.charAt(n);
        return a
    },
    decode: function (c) {
        var a = "",
            d, b, h, k, l, n = 0;
        for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g,
            ""); n < c.length;) d = Base64._keyStr.indexOf(c.charAt(n++)), b = Base64._keyStr.indexOf(c.charAt(n++)), k = Base64._keyStr.indexOf(c.charAt(n++)), l = Base64._keyStr.indexOf(c.charAt(n++)), d = d << 2 | b >> 4, b = (b & 15) << 4 | k >> 2, h = (k & 3) << 6 | l, a += String.fromCharCode(d), 64 != k && (a += String.fromCharCode(b)), 64 != l && (a += String.fromCharCode(h));
        return a = Base64._utf8_decode(a)
    },
    _utf8_encode: function (c) {
        c = c.replace(/\r\n/g, "\n");
        for (var a = "", d = 0; d < c.length; d++) {
            var b = c.charCodeAt(d);
            128 > b ? a += String.fromCharCode(b) : (127 < b && 2048 > b ? a +=
                String.fromCharCode(b >> 6 | 192) : (a += String.fromCharCode(b >> 12 | 224), a += String.fromCharCode(b >> 6 & 63 | 128)), a += String.fromCharCode(b & 63 | 128))
        }
        return a
    },
    _utf8_decode: function (c) {
        for (var a = "", d = 0, b = c1 = c2 = 0; d < c.length;) b = c.charCodeAt(d), 128 > b ? (a += String.fromCharCode(b), d++) : 191 < b && 224 > b ? (c2 = c.charCodeAt(d + 1), a += String.fromCharCode((b & 31) << 6 | c2 & 63), d += 2) : (c2 = c.charCodeAt(d + 1), c3 = c.charCodeAt(d + 2), a += String.fromCharCode((b & 15) << 12 | (c2 & 63) << 6 | c3 & 63), d += 3);
        return a
    }
};
/*
     Mit Style License
 @project     http://github.com/WebReflection/json.hpack/tree/master
 @blog        http://webreflection.blogspot.com/
*/
(function (c) {
    (this.JSON || (JSON = {})).hpack = function (a, d) {
        if (3 < d) {
            var b = JSON.hbest(a),
                h = c[b];
            c = []
        } else {
            var k = Array.prototype.indexOf || function (a) {
                    for (var b = this.length, d = 0; d < b; ++d)
                        if (this[d] === a) return d;
                    return -1
                }, l = [],
                h = [l],
                n = a[0],
                m = 0,
                q = 0,
                v;
            for (b in n) l[m++] = b;
            v = m;
            m = 0;
            q = a.length;
            for (b = 0; b < q; ++b) {
                for (var t = a[b], r = [], p = 0; p < v; ++p) r[p] = t[l[p]];
                h[++m] = r
            }++m;
            if (0 < d) {
                r = h[1];
                for (p = 0; p < v; ++p)
                    if ("number" != typeof r[p]) {
                        l[p] = [l[p], n = []];
                        n.indexOf = k;
                        for (b = 1; b < m; ++b) {
                            var t = h[b][p],
                                u = n.indexOf(t);
                            h[b][p] = 0 > u ? n.push(t) -
                                1 : u
                        }
                    }
            }
            if (2 < d)
                for (p = 0; p < v; ++p) {
                    if (l[p] instanceof Array) {
                        r = l[p][1];
                        t = [];
                        n = [];
                        q = 0;
                        for (b = 1; b < m; ++b) t[q] = r[n[q] = h[b][p]], ++q;
                        if (JSON.stringify(t).length < JSON.stringify(n.concat(r)).length) {
                            q = 0;
                            for (b = 1; b < m; ++b) h[b][p] = t[q], ++q;
                            l[p] = l[p][0]
                        }
                    }
                } else if (1 < d) {
                    q -= Math.floor(q / 2);
                    for (p = 0; p < v; ++p)
                        if (l[p] instanceof Array && q < (n = l[p][1]).length) {
                            for (b = 1; b < m; ++b) t = h[b][p], h[b][p] = n[t];
                            l[p] = l[p][0]
                        }
                }
            if (0 < d)
                for (p = 0; p < v; ++p) l[p] instanceof Array && (l.splice(p, 1, l[p][0], l[p][1]), ++v, ++p)
        }
        return h
    };
    JSON.hunpack = function (a) {
        for (var d = [], b = [], c = a[0], k = c.length, l = a.length, n = -1, m = -1, q = 0, v = 0, t, r; q < k; ++q) {
            b[++m] = c[q];
            if ("object" == typeof c[q + 1]) {
                ++q;
                for (t = 1; t < l; ++t) r = a[t], r[v] = c[q][r[v]]
            }++v
        }
        q = 0;
        for (k = b.length; q < k; ++q) b[q] = 'o["'.concat(b[q].replace('"', "\\x22"), '"]=a[', q, "];");
        b = Function("o,a", b.join("") + "return o;");
        for (t = 1; t < l; ++t) d[++n] = b({}, a[t]);
        return d
    };
    JSON.hclone = function (a) {
        for (var d = [], b = 0, c = a.length; b < c; ++b) d[b] = a[b].slice(0);
        return d
    };
    JSON.hbest = function (a) {
        for (var d = 0, b = 0, h = 0, k = 0; 4 > d; ++d) c[d] = JSON.hpack(a, d), h = JSON.stringify(c[d]).length,
        0 === k ? k = h : h < k && (k = h, b = d);
        return b
    }
})([]);
(function (c, a, d, b, h, k) {
    function l(a) {
        var d, c = a.length,
            h = this,
            k = 0,
            l = h.i = h.j = 0,
            f = h.S = [];
        for (c || (a = [c++]); b > k;) f[k] = k++;
        for (k = 0; b > k; k++) f[k] = f[l = u & l + a[k % c] + (d = f[k])], f[l] = d;
        (h.g = function (a) {
            for (var d, c = 0, f = h.i, g = h.j, e = h.S; a--;) d = e[f = u & f + 1], c = c * b + e[u & (e[f] = e[g = u & g + d]) + (e[g] = d)];
            return h.i = f, h.j = g, c
        })(b)
    }

    function n(a, b) {
        var d, c = [],
            h = (typeof a)[0];
        if (b && "o" == h)
            for (d in a)
                if (a.hasOwnProperty(d)) try {
                    c.push(n(a[d], b - 1))
                } catch (k) {}
                return c.length ? c : "s" == h ? a : a + "\x00"
    }

    function m(a, b) {
        for (var d, c = a + "", h = 0; c.length >
            h;) b[u & h] = u & (d ^= 19 * b[u & h]) + c.charCodeAt(h++);
        return v(b)
    }

    function q(d) {
        try {
            return c.crypto.getRandomValues(d = new Uint8Array(b)), v(d)
        } catch (h) {
            return [+new Date, c.document, c.history, c.navigator, c.screen, v(a)]
        }
    }

    function v(a) {
        return String.fromCharCode.apply(0, a)
    }
    var t = d.pow(b, h),
        r = d.pow(2, k),
        p = 2 * r,
        u = b - 1;
    d.seedrandom = function (c, k) {
        var u = [],
            D = m(n(k ? [c, v(a)] : 0 in arguments ? c : q(), 3), u),
            E = new l(u);
        return m(v(E.S), a), d.random = function () {
            for (var a = E.g(h), d = t, c = 0; r > a;) a = (a + c) * b, d *= b, c = E.g(1);
            for (; a >= p;) a /= 2,
            d /= 2, c >>>= 1;
            return (a + c) / d
        }, D
    };
    m(d.random(), a)
})(this, [], Math, 256, 6, 52);
jQuery.extend({
    random: function (c) {
        return Math.floor(c * (Math.random() % 1))
    },
    randomBetween: function (c, a) {
        return c + jQuery.random(a - c + 1)
    }
});
var gg = gg || {};
$(function (c) {
    gg.helpers = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            _.bindAll(this)
        },
        parseInt: function (a, d) {
            if (a) {
                var b = parseInt(a);
                return isNaN(b) ? d : b
            }
            return d
        },
        parseFloat: function (a, d) {
            if (a) {
                var b = parseFloat(a);
                return isNaN(b) ? d : b
            }
            return d
        },
        parseMinSecToSec: function (a, d) {
            return 60 * a + d
        },
        parseSecToMinSec: function (a) {
            var d = Math.floor(a / 60);
            return {
                minutes: d,
                seconds: a - 60 * d
            }
        },
        parseSecToMinSecString: function (a) {
            a = this.parseSecToMinSec(a);
            var d = "";
            0 < a.minutes && (d += a.minutes + " minutes ");
            0 <
                a.seconds && (d += a.seconds + " seconds ");
            return d
        }
    });
    gg.Helpers = new gg.helpers
});
gg = gg || {};
$(function (c) {
    gg.boundaryManager = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.setupBoundaries();
            _.bindAll(this)
        },
        setupBoundaries: function () {
            var a = this.transformToLatLng([
                [-62.5670958528642, -59.92767333984375],
                [-62.584805850293485, -59.98260498046875],
                [-62.61450963659083, -59.952392578125],
                [-62.61514130931998, -59.86724853515625],
                [-62.5803793399449, -59.853515625]
            ]),
                d = this.transformToLatLng([
                    [-30.80791068136646, 134.1650390625],
                    [-29.859701442126745, 131.1767578125],
                    [-31.175209828310845, 123.5302734375],
                    [-28.44937385955666, 122.4755859375],
                    [-27.20578572438331, 124.4970703125],
                    [-26.125850185680342, 123.5302734375],
                    [-26.559049984075532, 121.11328125],
                    [-25.928407032694118, 119.94873046875],
                    [-21.156238366109417, 121.09130859375],
                    [-18.92707243132612, 123.1787109375],
                    [-19.77704220222595, 125.88134765625],
                    [-18.843913201134132, 129.0234375],
                    [-17.06728740376787, 129.55078125],
                    [-15.908508237156704, 132.4072265625],
                    [-14.551684056143435, 134.384765625],
                    [-13.91274012094182, 133.2421875],
                    [-12.136005232925365, 134.23095703125],
                    [-11.275386692600028, 133.08837890625],
                    [-11.85659918958597, 129.90234375],
                    [-12.993852961834971, 129.35302734375],
                    [-14.275030445572792, 129.9462890625],
                    [-14.061988097202269, 127.63916015625],
                    [-17.06728740376787, 126.49658203125],
                    [-16.14081555527601, 123.20068359375],
                    [-17.444991866993252, 120.9814453125],
                    [-18.968636543402212, 119.94873046875],
                    [-19.73568357862943, 116.982421875],
                    [-20.396123272467616, 113.291015625],
                    [-23.45316801591618, 112.3681640625],
                    [-25.492868271257112, 112.060546875],
                    [-28.178559849396965, 113.203125],
                    [-30.09761327721712, 113.57666015625],
                    [-31.774877618507386, 114.3896484375],
                    [-34.53371242139564, 114.01611328125],
                    [-35.8445345042166, 115.5322265625],
                    [-35.89795019335754, 118.45458984375],
                    [-34.948990725782245, 120.91552734375],
                    [-34.67839374011646, 124.6728515625],
                    [-33.22030778968541, 126.14501953125],
                    [-32.42634016154639, 130.2978515625],
                    [-33.01787601855489, 133.17626953125],
                    [-35.415914923456214, 134.384765625],
                    [-35.862343734896484, 135.4833984375],
                    [-37.06394430056684, 136.7578125],
                    [-36.62434536776987, 138.44970703125],
                    [-38.436379603, 139.6142578125],
                    [-39.08743603215883, 141.78955078125],
                    [-39.41073305508496, 143.173828125],
                    [-41.0545019632905, 143.28369140625],
                    [-41.795888098191426, 144.0966796875],
                    [-43.84245116699036, 145.30517578125],
                    [-44.20583500104182, 147.01904296875],
                    [-43.33316939281732, 148.99658203125],
                    [-41.02135510866601, 149.39208984375],
                    [-39.461643642055485, 148.8427734375],
                    [-40.555547902863104, 146.07421875],
                    [-39.4955633605947, 145.04150390625],
                    [-39.37677199661635, 147.45849609375],
                    [-38.26406296833961, 149.91943359375],
                    [-34.569906380856345, 152.02880859375],
                    [-30.760718908944472, 153.984375],
                    [-25.869109390999295, 154.35791015625],
                    [-22.806567100271508, 152.60009765625],
                    [-19.4665922322076, 149.4140625],
                    [-18.302380604025146, 146.97509765625],
                    [-16.0352548623504, 146.4697265625],
                    [-15.543668254074857, 144.99755859375],
                    [-14.854540884509133, 143.98681640625],
                    [-13.515167165923378, 143.2562255859375],
                    [-12.900166457880355, 142.9046630859375],
                    [-12.498258273109517, 142.064208984375],
                    [-12.551882604893366, 141.4874267578125],
                    [-12.873392428201706,
                        141.6522216796875
                    ],
                    [-13.258659814691365, 142.4322509765625],
                    [-14.9686666508665, 143.184814453125],
                    [-16.006215853283692, 144.3768310546875],
                    [-16.549328935473284, 144.4207763671875],
                    [-16.91756694670037, 144.9371337890625],
                    [-16.733536883511146, 144.3328857421875],
                    [-16.301687193583895, 144.0472412109375],
                    [-15.800182150387876, 142.481689453125],
                    [-16.53353146171968, 141.668701171875],
                    [-17.09616703823598, 141.4105224609375],
                    [-17.143414963074378, 140.7403564453125],
                    [-17.109292665395643, 138.2958984375],
                    [-18.88549797746286,
                        137.373046875
                    ],
                    [-20.524788750414267, 137.30712890625],
                    [-20.648205934292623, 138.570556640625],
                    [-21.314963641717583, 139.28466796875],
                    [-22.243344409235693, 139.2626953125],
                    [-23.034242642076574, 139.471435546875],
                    [-23.36747130375967, 140.2734375],
                    [-22.545537663981854, 142.3004150390625],
                    [-22.763518842676678, 142.415771484375],
                    [-23.23882237936205, 141.8389892578125],
                    [-26.22444694563432, 140.9765625],
                    [-27.01019643193151, 141.6357421875],
                    [-26.909824671240692, 143.0694580078125],
                    [-27.642173315458802, 143.6846923828125],
                    [-28.28745191050374, 143.646240234375],
                    [-28.471105728831816, 145.3106689453125],
                    [-29.728607435707488, 145.458984375],
                    [-31.151707478133666, 143.602294921875],
                    [-30.00013836058067, 142.371826171875],
                    [-29.096977063043088, 142.4102783203125],
                    [-29.00093403503019, 141.6851806640625],
                    [-29.441989466225696, 141.4764404296875],
                    [-30.23771349789205, 141.756591796875],
                    [-31.707139746814615, 141.0205078125],
                    [-32.428658470843686, 139.1253662109375],
                    [-31.82389824052694, 138.9166259765625],
                    [-30.96583420242113, 139.0924072265625],
                    [-29.561512529746743, 138.570556640625],
                    [-29.43720561062326, 137.779541015625],
                    [-29.408497744069077, 137.054443359375],
                    [-30.256694798480332, 136.5765380859375],
                    [-30.843289308584087, 136.593017578125],
                    [-30.739475058679485, 136.0162353515625],
                    [-29.933515040088082, 135.5767822265625],
                    [-28.94326532940748, 135.2362060546875],
                    [-28.330977597778205, 134.593505859375],
                    [-27.598368868573615, 134.3792724609375],
                    [-26.60080705935182, 133.7640380859375],
                    [-25.415989389177113, 133.890380859375],
                    [-24.364611619695367, 133.912353515625],
                    [-23.61181198048863, 134.47265625],
                    [-22.834414611474795, 134.132080078125],
                    [-22.27638902785074, 133.9508056640625],
                    [-21.261220997023237, 134.6319580078125],
                    [-19.898471023853403, 134.527587890625],
                    [-19.758949123832693, 135.2142333984375],
                    [-20.208078741507393, 136.0601806640625],
                    [-20.223543059033528, 137.2027587890625],
                    [-19.924294950473794, 137.2576904296875],
                    [-19.645174265699048, 136.12060546875],
                    [-19.11143403582964, 135.296630859375],
                    [-19.16332988930459, 134.3902587890625],
                    [-17.657108439910722, 133.978271484375],
                    [-16.655927977692734, 133.6871337890625],
                    [-16.80059709498633, 134.27215576171875],
                    [-16.816372528577872, 134.72259521484375],
                    [-16.900485979120973, 135.32135009765625],
                    [-16.576971399774116, 136.31011962890625],
                    [-15.78828916397262, 136.878662109375],
                    [-15.38351537842535, 136.83746337890625],
                    [-15.468239767090656, 136.45294189453125],
                    [-15.833214557200757, 136.15081787109375],
                    [-16.044493660422905, 135.9722900390625],
                    [-16.34517902215026, 135.7525634765625],
                    [-16.54801252874236, 135.12908935546875],
                    [-16.337272136282255,
                        134.58251953125
                    ],
                    [-16.131581235693066, 133.72283935546875],
                    [-15.37159824170094, 133.3905029296875],
                    [-15.609810865724066, 133.033447265625],
                    [-16.201487501882927, 133.1982421875],
                    [-17.321798444078027, 133.1158447265625],
                    [-18.6124103692533, 133.41796875],
                    [-19.24632927300332, 133.8519287109375],
                    [-20.856245196048715, 133.802490234375],
                    [-21.838555296255997, 133.0169677734375],
                    [-22.95080604310102, 133.0059814453125],
                    [-23.067097437847586, 132.1820068359375],
                    [-23.697349739920757, 131.7864990234375],
                    [-23.948606168009604,
                        130.9185791015625
                    ],
                    [-24.634534776496086, 130.9735107421875],
                    [-25.013439812256347, 130.1495361328125],
                    [-25.930877120921785, 130.330810546875],
                    [-25.84686509678057, 131.495361328125],
                    [-25.762793355586624, 132.7587890625],
                    [-26.988171269702267, 132.890625],
                    [-28.627925287618552, 133.74755859375],
                    [-29.750070930806785, 134.483642578125],
                    [-30.491284452100185, 134.75830078125]
                ]),
                b = this.transformToLatLng([
                    [-3.7327083213358336, -36.650390625],
                    [-1.8014609294680355, -40.166015625],
                    [-0.9228116626856938, -43.681640625],
                    [-0.19775351362548124, -47.5048828125],
                    [-2.3943223575350774, -59.2822265625],
                    [-2.0430239574220272, -60.7763671875],
                    [-3.1405161039832357, -61.34765625],
                    [-4.0176994643368396, -60.2490234375],
                    [-3.71078200434872, -58.4033203125],
                    [-2.2625953010152324, -49.2626953125],
                    [-3.019841106168974, -45.7470703125],
                    [-4.225899677985493, -48.1201171875],
                    [-4.8611009783099455, -50.3173828125],
                    [-6.129631376647244, -49.81201171875],
                    [-6.457234498765345, -48.1201171875],
                    [-8.418036280774361, -49.4384765625],
                    [-8.961045222037118, -48.44970703125],
                    [-8.244110057549213, -44.93408203125],
                    [-7.11179460247242, -42.51708984375],
                    [-7.8089631205593895, -41.77001953125],
                    [-8.135367205502842, -40.6494140625],
                    [-9.459898921269597, -41.923828125],
                    [-11.641476279218743, -45.8349609375],
                    [-11.081384602413047, -55.5908203125],
                    [-12.028575662342247, -56.689453125],
                    [-13.165073873513013, -56.35986328125],
                    [-16.119707906573172, -56.9091796875],
                    [-16.541430360299973, -55.83251953125],
                    [-18.469188904417177, -58.11767578125],
                    [-19.445874298215937, -58.55712890625],
                    [-22.014360653103207, -58.29345703125],
                    [-22.7255238110894, -58.18359375],
                    [-23.29181053244191, -56.2060546875],
                    [-24.896402266558713, -55.5908203125],
                    [-26.106120832355504, -55.43701171875],
                    [-26.578702269100557, -54.404296875],
                    [-28.256005619824972, -56.4697265625],
                    [-30.116621582819363, -58.53515625],
                    [-31.156408414557, -57.76611328125],
                    [-32.981020148981465, -54.11865234375],
                    [-34.11635246997273, -53.7451171875],
                    [-34.53371242139564, -52.3828125],
                    [-32.277844514982704, -51.1083984375],
                    [-29.027354780418385, -47.900390625],
                    [-26.165298896316042, -47.79052734375],
                    [-24.836595553891172, -46.318359375],
                    [-23.71495350699027, -40.0341796875],
                    [-21.48374090716327, -39.814453125],
                    [-17.193274736612807, -38.12255859375],
                    [-14.019355706886039, -38.0126953125],
                    [-8.961045222037118, -34.27734375],
                    [-4.729726554568902, -34.56298828125]
                ]),
                c = this.transformToLatLng([
                    [39.690280594818034, -29.00390625],
                    [38.42777351132902, -29.9267578125],
                    [37.666429212090605, -28.0810546875],
                    [37.90953361677018, -27.1142578125],
                    [36.79169061907076, -25.8837890625],
                    [33.00866349457558, -18.5009765625],
                    [32.08257455954592, -17.666015625],
                    [29.707139348134145, -14.8095703125],
                    [28.940861769405565, -15.7763671875],
                    [29.324720161511028, -18.4130859375],
                    [27.586197857692664, -19.16015625],
                    [26.41155054662258, -17.8857421875],
                    [27.078691552927534, -16.6552734375],
                    [27.078691552927534, -14.3701171875],
                    [29.017748018496047, -12.3486328125],
                    [30.353916372297036, -13.447265625],
                    [31.970803930433096, -16.2158203125],
                    [33.44977658311845, -15.3369140625],
                    [33.815666308702774, -16.875],
                    [36.58024660149866, -24.2138671875],
                    [38.66835610151506, -24.5654296875],
                    [38.77121637244273, -26.19140625],
                    [39.52099229357195, -27.6416015625]
                ]),
                k = this.transformToLatLng([
                    [-32.80112754111692, -71.993408203125],
                    [-33.50933936780059, -72.00439453125],
                    [-34.10270799317486, -71.531982421875],
                    [-36.204390701588714, -72.3779296875],
                    [-36.52288052805136, -73.388671875],
                    [-36.95428158567595, -73.58642578125],
                    [-37.24344837865412, -73.201904296875],
                    [-36.875226506739516, -71.773681640625],
                    [-33.984363728291875, -70.37841796875],
                    [-33.28002781173214, -69.85107421875],
                    [-32.69948868085266, -70.103759765625],
                    [-32.46806060917601, -71.3671875]
                ]),
                l = this.transformToLatLng([
                    [56.3774187738762, 93.6474609375],
                    [57.26716357153586, 89.82421875],
                    [57.621875380195455, 82.5732421875],
                    [55.5161921571789, 81.2548828125],
                    [55.441479359140686, 72.9052734375],
                    [54.88924640307588, 72.24609375],
                    [54.380557368630654, 73.125],
                    [55.06578688659172, 74.443359375],
                    [54.99022172004893, 80.947265625],
                    [53.527247970102465, 82.001953125],
                    [53.00817326643286, 82.880859375],
                    [51.76104049272952, 80.74951171875],
                    [51.282534682474655, 80.70556640625],
                    [51.172455303299, 81.40869140625],
                    [51.964577109947506, 81.76025390625],
                    [52.90227586168311, 83.6279296875],
                    [52.30176096373671, 84.92431640625],
                    [52.395715477302076, 85.693359375],
                    [52.90227586168311, 85.31982421875],
                    [53.52071674896369, 84.5068359375],
                    [53.29805557491275, 86.90185546875],
                    [53.69020141273198, 88.2861328125],
                    [54.28446875235514, 87.42919921875],
                    [55.485079037526134, 86.8359375],
                    [55.893796284148955, 89.62646484375],
                    [55.671389288295465, 90.28564453125],
                    [55.75803176823725, 91.0546875],
                    [55.86914706303444, 92.373046875],
                    [55.584554519645074, 92.92236328125],
                    [56.016807763203225, 93.80126953125]
                ]),
                n = this.transformToLatLng([
                    [68.74634196954582, 33.519287109375],
                    [69.18794532816639, 33.59619140625],
                    [69.2736528155187, 33.101806640625],
                    [69.21915080729545, 32.607421875],
                    [68.94458043980954, 32.49755859375],
                    [68.79408096149704, 29.256591796875],
                    [69.22304834651693, 29.718017578125],
                    [69.42476011465202, 31.201171875],
                    [69.76185679645226, 31.31103515625],
                    [69.9698488321097, 30.322265625],
                    [70.3057841895306, 31.695556640625],
                    [70.63266248707315, 31.09130859375],
                    [70.96507259301342, 29.366455078125],
                    [71.17889505973734, 28.67431640625],
                    [71.2496534880684, 27.44384765625],
                    [71.08296286656015, 26.65283203125],
                    [71.30959645625158, 26.015625],
                    [71.21076814555101, 23.66455078125],
                    [70.96865539856438, 23.115234375],
                    [70.76339586058107, 21.3134765625],
                    [70.50840787200406, 21.368408203125],
                    [70.45334638895723, 20.14892578125],
                    [70.5010749627574, 18.709716796875],
                    [70.17579022164703, 17.852783203125],
                    [69.86800099157304, 18.03955078125],
                    [69.5249122415947, 16.622314453125],
                    [69.4479136623474, 15.523681640625],
                    [69.21525256928653,
                        15.084228515625
                    ],
                    [68.8456827679455, 13.82080078125],
                    [68.5222019155703, 13.9306640625],
                    [68.07945769251718, 12.425537109375],
                    [67.3504400809675, 11.414794921875],
                    [67.22317969918987, 11.898193359375],
                    [67.55265640140559, 13.02978515625],
                    [67.89415341346184, 13.524169921875],
                    [67.98493182436603, 14.4580078125],
                    [67.61549716460256, 14.0185546875],
                    [67.42225501238767, 13.326416015625],
                    [67.07385369337244, 12.974853515625],
                    [66.80273059172438, 11.876220703125],
                    [66.36174470352536, 11.502685546875],
                    [65.70577831745511, 11.370849609375],
                    [65.3049452084133, 11.09619140625],
                    [64.92586979490835, 9.920654296875],
                    [64.5035504066553, 10.184326171875],
                    [64.19442343702703, 9.31640625],
                    [63.92047329565707, 7.877197265625],
                    [63.648697570849286, 7.80029296875],
                    [63.443142420685255, 7.064208984375],
                    [63.24599409649571, 7.1630859375],
                    [62.68674886147266, 5.44921875],
                    [62.10131232774255, 4.515380859375],
                    [61.41512211424534, 4.119873046875],
                    [60.535670296892135, 4.19677734375],
                    [59.52596149713797, 4.493408203125],
                    [59.240605483300556, 4.471435546875],
                    [58.36427519285588, 5.2294921875],
                    [57.824280360856264, 6.251220703125],
                    [57.64834025680058, 7.62451171875],
                    [58.37579834033745, 9.569091796875],
                    [58.70833614572296, 10.26123046875],
                    [58.063350318147386, 10.8544921875],
                    [57.765728734885194, 9.415283203125],
                    [57.382822325566366, 8.89892578125],
                    [57.17496981102601, 7.80029296875],
                    [55.7487578359952, 7.49267578125],
                    [55.05005589189804, 7.657470703125],
                    [54.39655031438518, 7.745361328125],
                    [54.01745222977421, 7.064208984375],
                    [53.6348677883201, 4.603271484375],
                    [52.619725272670294, 3.812255859375],
                    [51.4094858955551,
                        2.30712890625
                    ],
                    [51.730430542940184, 1.64794921875],
                    [52.67305135923188, 2.449951171875],
                    [53.18299586008718, 1.834716796875],
                    [53.34727222643009, 0.6591796875],
                    [54.689709430616546, -0.02197265625],
                    [54.92398527186035, -0.791015625],
                    [55.93997139914653, -1.318359375],
                    [56.16696465022672, -2.076416015625],
                    [57.742281477244454, -1.065673828125],
                    [57.96441703868648, -1.505126953125],
                    [58.00518739971227, -3.076171875],
                    [58.93583884471029, -2.08740234375],
                    [60.215262157101726, -0.494384765625],
                    [61.07688765690606, -0.406494140625],
                    [61.082200589284355, -1.318359375],
                    [60.503230217219034, -2.362060546875],
                    [59.91923685371464, -2.691650390625],
                    [58.91315571775059, -4.10888671875],
                    [58.839332591651775, -5.64697265625],
                    [58.75965446428805, -6.910400390625],
                    [58.312374450913, -7.789306640625],
                    [57.84767441961376, -8.909912109375],
                    [57.601278249736005, -8.76708984375],
                    [57.52467237801596, -8.031005859375],
                    [56.917998496857315, -8.2177734375],
                    [56.38654270188628, -7.635498046875],
                    [56.06283634317047, -7.00927734375],
                    [55.575239380091226, -7.00927734375],
                    [55.4632852242562, -8.536376953125],
                    [54.79751835965899, -9.4921875],
                    [54.57524580078331, -9.613037109375],
                    [54.3197273165176, -10.843505859375],
                    [53.202742353507226, -10.843505859375],
                    [52.8459123539017, -10.096435546875],
                    [52.25807132666112, -11.195068359375],
                    [51.47796179607124, -10.821533203125],
                    [50.8926391311106, -9.547119140625],
                    [51.614605707797466, -7.305908203125],
                    [52.089632613639715, -5.95458984375],
                    [53.73896488496292, -5.592041015625],
                    [54.159217654166895, -5.185546875],
                    [53.81038242731128, -5.108642578125],
                    [54.04971418210692, -3.8671875],
                    [53.75845444856318, -3.8671875],
                    [53.49784954396767, -5.240478515625],
                    [53.05112003878514, -5.07568359375],
                    [52.59303784115741, -5.20751953125],
                    [52.30511992110524, -4.8779296875],
                    [51.87309959004367, -5.965576171875],
                    [51.32031367286622, -5.372314453125],
                    [51.4094858955551, -4.658203125],
                    [50.46100111599232, -5.855712890625],
                    [50.152266272562684, -6.646728515625],
                    [49.64273443429918, -6.6796875],
                    [49.58578744112235, -5.635986328125],
                    [49.954754298064195, -4.37255859375],
                    [49.954754298064195, -3.658447265625],
                    [50.306884231551166, -2.724609375],
                    [50.257741984396894, -1.2744140625],
                    [50.551834865795186, 0.648193359375],
                    [50.13114315479007, 0.15380859375],
                    [49.81317633337614, -0.560302734375],
                    [49.990083926193925, -2.48291015625],
                    [49.56441516255451, -3.36181640625],
                    [49.17093019244911, -3.284912109375],
                    [48.832181625698475, -5.64697265625],
                    [47.535746978239125, -5.482177734375],
                    [47.357431944587034, -3.97705078125],
                    [46.74362499884437, -3.218994140625],
                    [46.1912395780416, -2.39501953125],
                    [45.52559248776561, -1.900634765625],
                    [43.92559366355069, -2.186279296875],
                    [43.830564195198264, -4.075927734375],
                    [44.02837121279199, -6.767578125],
                    [44.319918120477425, -8.426513671875],
                    [43.76712702120528, -9.29443359375],
                    [43.337164854911094, -10.118408203125],
                    [42.0615286181226, -9.656982421875],
                    [40.86783384138491, -9.51416015625],
                    [38.603993275591684, -10.338134765625],
                    [38.087013204022725, -9.73388671875],
                    [37.82714141683739, -9.349365234375],
                    [36.71687068791303, -9.635009765625],
                    [36.42570252039198, -9.151611328125],
                    [36.64638529597495, -7.174072265625],
                    [35.964669147704086, -6.778564453125],
                    [35.48751102385376, -5.5810546875],
                    [36.11125252076156, -3.66943359375],
                    [36.25313319699069, -0.87890625],
                    [37.98750437106374, 0.3515625],
                    [38.212288054388175, 1.5380859375],
                    [38.899583425982705, 2.3291015625],
                    [38.69408504756833, 3.2958984375],
                    [39.58029027440865, 5.42724609375],
                    [40.88860081193033, 4.7900390625],
                    [39.96870074491693, 1.0986328125],
                    [40.72228267283148, 1.5380859375],
                    [41.582579601430346, 4.06494140625],
                    [42.80346172417078, 4.06494140625],
                    [42.382894009614056, 5.82275390625],
                    [43.17313537107136, 7.998046875],
                    [41.7631174470059, 7.5146484375],
                    [41.43449030894922, 7.998046875],
                    [40.88860081193033, 7.18505859375],
                    [38.40194908237822, 7.6904296875],
                    [38.436379603, 10.21728515625],
                    [40.60561205826018, 10.634765625],
                    [41.812267143599804, 10.48095703125],
                    [40.72228267283148, 12.0849609375],
                    [39.816975090490004, 14.43603515625],
                    [39.0533181067413, 14.39208984375],
                    [38.659777730712534, 11.4697265625],
                    [37.57505900514996, 11.8212890625],
                    [37.09462150015557, 11.3818359375],
                    [36.37264499608118, 11.6015625],
                    [35.3039185653117, 12.28271484375],
                    [35.294952147406576, 13.5791015625],
                    [36.46988944681576, 13.0078125],
                    [35.411438052435464, 14.512939453125],
                    [35.875698032496665, 15.501708984375],
                    [36.38149043210595, 14.87548828125],
                    [36.42570252039198, 15.908203125],
                    [37.46177847961746, 15.79833984375],
                    [38.12591462924157, 17.46826171875],
                    [39.35978526869001, 17.86376953125],
                    [39.46164364205549, 18.96240234375],
                    [40.83874913796459, 18.8525390625],
                    [42.67435857693384, 14.83154296875],
                    [43.60426186809618, 14.17236328125],
                    [44.55133484083592, 13.4033203125],
                    [43.413028684751445,
                        15.1611328125
                    ],
                    [42.60970621339408, 16.14990234375],
                    [41.77950486590359, 18.45703125],
                    [41.20758898181025, 19.434814453125],
                    [42.386951440524854, 20.313720703125],
                    [43.01669737169671, 20.63232421875],
                    [43.67979094030124, 19.215087890625],
                    [43.281204464332745, 17.9736328125],
                    [44.66474608911831, 16.402587890625],
                    [44.58655513209543, 18.797607421875],
                    [44.68037164189037, 19.720458984375],
                    [45.30193900072717, 19.9951171875],
                    [45.71001523943372, 19.5556640625],
                    [45.50249699389712, 20.379638671875],
                    [44.937585003910904, 20.8740234375],
                    [44.3906169787868, 21.42333984375],
                    [43.99676629896825, 21.917724609375],
                    [43.16912913272099, 22.203369140625],
                    [42.386951440524854, 21.99462890625],
                    [41.75082413553287, 22.532958984375],
                    [41.03378713521864, 22.532958984375],
                    [41.17451935556443, 24.312744140625],
                    [41.05035951931887, 25.960693359375],
                    [41.58668835697237, 26.817626953125],
                    [41.70162734378918, 28.4326171875],
                    [42.435620156499795, 28.19091796875],
                    [43.201171681272456, 28.509521484375],
                    [43.60823944964323, 29.1357421875],
                    [44.80522439622254, 29.300537109375],
                    [45.48709473229837,
                        29.344482421875
                    ],
                    [45.57944511437787, 28.487548828125],
                    [46.81885778879603, 28.509521484375],
                    [47.58023129789275, 27.850341796875],
                    [48.16974908365419, 27.35595703125],
                    [48.37449671682332, 26.38916015625],
                    [48.44742209577055, 25.94970703125],
                    [48.35989909002194, 25.51025390625],
                    [48.14043243818811, 25.55419921875],
                    [48.05972528178406, 24.949951171875],
                    [48.27953734226005, 23.060302734375],
                    [48.57842428752037, 22.69775390625],
                    [48.86110101269274, 23.302001953125],
                    [49.52877389852215, 23.192138671875],
                    [49.72092792670335, 24.32373046875],
                    [50.06066538593667, 24.268798828125],
                    [49.990083926193925, 23.587646484375],
                    [50.48197825997291, 24.466552734375],
                    [51.614605707797466, 24.005126953125],
                    [52.29168256269092, 23.9501953125],
                    [52.7396175542709, 24.43359375],
                    [53.58272269994398, 24.136962890625],
                    [53.991624640444314, 25.3125],
                    [53.92698552779884, 25.83984375],
                    [54.13347814286039, 26.279296875],
                    [54.45407332522336, 26.004638671875],
                    [54.89872361296002, 26.3671875],
                    [55.11294279005422, 27.04833984375],
                    [55.58144971869656, 27.04833984375],
                    [55.63109707296326, 27.894287109375],
                    [55.92150795277898, 28.201904296875],
                    [56.307396031366366, 28.531494140625],
                    [57.001858813506765, 28.125],
                    [57.370976638162986, 28.1689453125],
                    [57.607164335274184, 27.8173828125],
                    [57.87105329209309, 28.1689453125],
                    [58.71974675900472, 27.8173828125],
                    [59.425521757748825, 28.5205078125]
                ]),
                m = this.transformToLatLng([
                    [18.375379094031825, -155.7421875],
                    [19.621892180319374, -154.2041015625],
                    [21.47351753334985, -156.181640625],
                    [22.085639901650328, -158.2470703125],
                    [22.370396344320053, -159.5654296875],
                    [28.05259082333986, -176.1767578125],
                    [29.094577077511826, -177.5830078125],
                    [28.36240173523821, -178.59375],
                    [27.27416111737468, -177.9345703125],
                    [27.741884632507087, -176.396484375],
                    [22.411028521558702, -160.7958984375],
                    [21.88188980762927, -160.7958984375],
                    [20.77665905187883, -157.7197265625],
                    [19.9526963975442, -156.533203125],
                    [19.12440952808487, -156.533203125]
                ]),
                q = this.transformToLatLng([
                    [31.302021690136105, 33.892822265625],
                    [29.08977693862319, 34.859619140625],
                    [29.108976151453017, 35.233154296875],
                    [31.928854801809585, 36.068115234375],
                    [33.224903086263964, 35.92529296875],
                    [33.72890830547334, 36.3427734375],
                    [33.77458136371689, 35.17822265625],
                    [32.99484290420988, 34.771728515625],
                    [32.00341778396365, 34.530029296875]
                ]),
                v = this.transformToLatLng([
                    [44.99588261816546, 143.876953125],
                    [47.249406957888446, 142.734375],
                    [46.830133640447386, 140.80078125],
                    [43.7393520791547, 139.658203125],
                    [41.541477666790286, 138.603515625],
                    [39.470125122358176, 138.779296875],
                    [36.914764288955936, 134.82421875],
                    [35.71083783530009, 131.1328125],
                    [39.198205348894795, 129.287109375],
                    [37.82280243352756, 124.1015625],
                    [33.90689555128866, 125.33203125],
                    [31.615965936476073, 127.529296875],
                    [26.70635985763354, 126.03515625],
                    [25.443274612305746, 122.34375],
                    [24.886436490787712, 118.564453125],
                    [23.28171917560002, 111.09375],
                    [20.591652120829167, 111.97265625],
                    [19.601194161263145, 114.169921875],
                    [22.87744046489713, 118.30078125],
                    [21.248422235627025, 120.322265625],
                    [23.845649887659352, 122.958984375],
                    [25.443274612305746, 128.49609375],
                    [25.095548539604252, 140.9326171875],
                    [24.497146320571886, 141.2841796875],
                    [24.73685348477069, 141.7236328125],
                    [26.322960198925365, 142.14111328125],
                    [26.539394329017032, 142.646484375],
                    [27.459539332717906, 142.36083984375],
                    [27.97984914504167, 142.547607421875],
                    [27.97984914504167, 142.174072265625],
                    [27.620273282414246, 141.976318359375],
                    [26.838776064165863, 142.03125],
                    [26.536937135265685, 141.7620849609375],
                    [25.500305556118665, 141.5972900390625],
                    [25.57465306409282, 141.1907958984375],
                    [25.21239616785117, 140.745849609375],
                    [25.671235828577043, 129.00146484375],
                    [26.716173757934094, 128.935546875],
                    [28.352733760237818, 130.36376953125],
                    [30.836214626064844, 131.8359375],
                    [32.27784451498272, 132.275390625],
                    [32.8334428466495, 135.439453125],
                    [34.334364487026306, 138.5595703125],
                    [32.59310597426534, 139.658203125],
                    [32.778037985363675, 140.3173828125],
                    [34.44315867450577, 140.03173828125],
                    [35.64836915737426, 141.30615234375],
                    [37.93553306183642, 141.52587890625],
                    [39.5633531658293, 142.62451171875],
                    [41.84501267270689, 141.96533203125],
                    [41.40153558289846, 143.4375],
                    [42.49640294093705, 144.42626953125],
                    [43.492782808225,
                        147.4365234375
                    ],
                    [44.33170718680921, 147.65625],
                    [45.251688256117646, 149.4140625],
                    [46.09609080214316, 149.08447265625],
                    [44.91035917458495, 145.6787109375]
                ]),
                t = this.transformToLatLng([
                    [61.39408895332512, 73.27880859375],
                    [61.16708631440344, 72.125244140625],
                    [60.92776312080081, 72.235107421875],
                    [60.86363802100094, 72.75146484375],
                    [61.14058401978046, 73.212890625],
                    [60.89037248051405, 76.080322265625],
                    [60.69200655888423, 76.519775390625],
                    [60.8368811640731, 77.091064453125],
                    [61.11405946265586, 76.92626953125],
                    [61.11405946265586,
                        76.431884765625
                    ],
                    [61.03967215547472, 75.750732421875],
                    [61.22531306274158, 73.85009765625],
                    [61.4361411140723, 73.65234375]
                ]),
                r = this.transformToLatLng([
                    [50.597186230587035, -129.0234375],
                    [48.42920055556841, -125.5078125],
                    [46.34692761055676, -124.453125],
                    [42.779275360241904, -124.892578125],
                    [41.27780646738183, -124.62890625],
                    [39.9434364619742, -125.068359375],
                    [36.70365959719456, -122.431640625],
                    [33.61461929233378, -120.849609375],
                    [32.879587173066305, -118.4765625],
                    [30.486550842588482, -116.455078125],
                    [28.8831596093235, -115.83984375],
                    [27.332735136859146, -115.400390625],
                    [25.760319754713887, -113.37890625],
                    [23.36242859340884, -111.62109375],
                    [22.14670778001263, -109.6875],
                    [22.958393318086348, -108.193359375],
                    [22.79643932091949, -107.314453125],
                    [21.08450008351735, -106.171875],
                    [20.262197124246534, -106.611328125],
                    [17.43451055152291, -103.095703125],
                    [14.817370620155266, -96.767578125],
                    [15.072123545811683, -94.74609375],
                    [13.966054081318314, -92.28515625],
                    [12.940322128384626, -90.615234375],
                    [16.1724728083975, -87.275390625],
                    [19.518375478601566, -86.8359375],
                    [22.553147478403194, -86.1328125],
                    [21.3303150734318, -91.40625],
                    [19.518375478601566, -91.845703125],
                    [18.8543103618898, -94.04296875],
                    [19.435514339097825, -95.625],
                    [22.958393318086348, -97.20703125],
                    [27.176469131898894, -96.240234375],
                    [29.036960648558267, -93.603515625],
                    [28.497660832963472, -90.3515625],
                    [29.420460341013133, -86.8359375],
                    [28.8831596093235, -84.0234375],
                    [26.941659545381516, -83.759765625],
                    [24.32707654001865, -81.73828125],
                    [24.32707654001865, -81.73828125],
                    [24.726874870506972, -79.189453125],
                    [28.497660832963472, -79.189453125],
                    [30.713503990354965, -80.5078125],
                    [34.415973384481866, -74.794921875],
                    [37.1252862849668, -74.970703125],
                    [39.740986355883564, -72.421875],
                    [40.68063802521456, -68.90625],
                    [43.100982876188546, -68.642578125],
                    [42.32606244456202, -66.4453125],
                    [42.58544425738491, -63.984375],
                    [44.49650533109348, -62.75390625],
                    [45.12005284153054, -59.677734375],
                    [46.40756396630067, -58.095703125],
                    [46.34692761055676, -55.01953125],
                    [45.920587344733654, -53.701171875],
                    [47.54687159892238, -51.50390625],
                    [49.75287993415022, -53.0859375],
                    [50.317408112618686, -55.01953125],
                    [49.866316729538674, -58.359375],
                    [48.312427904071775, -60.556640625],
                    [46.81509864599243, -61.8310546875],
                    [48.004625021133904, -63.8525390625],
                    [48.64742780553354, -68.90625],
                    [48.929717630629554, -70.7080078125],
                    [49.46098385110948, -72.2021484375],
                    [49.14578361775004, -73.41064453125],
                    [48.17341248658083, -72.9052734375],
                    [46.837649560937464, -73.388671875],
                    [46.76244305208004, -75.41015625],
                    [48.070738264258296, -76.39892578125],
                    [48.71271258145237, -78.59619140625],
                    [48.828565527993234, -80.13427734375],
                    [49.61782831211114, -81.474609375],
                    [50.014799234787844, -84.3310546875],
                    [50.18393346184497, -86.748046875],
                    [50.46449795300867, -88.17626953125],
                    [50.74340774029213, -89.384765625],
                    [49.30363576187125, -89.560546875],
                    [49.93000812460691, -90.54931640625],
                    [50.450509053586586, -91.7138671875],
                    [50.52041218671901, -94.06494140625],
                    [52.3688917060255, -96.767578125],
                    [53.75520681580145, -99.38232421875],
                    [56.13330691237569, -97.294921875],
                    [57.148160713298324, -99.052734375],
                    [53.72271667491848, -101.07421875],
                    [55.28537238249355, -101.97509765625],
                    [55.96765007530668, -105.9521484375],
                    [56.51707901932375, -108.91845703125],
                    [57.058656606677616, -110.01708984375],
                    [54.983918190363234, -110.478515625],
                    [55.109800793143805, -112.0166015625],
                    [55.91842985630817, -113.5107421875],
                    [56.68640819588568, -114.6533203125],
                    [56.016807763203225, -115.42236328125],
                    [56.68640819588568, -116.74072265625],
                    [56.794862261400546, -120.05859375],
                    [61.079544234557304, -125.15625],
                    [63.99523519297698, -132.01171875],
                    [64.37794095121995, -135.087890625],
                    [68.83180177092166, -131.572265625],
                    [69.20940390181205, -133.9453125],
                    [64.60503753178526, -139.39453125],
                    [65.05360170595502, -142.119140625],
                    [71.00265967789278, -147.568359375],
                    [70.80136623397624, -151.875],
                    [65.85675647909318, -153.6328125],
                    [64.21593657413428, -151.083984375],
                    [62.237232893654486, -153.1494140625],
                    [60.05387385148492, -152.9296875],
                    [58.7111891496366, -152.138671875],
                    [59.38917842312835, -148.7548828125],
                    [60.662414765343684, -147.216796875],
                    [59.92199002450385, -145.1513671875],
                    [59.47856883192639, -141.5478515625],
                    [58.367156332478885, -138.0322265625],
                    [56.23113850341276, -135.615234375],
                    [54.73730756865752, -133.857421875],
                    [53.05442186546102, -133.2861328125],
                    [51.303145259199056, -131.5283203125]
                ]),
                p = this.transformToLatLng([
                    [1.784989507880982, 103.458251953125],
                    [1.2248822742251262, 103.29345703125],
                    [0.8184536092473124, 103.809814453125],
                    [1.1150419135172271, 104.556884765625],
                    [1.6971394669749604, 104.3701171875],
                    [1.938716855057324, 103.897705078125]
                ]),
                u = this.transformToLatLng([
                    [-18.20848019603987, 20.478515625],
                    [-21.391704731036587,
                        20.56640625
                    ],
                    [-21.596150576461426, 19.3798828125],
                    [-27.89734922968425, 19.3359375],
                    [-28.16887518006333, 18.369140625],
                    [-27.625140335093285, 16.962890625],
                    [-28.55557604918596, 15.4248046875],
                    [-32.082574559545904, 17.05078125],
                    [-33.669496972795535, 16.5234375],
                    [-35.371135022801006, 19.1162109375],
                    [-34.831841149828655, 23.4228515625],
                    [-34.39784494644985, 28.125],
                    [-30.958768570779846, 31.4208984375],
                    [-27.702983735525848, 33.8818359375],
                    [-25.66133349895268, 33.9697265625],
                    [-22.735656852206482, 32.431640625],
                    [-21.309846141087192,
                        31.025390625
                    ],
                    [-21.105000275382064, 28.828125],
                    [-17.16178591271515, 26.0595703125]
                ]),
                y = this.transformToLatLng([
                    [78.78062439716328, 16.69921875],
                    [78.65164410346163, 15.1611328125],
                    [78.34497263793179, 14.853515625],
                    [78.00275834918699, 12.83203125],
                    [77.58468407067735, 14.0625],
                    [78.04834616078801, 18.45703125],
                    [78.68618125582103, 18.896484375]
                ]),
                B = this.transformToLatLng([
                    [20.77665905187883, 100.546875],
                    [20.117839630491634, 98.3056640625],
                    [17.245744208007128, 97.470703125],
                    [16.277960306212524, 99.404296875],
                    [14.796127603627053,
                        99.31640625
                    ],
                    [14.072644954380316, 97.998046875],
                    [11.888853082975968, 99.0966796875],
                    [9.340672181980947, 98.7890625],
                    [8.559293903302025, 97.6904296875],
                    [7.38425782830926, 98.0859375],
                    [7.471410908357826, 99.0966796875],
                    [9.514079262770892, 99.9755859375],
                    [12.232654837013484, 100.283203125],
                    [11.802834233547687, 101.2939453125],
                    [12.533115357277163, 102.6123046875],
                    [14.455958231194037, 102.3046875],
                    [15.220589019578128, 101.07421875],
                    [16.99375545289456, 100.3271484375],
                    [18.999802829053262, 101.7333984375],
                    [20.653346148076064,
                        101.2939453125
                    ]
                ]),
                C = this.transformToLatLng([
                    [62.11416112594049, 34.0576171875],
                    [60.31606836555203, 28.828125],
                    [58.75680543225761, 27.94921875],
                    [56.08429756206141, 34.541015625],
                    [53.50111704294316, 31.1572265625],
                    [51.767839887322125, 28.828125],
                    [49.681846899401286, 28.388671875],
                    [45.84410779560204, 30.146484375],
                    [45.72152152227954, 32.0361328125],
                    [46.63435070293566, 38.7158203125],
                    [46.27103747280261, 40.2978515625],
                    [45.90529985724799, 37.6611328125],
                    [44.731125592643274, 36.650390625],
                    [42.601619944327965, 39.4189453125],
                    [42.73087427928485, 40.9130859375],
                    [43.691707903073805, 44.4287109375],
                    [45.5679096098613, 49.7021484375],
                    [47.08508535995383, 49.833984375],
                    [48.90805939965007, 46.7578125],
                    [51.713416052417614, 51.0205078125],
                    [50.69471783819287, 55.107421875],
                    [50.61113171332364, 60.64453125],
                    [52.03897658307622, 61.5234375],
                    [53.891391285752874, 62.138671875],
                    [54.78801734817893, 67.5439453125],
                    [57.55120803456642, 66.4013671875],
                    [59.89444803635239, 60.88623046875],
                    [59.971508053826554, 55.7666015625],
                    [61.995746661601764, 51.4599609375],
                    [60.356847344793586, 44.044189453125],
                    [60.000359425204515, 40.3802490234375],
                    [60.31334795477253, 37.7490234375],
                    [60.22071908232925, 33.760986328125],
                    [61.879459406646575, 35.09033203125],
                    [62.15267486947575, 34.56298828125]
                ]);
            this.antarcticaPoly = this.createPolygon(a);
            this.australiaPoly = this.createPolygon(d);
            this.brazilPoly = this.createPolygon(b);
            this.canaryIslandsPoly = this.createPolygon(c);
            this.chilePoly = this.createPolygon(k);
            this.eastRussiaPoly = this.createPolygon(l);
            this.europePoly = this.createPolygon(n);
            this.hawaiiMidwayPoly = this.createPolygon(m);
            this.israelPoly = this.createPolygon(q);
            this.japanKoreaPoly = this.createPolygon(v);
            this.northRussiaPoly = this.createPolygon(t);
            this.northAmericaPoly = this.createPolygon(r);
            this.singaporePoly = this.createPolygon(p);
            this.southernAfricaPoly = this.createPolygon(u);
            this.svalbardPoly = this.createPolygon(y);
            this.thailandLaosPoly = this.createPolygon(B);
            this.westRussiaPoly = this.createPolygon(C)
        },
        isWithinBoundaries: function (a) {
            return google.maps.geometry.poly.containsLocation(a,
                this.antarcticaPoly) || google.maps.geometry.poly.containsLocation(a, this.australiaPoly) || google.maps.geometry.poly.containsLocation(a, this.brazilPoly) || google.maps.geometry.poly.containsLocation(a, this.canaryIslandsPoly) || google.maps.geometry.poly.containsLocation(a, this.chilePoly) || google.maps.geometry.poly.containsLocation(a, this.eastRussiaPoly) || google.maps.geometry.poly.containsLocation(a, this.europePoly) || google.maps.geometry.poly.containsLocation(a, this.hawaiiMidwayPoly) || google.maps.geometry.poly.containsLocation(a,
                this.israelPoly) || google.maps.geometry.poly.containsLocation(a, this.japanKoreaPoly) || google.maps.geometry.poly.containsLocation(a, this.northRussiaPoly) || google.maps.geometry.poly.containsLocation(a, this.northAmericaPoly) || google.maps.geometry.poly.containsLocation(a, this.singaporePoly) || google.maps.geometry.poly.containsLocation(a, this.southernAfricaPoly) || google.maps.geometry.poly.containsLocation(a, this.svalbardPoly) || google.maps.geometry.poly.containsLocation(a, this.thailandLaosPoly) || google.maps.geometry.poly.containsLocation(a,
                this.westRussiaPoly) ? !0 : !1
        },
        transformToLatLng: function (a) {
            var d = [];
            c.each(a, function (a, c) {
                c = new google.maps.LatLng(c[0], c[1]);
                d.push(c)
            });
            return d
        },
        createPolygon: function (a) {
            return new google.maps.Polygon({
                paths: a,
                clickable: !1,
                draggable: !1,
                editable: !1
            })
        }
    });
    gg.BoundaryManager = new gg.boundaryManager
});
var gg = gg || {}, sv = new google.maps.StreetViewService;
$(function (c) {
    gg.latLngManager = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.visitedLocalStorageParam = "ggVisitedLocations";
            this.visitedLocations = JSON.parse(localStorage.getItem(this.visitedLocalStorageParam));
            this.visitedLocations || (this.visitedLocations = []);
            this.createHasBeenVisitedHash();
            Math.seedrandom();
            _.bindAll(this)
        },
        getLat: function () {
            var a = c.randomBetween(-90, 90),
                d = c.randomBetween(0, 60),
                b = c.randomBetween(0, 60),
                h = c.randomBetween(0, 60);
            return a + "." + d + b + h
        },
        getLng: function () {
            var a =
                c.randomBetween(-180, 180),
                d = c.randomBetween(0, 60),
                b = c.randomBetween(0, 60),
                h = c.randomBetween(0, 60);
            return a + "." + d + b + h
        },
        getNewLatLng: function () {
            var a = c.Deferred();
            this.generateValidLatLng(a);
            return a.done(function () {})
        },
        generateValidLatLng: function (a) {
            this.currentLatLng = this.generateRandomLatLng();
            this.searchRadius = 1E4;
            this.validatePanorama(a)
        },
        validatePanorama: function (a) {
            var d = this;
            sv.getPanoramaByLocation(this.currentLatLng, this.searchRadius, function (b, c) {
                d.createPanorama(b, c, a)
            })
        },
        searchWider: function (a) {
            this.searchRadius *=
                10;
            this.validatePanorama(a)
        },
        createPanorama: function (a, d, b) {
            d == google.maps.StreetViewStatus.ZERO_RESULTS ? this.searchWider(b) : d == google.maps.StreetViewStatus.OK && (d = [a.location.latLng.lat(), a.location.latLng.lng()], this.hasBeenVisited(d) ? this.generateValidLatLng(b) : (this.currentLatLng = a.location.latLng, this.visitedLocations.push(d), this.addToHasBeenVisitedHash(d), localStorage.setItem(this.visitedLocalStorageParam, JSON.stringify(this.visitedLocations)), b.resolve(a.location.latLng)))
        },
        generateRandomLatLng: function () {
            for (var a =
                this.getLat(), d = this.getLng(), a = new google.maps.LatLng(a, d, !0); !gg.BoundaryManager.isWithinBoundaries(a);) a = this.getLat(), d = this.getLng(), a = new google.maps.LatLng(a, d, !0);
            return a
        },
        createHasBeenVisitedHash: function () {
            this.visitedHash = {};
            for (var a = 0; a < this.visitedLocations.length; a++) this.visitedHash[this.visitedLocations[a]] = a
        },
        addToHasBeenVisitedHash: function (a) {
            this.visitedHash[a] = a
        },
        hasBeenVisited: function (a) {
            return this.visitedHash.hasOwnProperty(a)
        }
    });
    gg.LatLngManager = new gg.latLngManager
});
gg = gg || {};
$(function (c) {
    gg.urlShortenerManager = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.geoguessrShortenerApi = "http://url.geoguessr.com/yourls-api.php";
            this.geoguessrShortenerTimeout = 1E3;
            this.googleShortenerApi = "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCqm_gMwyJLLbWH5daO800GlGcop5hKb_s";
            this.bitlyLogin = "geoguessr";
            this.bitlyAPIKey = "R_e94b21f77932ac60c2fc2d0e5168ef5f";
            this.shortUrl = null;
            _.bindAll(this)
        },
        shortenUrl: function (a) {
            var d = c.Deferred(),
                b = this;
            this.jsonpTimeout = setTimeout(function () {
                b.shortenUrlError(a,
                    d)
            }, this.geoguessrShortenerTimeout);
            c.ajax({
                url: this.geoguessrShortenerApi,
                data: {
                    signature: "7dfc57f775",
                    action: "shorturl",
                    url: a,
                    format: "jsonp"
                },
                type: "POST",
                contentType: "application/jsonp",
                dataType: "jsonp",
                success: function (c) {
                    clearTimeout(b.jsonpTimeout);
                    b.shortenUrlSuccess(c, a, d)
                }
            });
            return d.done(function () {})
        },
        shortenUrlSuccess: function (a, d, b) {
            var h = c.parseJSON(a);
            null == h && (h = a);
            200 == h.statusCode ? (this.shortUrl = h.shorturl, b.resolve(this.shortUrl)) : this.shortenUrl_Fallback1(d, b)
        },
        shortenUrlError: function (a,
            d) {
            this.shortenUrl_Fallback1(a, d)
        },
        shortenUrl_Fallback1: function (a, d) {
            var b = this;
            c.ajax({
                url: "http://api.bit.ly/v3/shorten",
                data: {
                    longUrl: a,
                    apiKey: "R_e94b21f77932ac60c2fc2d0e5168ef5f",
                    login: "geoguessr"
                },
                dataType: "jsonp",
                success: function (c) {
                    b.shortenUrlSuccess_Fallback1(c, a, d)
                },
                error: function (c, k, l) {
                    b.shortenUrlError_Fallback1(l, a, d)
                }
            })
        },
        shortenUrlSuccess_Fallback1: function (a, d, b) {
            var h = c.parseJSON(a);
            null == h && (h = a);
            200 == h.status_code ? (this.shortUrl = h.data.url, b.resolve(this.shortUrl)) : this.shortenUrl_Fallback2(d,
                b)
        },
        shortenUrlError_Fallback1: function (a, d, b) {
            this.shortenUrl_Fallback2(d, b)
        },
        shortenUrl_Fallback2: function (a, d) {
            var b = this;
            c.ajax({
                url: this.googleShortenerApi,
                type: "POST",
                data: JSON.stringify({
                    longUrl: a
                }),
                contentType: "application/json",
                success: function (c) {
                    b.shortenUrlSuccess_Fallback2(c, a, d)
                },
                error: function (c, k, l) {
                    b.shortenUrlError_Fallback2(l, a, d)
                }
            })
        },
        shortenUrlSuccess_Fallback2: function (a, d, b) {
            var h = c.parseJSON(a);
            null == h && (h = a);
            this.shortUrl = void 0 == h.id || "" == h.id || null == h.id ? d : h.id;
            b.resolve(this.shortUrl)
        },
        shortenUrlError_Fallback2: function (a, d, b) {
            this.shortUrl = d;
            b.resolve(this.shortUrl)
        }
    });
    gg.UrlShortenerManager = new gg.urlShortenerManager
});
gg = gg || {};
$(function (c) {
    gg.linkManager = Backbone.Model.extend({
        defaults: {},
        initialize: function () {
            this.shareParamName = "v";
            this.challengeParamName = "s";
            this.rootUrl = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/";
            _.bindAll(this)
        },
        getShortenedUrlForShareObj: function (a) {
            var d = c.Deferred();
            a = this.getLongUrlForShareObj(a);
            null == a ? d.resolve(null) : gg.UrlShortenerManager.shortenUrl(a).done(function (a) {
                d.resolve(a)
            });
            return d.done(function () {})
        },
        getLongUrlForShareObj: function (a) {
            var d = this.rootUrl +
                "?" + this.shareParamName + "=";
            a = this.compressShareObj(a);
            return null == a ? null : d + a
        },
        getShareObjFromUrl: function () {
            var a = this.getParam(this.shareParamName);
            return null != a ? this.deCompressShareObj(a) : null
        },
        compressShareObj: function (a) {
            try {
                var d = a.rounds,
                    b = JSON.hbest(d),
                    c = JSON.hpack(d, b);
                a.rounds = c;
                var k = Base64.encode(JSON.stringify(a));
                return encodeURIComponent(k)
            } catch (l) {
                return null
            }
        },
        deCompressShareObj: function (a) {
            try {
                var d = decodeURIComponent(a),
                    b = Base64.decode(d),
                    c = JSON.parse(b);
                c.rounds = JSON.hunpack(c.rounds);
                return c
            } catch (k) {
                return null
            }
        },
        getLongUrlForChallenge: function (a) {
            var d = this.rootUrl + "?" + this.challengeParamName + "=";
            a = this.compressChallengeObj(a);
            return null == a ? null : d + a
        },
        getShortenedUrlForChallenge: function (a) {
            var d = c.Deferred();
            a = this.getLongUrlForChallenge(a);
            null == a && d.resolve(null);
            gg.UrlShortenerManager.shortenUrl(a).done(function (a) {
                d.resolve(a)
            });
            return d.done(function () {})
        },
        compressChallengeObj: function (a) {
            try {
                var d = a.rounds,
                    b = JSON.hbest(d),
                    c = JSON.hpack(d, b);
                a.rounds = c;
                var k = Base64.encode(JSON.stringify(a));
                return encodeURIComponent(k)
            } catch (l) {
                return null
            }
        },
        deCompressChallengeObj: function (a) {
            try {
                var d = decodeURIComponent(a),
                    b = Base64.decode(d),
                    c = JSON.parse(b);
                c.rounds = JSON.hunpack(c.rounds);
                return c
            } catch (k) {
                return null
            }
        },
        getChallengeObjFromUrl: function () {
            return this.hasChallengeParam() ? this.deCompressChallengeObj(this.getParam(this.challengeParamName)) : null
        },
        getParam: function (a) {
            return (a = RegExp("[?&]" + encodeURIComponent(a) + "=([^&]*)").exec(location.search)) ? decodeURIComponent(a[1]) : null
        },
        hasShareParam: function () {
            return null !=
                this.getParam(this.shareParamName)
        },
        hasChallengeParam: function () {
            return null != this.getParam(this.challengeParamName)
        }
    });
    gg.LinkManager = new gg.linkManager
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.guessRound = Backbone.Model.extend({
        defaults: {
            points: 0,
            latLng: null,
            guessLatLng: null,
            errorDistance: null
        },
        initialize: function () {
            this.points = 0;
            this.earthHalfCircumference = 20037580;
            this.challengeGuessLatLng = null;
            this.guessTime = this.maxTime = 0;
            this.hasForcedGuess = !1
        },
        makeGuess: function (a) {
            this.guessLatLng = a;
            null != this.guessLatLng ? (this.errorDistance = google.maps.geometry.spherical.computeDistanceBetween(this.latLng, this.guessLatLng), this.roundedErrorDistance = Math.round(this.errorDistance),
                this.roundedErrorDistanceKm = this.roundedErrorDistance / 1E3, this.points = this.calculatePoints(this.errorDistance)) : this.hasForcedGuess = !0;
            null != this.challengeGuessLatLng && (this.challengeErrorDistance = google.maps.geometry.spherical.computeDistanceBetween(this.latLng, this.challengeGuessLatLng), this.challengeRoundedErrorDistance = Math.round(this.challengeErrorDistance), this.challengeRoundedErrorDistanceKm = this.challengeRoundedErrorDistance / 1E3, this.challengePoints = this.calculatePoints(this.challengeErrorDistance));
			c("toggleRightColumn").click();
        },
        calculatePoints: function (a) {
            a = (this.earthHalfCircumference - a) / 1E7;
            return Math.round(2100 * (1 / (1 + Math.exp(-4 * a + 5.2)) + 1 / Math.exp(-8 * a + 17.5) + 1 / Math.exp(-30 * a + 61.2) + 500 / Math.exp(-250 * a + 506.7)))
        },
        isFinished: function () {
            return 0 < points
        },
        hasGuess: function () {
            return null != this.guessLatLng
        },
        getShareObject: function (a) {
            a = {
                round: a,
                lat: this.latLng.lat(),
                lng: this.latLng.lng(),
                gLat: null,
                gLng: null,
                cLat: null,
                cLng: null,
                points: this.points
            };
            null != this.guessLatLng && (a.gLat = this.guessLatLng.lat(), a.gLng = this.guessLatLng.lng());
            null != this.challengeGuessLatLng && (a.cLat = this.challengeGuessLatLng.lat(), a.cLng = this.challengeGuessLatLng.lng());
            return a
        },
        getChallengeObject: function (a) {
            a = {
                round: a,
                lat: this.latLng.lat(),
                lng: this.latLng.lng(),
                gLat: null,
                gLng: null
            };
            null != this.guessLatLng && (a.gLat = this.guessLatLng.lat(), a.gLng = this.guessLatLng.lng());
            return a
        },
        getSyncChallengeObject: function (a) {
            return {
                round: a,
                lat: this.latLng.lat(),
                lng: this.latLng.lng()
            }
        },
        parseShareObject: function (a) {
            var d, b, c, k;
            d = gg.Helpers.parseFloat(a.lat, null);
            b =
                gg.Helpers.parseFloat(a.lng, null);
            c = gg.Helpers.parseFloat(a.gLat, null);
            k = gg.Helpers.parseFloat(a.gLng, null);
            this.latLng = null;
            d && b && (this.latLng = new google.maps.LatLng(d, b, !0));
            this.guessLatLng = null;
            c && k && (this.guessLatLng = new google.maps.LatLng(c, k, !0));
            this.latLng && this.guessLatLng && (this.errorDistance = google.maps.geometry.spherical.computeDistanceBetween(this.latLng, this.guessLatLng));
            this.points = gg.Helpers.parseInt(a.points, null);
            void 0 != a.cLat && void 0 != a.cLng && (d = gg.Helpers.parseFloat(a.cLat,
                null), a = gg.Helpers.parseFloat(a.cLng, null), this.challengeGuessLatLng = null, d && a && (this.challengeGuessLatLng = new google.maps.LatLng(d, a, !0)))
        }
    })
});
gg = gg || {};
$(function (c) {
    gg.guessRoundCollection = Backbone.Collection.extend({
        model: gg.guessRound,
        defaults: {},
        initialize: function () {
            this.totalRounds = 8675309;
            this.containsSyncChallengeObject = this.containsChallengeObject = this.containsShareObject = !1;
            this.maxTimePerRound = 0;
            this.challengeScore = null
        },
        hasMaxTime: function () {
            return 0 < this.maxTimePerRound
        },
        startTimer: function (a) {
            a ? a.trigger("startTimer") : this.trigger("startTimer")
        },
        timeIsUp: function () {
            this.trigger("forceGuess")
        },
        addNewRound: function () {
			debugger;
            this.createRound().done(function (a) {
                gg.GuessRoundCollection.add(a)
            })
        },
        createRound: function () {
            var a =
                c.Deferred(),
                d = new gg.guessRound,
                b = this;
            this.containsChallengeObject && this.challengeLatLng ? (this.challengeLatLng && (d.latLng = this.challengeLatLng[this.length]), this.challengeGuessLatLng && (d.challengeGuessLatLng = this.challengeGuessLatLng[this.length]), d.maxTime = this.maxTimePerRound, a.resolve(d)) : gg.LatLngManager.getNewLatLng().done(function (c) {
                d.latLng = c;
                d.maxTime = b.maxTimePerRound;
                a.resolve(d)
            });
            return a.done(function () {})
        },
        currentRound: function () {
            return this.last()
        },
        lastRound: function () {
            return 1 <
                this.length ? this.at(this.length - 2) : null
        },
        currentLatLng: function () {
            return this.currentRound().latLng
        },
        currentGuessLatLng: function () {
            return this.currentRound().guessLatLng
        },
        currentChallengeGuessLatLng: function () {
            return this.currentRound().challengeGuessLatLng
        },
        numberOfRounds: function () {
            return this.length
        },
        numberOfRoundsFinished: function () {
            var a = 0;
            this.each(function (d) {
                (d.guessLatLng || d.hasForcedGuess) && a++
            });
            return a
        },
        totalPoints: function () {
            return this.reduce(function (a, d) {
                return a + d.points
            }, 0)
        },
        lastRoundPoints: function () {
            var a =
                this.lastRound();
            return null != a ? a.points : 0
        },
        lastRoundedErrorDistance: function () {
            var a = this.currentRound();
            return null != a ? a.roundedErrorDistance : 0
        },
        roundsLeft: function () {
            return this.totalRounds - this.numberOfRounds()
        },
        roundsLeftUnfinished: function () {
            return this.totalRounds - this.numberOfRoundsFinished()
        },
        makeGuess: function (a) {
            this.currentRound().makeGuess(a);
            this.trigger("makeGuess");
            0 < this.roundsLeft() && this.addNewRound()
			c("toggleRightColumn").click();
        },
        resultClosed: function () {
            0 >= this.roundsLeftUnfinished() ? this.trigger("gameFinished") :
                this.hasMaxTime() && this.startTimer()
        },
        resetGame: function () {
            this.containsSyncChallengeObject = this.containsShareObject = this.containsChallengeObject = !1;
            this.maxTimePerRound = 0;
            this.trigger("startNewGame")
        },
        scoreBoardData: function () {
            return {
                lastRoundPoints: this.lastRoundPoints(),
                totalPoints: this.totalPoints(),
                roundNumber: this.numberOfRounds(),
                totalRounds: this.totalRounds
            }
        },
        roundResultData: function () {
            var a = {
                errorDistance: null,
                points: null,
                challengeErrorDistance: null,
                challengePoints: null
            };
            null != this.currentGuessLatLng &&
                (a.errorDistance = this.currentRound().roundedErrorDistanceKm, a.points = this.currentRound().points);
            null != this.currentChallengeGuessLatLng && (a.challengeErrorDistance = this.currentRound().challengeRoundedErrorDistanceKm, a.challengePoints = this.currentRound().challengePoints);
            return a
        },
        getEndGameResultData: function () {
            var a = gg.Helpers.parseSecToMinSecString(this.maxTimePerRound);
            return {
                totalPoints: this.totalPoints(),
                containsShareObject: this.containsShareObject,
                containsChallengeObject: this.containsChallengeObject,
                containsSyncChallengeObject: this.containsSyncChallengeObject,
                challengeScore: this.challengeScore,
                isTimedChallenge: this.hasMaxTime(),
                maxTimePerRound: a
            }
        },
        getChallengeData: function () {
            var a = gg.Helpers.parseSecToMinSecString(this.maxTimePerRound);
            return {
                isSyncChallenge: this.containsSyncChallengeObject,
                isTimedChallenge: this.hasMaxTime(),
                maxTimePerRound: a
            }
        },
        getShortShareObjUrl: function () {
            var a = c.Deferred(),
                d = this.getShareObject();
            gg.LinkManager.getShortenedUrlForShareObj(d).done(function (b) {
                a.resolve(b)
            });
            return a.done(function () {})
        },
        getShortChallengeObjUrl: function () {
            var a = c.Deferred(),
                d = this.getChallengeObject();
            gg.LinkManager.getShortenedUrlForChallenge(d).done(function (b) {
                a.resolve(b)
            });
            return a.done(function () {})
        },
        getShortSyncChallengeObjUrl: function (a, d) {
            var b = c.Deferred();
            this.getSyncChallengeObject(a, d).done(function (a) {
                gg.LinkManager.getShortenedUrlForChallenge(a).done(function (a) {
                    b.resolve(a)
                })
            });
            return b.done(function () {})
        },
        getShareObject: function () {
            if (!this.shareObject) {
                var a = [];
                this.each(function (d,
                    b) {
                    a.push(d.getShareObject(b + 1))
                });
                this.shareObject = {
                    totalPoints: this.totalPoints(),
                    version: 1,
                    rounds: a,
                    isChallenge: this.containsChallengeObject,
                    challengeScore: this.challengeScore,
                    maxTimePerRound: this.maxTimePerRound
                }
            }
            return this.shareObject
        },
        loadShareObject: function () {
            var a = gg.LinkManager.getShareObjFromUrl();
            null != a ? (c.each(a.rounds, function (a, b) {
                var c = new gg.guessRound;
                c.parseShareObject(b);
                gg.GuessRoundCollection.add(c)
            }), a.isChallenge ? (this.containsChallengeObject = !0, this.challengeScore = gg.Helpers.parseInt(a.challengeScore,
                null)) : this.containsChallengeObject = !1, a.maxTimePerRound && (this.maxTimePerRound = gg.Helpers.parseInt(a.maxTimePerRound, null)), this.containsShareObject = !0, this.trigger("showSharedScore")) : this.trigger("invalidLink")
        },
        getChallengeObject: function () {
            if (!this.challengeObject) {
                var a = [];
                this.each(function (d, b) {
                    a.push(d.getChallengeObject(b + 1))
                });
                this.challengeObject = {
                    totalPoints: this.totalPoints(),
                    version: 1,
                    rounds: a,
                    maxTimePerRound: this.maxTimePerRound
                }
            }
            return this.challengeObject
        },
        loadChallengeObject: function () {
            var a =
                gg.LinkManager.getChallengeObjFromUrl();
            if (null != a) {
                var d = this;
                c.each(a.rounds, function (a, c) {
                    if (c.lat && c.lng) {
                        d.challengeLatLng || (d.challengeLatLng = []);
                        var k = gg.Helpers.parseFloat(c.lat, null),
                            l = gg.Helpers.parseFloat(c.lng, null),
                            n = null;
                        k && l && (n = new google.maps.LatLng(k, l, !0));
                        d.challengeLatLng[gg.Helpers.parseInt(c.round, 0) - 1] = n
                    }
                    c.gLat && c.gLng && (d.challengeGuessLatLng || (d.challengeGuessLatLng = []), k = gg.Helpers.parseFloat(c.gLat, null), l = gg.Helpers.parseFloat(c.gLng, null), n = null, k && l && (n = new google.maps.LatLng(k,
                        l, !0)), d.challengeGuessLatLng[gg.Helpers.parseInt(c.round, 0) - 1] = n)
                });
                a.totalPoints && (this.challengeScore = gg.Helpers.parseInt(a.totalPoints, null));
                a.isSyncChallenge && (this.containsSyncChallengeObject = !0);
                a.maxTimePerRound && (this.maxTimePerRound = gg.Helpers.parseInt(a.maxTimePerRound, null));
                this.containsChallengeObject = !0
            } else this.trigger("invalidLink")
        },
        createSyncChallengeRounds: function () {
            var a = c.Deferred(),
                d = [],
                b = 1,
                h = this;
            h.createRound().done(function (c) {
                d.push(c.getSyncChallengeObject(b++));
                h.createRound().done(function (c) {
                    d.push(c.getSyncChallengeObject(b++));
                    h.createRound().done(function (c) {
                        d.push(c.getSyncChallengeObject(b++));
                        h.createRound().done(function (c) {
                            d.push(c.getSyncChallengeObject(b++));
                            h.createRound().done(function (c) {
                                d.push(c.getSyncChallengeObject(b++));
                                a.resolve(d)
                            })
                        })
                    })
                })
            });
            return a.done(function () {})
        },
        getSyncChallengeObject: function (a, d) {
            var b = c.Deferred();
            this.containsChallengeObject = !1;
            this.createSyncChallengeRounds().done(function (c) {
                var k = gg.Helpers.parseInt(a, 0);
                0 > k && (k = 0);
                var l = gg.Helpers.parseInt(d, 0);
                0 > l && (l = 0);
                c = {
                    version: 1,
                    maxTimePerRound: gg.Helpers.parseMinSecToSec(k,
                        l),
                    rounds: c,
                    isSyncChallenge: !0
                };
                b.resolve(c)
            });
            return b.done(function () {})
        },
        redirectReset: function () {
            this.trigger("redirectReset")
        }
    });
    gg.GuessRoundCollection = new gg.guessRoundCollection
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.GGView = Backbone.View.extend({
        el: "#geoguessrApp",
        initialize: function () {
            gg.GuessRoundCollection.on("invalidLink", this.invalidLink, this);
            gg.GuessRoundCollection.on("redirectReset", this.redirectReset, this);
            gg.GuessRoundCollection.on("add", this.startNewRound, this);
            gg.GuessRoundCollection.on("makeGuess", this.makeGuess, this);
            gg.GuessRoundCollection.on("gameFinished", this.gameFinished, this);
            gg.GuessRoundCollection.on("resultMapClosed", this.resultMapClosed, this);
            gg.GuessRoundCollection.on("showSharedScore",
                this.showSharedScore, this);
            this.guessMapView = new gg.guessMapView({
                model: gg.GuessRoundCollection,
                el: c("#guessMapContainer")
            });
            this.scoreBoardView = new gg.scoreBoardView({
                model: gg.GuessRoundCollection,
                el: c("#scoreBoard")
            });
            this.resultMapView = new gg.resultMapView({
                model: gg.GuessRoundCollection,
                el: c("#resultMapContainer")
            });
            this.endResultMapView = new gg.endResultMapView({
                model: gg.GuessRoundCollection,
                el: c("#endResultMapContainer")
            });
            this.invalidLinkView = new gg.invalidLinkView({
                model: gg.GuessRoundCollection,
                el: c("#invalidLinkContainer")
            });
            this.challengeInstructionsView = new gg.challengeInstructionsView({
                model: gg.GuessRoundCollection,
                el: c("#challengeInstructionsContainer")
            });
            this.createSyncChallengeView = new gg.createSyncChallengeView({
                model: gg.GuessRoundCollection,
                el: c("#createSyncChallengeContainer")
            });
            this.render();
            this.helpView = new gg.helpView({
                model: gg.GuessRoundCollection,
                el: c("#helpContainer")
            });
            gg.LinkManager.hasShareParam() ? (gg.GuessRoundCollection.loadShareObject(), gg.GuessRoundCollection.on("startNewGame",
                this.redirectReset, this)) : (gg.LinkManager.hasChallengeParam() ? (gg.GuessRoundCollection.loadChallengeObject(), this.challengeInstructionsView.render(), gg.GuessRoundCollection.on("startNewGame", this.redirectReset, this)) : (this.helpView.show(!1), gg.GuessRoundCollection.on("startNewGame", this.startNewGame, this)), this.startNewGame())
        },
        startNewGame: function () {
            gg.GuessRoundCollection.reset();
            gg.GuessRoundCollection.addNewRound()
        },
        events: {
            "click #toggleRightColumn": "toggleRightColumn",
            "click #rightColumnHiddenHeader": "toggleRightColumn",
            "click #helpButton": "showHelp",
            "click #returnToStart": "returnToStart",
            "click #createSyncChallenge": "createSyncChallenge"
        },
        render: function () {},
        showHelp: function () {
            this.helpView.show(!0)
        },
        returnToStart: function () {
            void 0 != this.panoramaView && this.panoramaView.returnToStartLocation()
        },
        createSyncChallenge: function () {
            this.createSyncChallengeView.render()
        },
        startNewRound: function () {
            this.panoramaView ? this.panoramaView.reset() : this.panoramaView = new gg.panoramaView({
                model: gg.GuessRoundCollection,
                el: c("#panorama")
            });
            gg.GuessRoundCollection.hasMaxTime() && (this.roundTimerView ? this.roundTimerView.reset() : (this.roundTimerView = new gg.roundTimerView({
                model: gg.GuessRoundCollection,
                el: c("#roundTimerContainer")
            }), gg.GuessRoundCollection.on("startTimer", this.startTimer, this), gg.GuessRoundCollection.on("forceGuess", this.forceGuess, this)));
            this.guessMapView.reset();
            this.scoreBoardView.render()
        },
        makeGuess: function () {
            this.roundTimerView && this.roundTimerView.stopTimer();
			c("toggleRightColumn").click();
            this.resultMapView.reset()
        },
        resultMapClosed: function () {},
        gameFinished: function () {
            this.endResultMapView.render()
        },
        toggleRightColumn: function () {
            var a = c("#rightColumnContent");
            !a.hasClass("closed") ? a.animate({"marginTop":"-120%"},300, function () {
                c("#rightColumnHiddenHeader").toggle()
            }) : (c("#rightColumnHiddenHeader").toggle(), a.animate({"marginTop":"0"}, 300, null));
            c("#toggleRightColumn, #rightColumnContent").toggleClass("closed")
        },
        showSharedScore: function () {
            this.setupSharedScoreOpenGraph();
            this.gameFinished()
        },
        invalidLink: function () {
            this.invalidLinkView.render()
        },
        setupSharedScoreOpenGraph: function () {
            var a = "GeoGuessr - Let's explore the world! I got " +
                gg.GuessRoundCollection.totalPoints() + " points in the game of GeoGuessr, can you beat me?";
            c('meta[property="og:description"]').attr("content", a);
            c(".addthis_toolbox.likeButtons").attr("addthis:description", a);
            "undefined" != typeof addthis_share && (addthis_share.title = a, addthis_share.description = "I got {%= totalPoints %} points in the awesome game of GeoGuessr, can you beat me?")
        },
        redirectReset: function () {
            window.location.replace(window.location.protocol + "//" + window.location.hostname)
        },
        startTimer: function () {
            this.roundTimerView.startTimer()
        },
        forceGuess: function () {
            this.roundTimerView && this.roundTimerView.stopTimer();
            this.guessMapView.makeGuess(null, !0)
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.panoramaView = Backbone.View.extend({
        template: _.template(c("#panorama_template").html()),
        initialize: function () {
			debugger;
            _.bindAll(this);
            this.panoramaOptions = {
                pov: {
                    heading: 270,
                    pitch: -15,
                    zoom: 0.5
                },
                visible: !0,
                addressControlOptions: {
                    position: google.maps.ControlPosition.TOP_RIGHT
                },
                addressControl: !1
            };
            this.render();
        },
        reset: function () {
            this.render()
        },
        returnToStartLocation: function () {
            this.panorama.setPosition(this.model.currentLatLng());
            this.panorama.setPov(this.panoramaOptions.pov)
        },
        render: function () {
            sv.getPanoramaByLocation(this.model.currentLatLng(),
                10, this.processSVData);
            this.$el.html(this.template(this.model.toJSON()));
			debugger;
			this.$el.focus();
            return this
        },
        processSVData: function (a, d) {
            d == google.maps.StreetViewStatus.OK && (this.panorama = new google.maps.StreetViewPanorama(this.el), this.panorama.setPano(a.location.pano), this.panorama.setOptions(this.panoramaOptions))
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.guessMapView = Backbone.View.extend({
        template: _.template(c("#map_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.mapOptions = {
                zoom: 1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: !1,
                streetViewControl: !1
            };
            this.mapStartingArea = new google.maps.LatLng(0, 0, !0);
            this.mapDOMObject = this.$el.find("#guessMap").get(0);
            this.map = new google.maps.Map(this.mapDOMObject, this.mapOptions);
            this.guessMarkerOptions = {
                map: this.map,
                visible: !0,
                title: "Your guess",
                animation: google.maps.Animation.DROP,
                draggable: !0
            };
            google.maps.event.addListener(this.map, "click", this.setGuessMarker);
            this.render()
        },
        events: {
            "click #makeGuess": "makeGuess"
        },
        reset: function () {
            this.resetMarker();
            this.deactivateButton();
            this.map.setCenter(this.mapStartingArea);
            this.map.setZoom(1);
            this.render()
        },
        activateButton: function () {
            this.$el.find("#makeGuess").addClass("active")
        },
        deactivateButton: function () {
            this.$el.find("#makeGuess").removeClass("active")
        },
        setGuessMarker: function (a) {
            this.resetMarker();
            this.guessMarker = new google.maps.Marker(this.guessMarkerOptions);
            this.guessMarker.setPosition(a.latLng);
            null != this.currentGuessLatLng() ? this.activateButton() : this.deactivateButton()
        },
        currentGuessLatLng: function () {
            return void 0 == this.guessMarker ? null : this.guessMarker.position
        },
        resetMarker: function () {
            null != this.guessMarker && (this.guessMarker.setPosition(null), this.guessMarker.setMap(null))
        },
        makeGuess: function (a, d) {
            (null != this.currentGuessLatLng() || d) && this.model.makeGuess(this.currentGuessLatLng());
			c("toggleRightColumn").click();
        },
        render: function () {
            this.map.setCenter(this.mapStartingArea);
            return this
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.scoreBoardView = Backbone.View.extend({
        template: _.template(c("#scoreboard_template").html()),
        initialize: function () {
            _.bindAll(this)
        },
        reset: function () {
            this.render()
        },
        render: function () {
            this.$el.html(this.template(this.model.scoreBoardData()));
            return this
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.resultMapView = Backbone.View.extend({
        template: _.template(c("#resultMap_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.mapOptions = {
                zoom: 2,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: !1,
                streetViewControl: !1
            };
            this.mapStartingArea = new google.maps.LatLng(0, 0, !0);
            this.mapDOMObject = this.$el.find("#resultMap").get(0);
            this.resultMap = new google.maps.Map(this.mapDOMObject, this.mapOptions);
            this.modalOptions = {
                closeClass: "close",
                opacity: 70,
                onShow: this.showMapDone,
                onClose: this.mapClose,
                overlayClose: !0,
                escClose: !0
            };
            this.poly = new google.maps.Polyline({
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2
            });
            this.challengePoly = new google.maps.Polyline({
                strokeColor: "#0000FF",
                strokeOpacity: 1,
                strokeWeight: 2
            });
            this.resultMarkerOptions = {
                map: this.resultMap,
                visible: !0,
                title: "Correct answer",
                icon: "/img/googleMapsMarkers/green_MarkerA.png"
            };
            this.guessMarkerOptions = {
                map: this.resultMap,
                visible: !0,
                title: "Your guess",
                icon: "/img/googleMapsMarkers/red_MarkerB.png"
            };
            this.challengeGuessMarkerOptions = {
                map: this.resultMap,
                visible: !0,
                title: "Challenge guess",
                icon: "/img/googleMapsMarkers/blue_MarkerB.png"
            }
        },
        showMapDone: function (a) {
            google.maps.event.trigger(this.resultMap, "resize");
            a = this.model.currentLatLng();
            null != this.model.currentGuessLatLng() && (a = google.maps.geometry.spherical.interpolate(this.model.currentLatLng(), this.model.currentGuessLatLng(), 0.5));
            null != this.model.currentChallengeGuessLatLng() && (a = google.maps.geometry.spherical.interpolate(a, this.model.currentChallengeGuessLatLng(), 0.5));
            this.resultMap.setCenter(a);
            this.setDynamicZoomLevel()
        },
        mapClose: function (a) {
            c.modal.close();
            this.model.resultClosed()
        },
        setDynamicZoomLevel: function () {
            var a = 9;
            for (this.resultMap.setZoom(a); !this.isMarkersVisible() && 0 < a;) a -= 1, this.resultMap.setZoom(a)
        },
        isMarkersVisible: function () {
            var a = !0;
            this.resultMarker && (a = this.resultMap.getBounds().contains(this.resultMarker.getPosition()));
            this.guessMarker && (a = a && this.resultMap.getBounds().contains(this.guessMarker.getPosition()));
            void 0 != this.challengeGuessMarker &&
                (a = a && this.resultMap.getBounds().contains(this.challengeGuessMarker.getPosition()));
            return a
        },
        clearPath: function () {
            for (var a = this.poly.getPath(); a.getLength();) a.pop();
            for (a = this.challengePoly.getPath(); a.getLength();) a.pop()
        },
        reset: function () {
            this.resultMap.setCenter(this.mapStartingArea);
            this.resultMap.setZoom(2);
            null != this.resultMarker && this.resultMarker.setMap(null);
            null != this.guessMarker && this.guessMarker.setMap(null);
            null != this.challengeGuessMarker && this.challengeGuessMarker.setMap(null);
            this.clearPath();
            this.render()
        },
        render: function () {
            this.model.hasMaxTime() && (this.modalOptions.opacity = 100);
            this.resultMarker = new google.maps.Marker(this.resultMarkerOptions);
            this.resultMarker.setPosition(this.model.currentLatLng());
            if (null != this.model.currentGuessLatLng()) {
                this.guessMarker = new google.maps.Marker(this.guessMarkerOptions);
                this.guessMarker.setPosition(this.model.currentGuessLatLng());
                this.poly.setMap(this.resultMap);
                var a = this.poly.getPath();
                a.push(this.model.currentLatLng());
                a.push(this.model.currentGuessLatLng())
            }
            null !=
                this.model.currentChallengeGuessLatLng() && (this.challengeGuessMarker = new google.maps.Marker(this.challengeGuessMarkerOptions), this.challengeGuessMarker.setPosition(this.model.currentChallengeGuessLatLng()), this.challengePoly.setMap(this.resultMap), a = this.challengePoly.getPath(), a.push(this.model.currentLatLng()), a.push(this.model.currentChallengeGuessLatLng()));
            this.$el.modal(this.modalOptions);
            this.$el.find("#resultInfo").html(this.template(this.model.roundResultData()));
            return this
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.endResultMapView = Backbone.View.extend({
        template: _.template(c("#endResultMap_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.mapOptions = {
                zoom: 2,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: !1,
                streetViewControl: !1
            };
            this.mapStartingArea = new google.maps.LatLng(0, 0, !0);
            this.mapDOMObject = this.$el.find("#endResultMap").get(0);
            this.endResultMap = new google.maps.Map(this.mapDOMObject, this.mapOptions);
            this.modalOptions = {
                closeClass: "close",
                opacity: 70,
                onShow: this.showMapDone,
                onClose: this.mapClose,
                overlayClose: !0,
                escClose: !0
            };
            this.resultMarkerOptions = {
                map: this.endResultMap,
                visible: !0,
                title: "Correct answer"
            };
            this.guessMarkerOptions = {
                map: this.endResultMap,
                visible: !0,
                title: "Your guess"
            };
            this.challengeMarkerOptions = {
                map: this.endResultMap,
                visible: !0,
                title: "Challenge guess"
            };
            this.polyOptions = {
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2
            };
            this.challengePolyOptions = {
                strokeColor: "#0000FF",
                strokeOpacity: 1,
                strokeWeight: 2
            };
            this.resultMarkers = [];
            this.guessMarkers = [];
            this.resultPolys = [];
            this.challengeMarkers = [];
            this.challengePolys = []
        },
        events: {
            "click .shareUrlButton": "getShortShareUrl",
            "click .challengeUrlButton": "getShortChallengeUrl"
        },
        getShortShareUrl: function (a) {
            var d = c(a.currentTarget);
            if (!d.hasClass("active")) {
                d.toggleClass("active");
                var b = this;
                this.model.getShortShareObjUrl().done(function (a) {
                    d.toggleClass("active");
                    d.hide();
                    var c = b.$el.find(".shareUrlTextBox");
                    c.val(a);
                    c.show()
                })
            }
        },
        getShortChallengeUrl: function (a) {
            var d = c(a.currentTarget);
            if (!d.hasClass("active")) {
                d.toggleClass("active");
                var b = this;
                this.model.getShortChallengeObjUrl().done(function (a) {
                    d.toggleClass("active");
                    d.hide();
                    var c = b.$el.find(".challengeUrlTextBox");
                    c.val(a);
                    c.show()
                })
            }
        },
        printRound: function (a, d) {
            var b = this.getCharFromNum(d),
                c = "/img/googleMapsMarkers/green_Marker" + b + ".png",
                k = "/img/googleMapsMarkers/red_Marker" + b + ".png";
            if (a.latLng) {
                var l = new google.maps.Marker(this.resultMarkerOptions);
                l.setIcon(c);
                l.setPosition(a.latLng);
                this.resultMarkers.push(l)
            }
            a.guessLatLng && (c = new google.maps.Marker(this.guessMarkerOptions),
                c.setIcon(k), c.setPosition(a.guessLatLng), this.guessMarkers.push(c));
            a.latLng && a.guessLatLng && (this.polyOptions.strokeColor = this.getColor(d), k = new google.maps.Polyline(this.polyOptions), k.setMap(this.endResultMap), c = k.getPath(), c.push(a.latLng), c.push(a.guessLatLng), this.resultPolys.push(k));
            a.challengeGuessLatLng && (b = "/img/googleMapsMarkers/blue_Marker" + b + ".png", k = new google.maps.Marker(this.challengeMarkerOptions), k.setIcon(b), k.setPosition(a.challengeGuessLatLng), this.challengeMarkers.push(k));
            a.latLng && a.challengeGuessLatLng && (this.challengePolyOptions.strokeColor = this.getColor(d), b = new google.maps.Polyline(this.challengePolyOptions), b.setMap(this.endResultMap), k = b.getPath(), k.push(a.latLng), k.push(a.challengeGuessLatLng), this.challengePolys.push(b))
        },
        getCharFromNum: function (a) {
            return String.fromCharCode(97 + a)
        },
        getColor: function (a) {
            switch (a) {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2:
                return "green";
            case 3:
                return "black";
            default:
                return "yellow"
            }
        },
        showMapDone: function (a) {
            google.maps.event.trigger(this.endResultMap,
                "resize");
            this.endResultMap.setCenter(this.mapStartingArea);
            this.endResultMap.setZoom(2)
        },
        mapClose: function (a) {
            c.modal.close();
            this.reset();
            this.model.resetGame()
        },
        clearPath: function (a) {
            for (a = a.getPath(); a.getLength();) a.pop()
        },
        reset: function () {
            var a = this;
            this.endResultMap.setCenter(this.mapStartingArea);
            this.endResultMap.setZoom(this.mapOptions.zoom);
            c.each(this.resultMarkers, function (a, b) {
                b.setMap(null)
            });
            this.resultMarkers.length = 0;
            c.each(this.guessMarkers, function (a, b) {
                b.setMap(null)
            });
            this.guessMarkers.length =
                0;
            c.each(this.resultPolys, function (c, b) {
                a.clearPath(b)
            });
            this.resultPolys.length = 0;
            c.each(this.challengeMarkers, function (a, b) {
                b.setMap(null)
            });
            this.challengeMarkers.length = 0;
            c.each(this.challengePolys, function (c, b) {
                a.clearPath(b)
            });
            this.challengePolys.length = 0
        },
        render: function () {
            this.model.each(_.bind(this.printRound, this));
            this.$el.modal(this.modalOptions);
            this.$el.find("#endResultInfo").html(this.template(this.model.getEndGameResultData()));
            return this
        }
    })
});
gg = gg || {};
$(function (c) {
    gg.helpView = Backbone.View.extend({
        template: _.template(c("#help_template").html()),
        initialize: function () {
            this.modalOptions = {
                opacity: 80,
                overlayClose: !0,
                escClose: !0,
                onShow: this.setHelpHasBeenShown,
                closeHTML: "",
                position: [45, 10]
            }
        },
        setHelpHasBeenShown: function () {
            localStorage.setItem("ggHelpHasBeenShown", "true")
        },
        getHelpHasBeenShown: function () {
            return "true" == localStorage.getItem("ggHelpHasBeenShown")
        },
        show: function (a) {
            (a || !this.getHelpHasBeenShown()) && this.render()
        },
        render: function () {
            this.$el.modal(this.modalOptions);
            this.$el.html(this.template(this.model.toJSON()));
            return this
        }
    })
});
gg = gg || {};
$(function (c) {
    gg.invalidLinkView = Backbone.View.extend({
        template: _.template(c("#invalid_link_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.modalOptions = {
                closeClass: "close",
                opacity: 70,
                onClose: this.closeDialog,
                overlayClose: !0,
                escClose: !0
            }
        },
        closeDialog: function () {
            this.model.redirectReset()
        },
        render: function () {
            this.$el.modal(this.modalOptions);
            this.$el.html(this.template(this.model.toJSON()));
            return this
        }
    })
});
gg = gg || {};
$(function (c) {
    gg.challengeInstructionsView = Backbone.View.extend({
        template: _.template(c("#challenge_instructions_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.modalOptions = {
                closeClass: "close",
                opacity: 70,
                overlayClose: !0,
                escClose: !0
            }
        },
        startTimer: function () {
            c.modal.close();
            this.model.startTimer(this.model)
        },
        render: function () {
            this.model.hasMaxTime() && (this.modalOptions.opacity = 100, this.modalOptions.onClose = this.startTimer);
            var a = this.model.getChallengeData(),
                c = this.$el.height();
            a.isSyncChallenge ||
                (c += 75);
            a.isTimedChallenge && (c += 170);
            this.$el.height(c);
            this.$el.modal(this.modalOptions);
            this.$el.html(this.template(a));
            return this
        }
    })
});
gg = gg || {};
$(function (c) {
    gg.createSyncChallengeView = Backbone.View.extend({
        template: _.template(c("#create_sync_challenge_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.modalOptions = {
                closeClass: "close",
                opacity: 70,
                overlayClose: !0,
                escClose: !0
            }
        },
        events: {
            "click #createSyncChallengeButton": "createSyncChallengeLink"
        },
        createSyncChallengeLink: function (a) {
            var d = c(a.currentTarget);
            if (!d.hasClass("active")) {
                d.toggleClass("active");
                a = c("#createSyncChallengeTimeMinutes").val();
                var b = c("#createSyncChallengeTimeSeconds").val();
                this.model.getShortSyncChallengeObjUrl(a,
                    b).done(function (a) {
                    d.hide();
                    c("a#startSyncChallengeButton").attr("href", a);
                    c("a#startSyncChallengeButton").css("display", "inline-block");
                    c("#shareChallengeUrlContainer").show();
                    c("#shareChallengeUrlContainer #shareChallengeUrlTextBox").val(a);
                    c("#createSyncChallengeContainer").animate({
                        height: "335px"
                    }, 250)
                })
            }
        },
        render: function () {
            this.$el.modal(this.modalOptions);
            this.delegateEvents();
            this.$el.html(this.template(this.model.toJSON()));
            return this
        }
    })
});
gg = gg || {};
sv = new google.maps.StreetViewService;
$(function (c) {
    gg.roundTimerView = Backbone.View.extend({
        template: _.template(c("#round_timer_template").html()),
        initialize: function () {
            _.bindAll(this);
            this.currentTimeSeconds = this.maxTimeSeconds = this.model.maxTimePerRound;
            this.render()
        },
        startTimer: function () {
            var a = this;
            this.timer = setInterval(function () {
                a.currentTimeSeconds--;
                0 >= a.currentTimeSeconds && (a.stopTimer(), a.model.timeIsUp());
                a.render()
            }, 1E3)
        },
        stopTimer: function () {
            clearInterval(this.timer)
        },
        reset: function () {
            this.currentTimeSeconds = this.maxTimeSeconds;
            this.render()
        },
        render: function () {
            var a = Math.floor(this.currentTimeSeconds / 60),
                c = this.currentTimeSeconds - 60 * a;
            10 > c && (c = "0" + c);
            this.$el.html(this.template({
                minutes: a,
                seconds: c,
                timeIsNearlyUp: 10 >= this.currentTimeSeconds
            }));
            return this
        }
    })
});
gg = gg || {};
$(function () {
    _.templateSettings = {
        evaluate: /{%([\s\S]+?)%}/g,
        interpolate: /{%=([\s\S]+?)%}/g,
        escape: /{%-([\s\S]+?)%}/g
    };
    new gg.GGView;
	$("body").keydown(function(e){
		if(e.which !== 32) return true;
		// e.preventDefault();
		newRound();
		$(this).click();
		return true;
	});
	setTimeout(focusMe, 4000);
});
/*
.gmnoprint by eq:
0	arrows & oval
1	bottom right logo
2	upper-left nav (all)
3	compass wheel
4	North outer ring
5	arrows inner circle
6	zoom slider
*/
function newRound(){
	gg.GuessRoundCollection.addNewRound();
	setTimeout(focusMe, 1000);
}
function focusMe(){
	$(".gmnoprint")[0].click();
	console.log("foucsed?");
}