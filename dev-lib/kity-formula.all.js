/*!
 * ====================================================
 * Kity Formula - v1.0.0 - 2014-01-10
 * https://github.com/kitygraph/formula
 * GitHub: https://github.com/kitygraph/formula.git 
 * Copyright (c) 2014 Baidu Kity Group; Licensed MIT
 * ====================================================
 */

(function () {
/**
 * cmd 内部定义
 * build用
 */

// 模块存储
var _modules = {};

function define ( id, deps, factory ) {

    _modules[ id ] = {

        exports: {},
        value: null,
        factory: null

    };

    if ( arguments.length === 2 ) {

        factory = deps;

    }

    if ( _modules.toString.call( factory ) === '[object Object]' ) {

        _modules[ id ][ 'value' ] = factory;

    } else if ( typeof factory === 'function' ) {

        _modules[ id ][ 'factory' ] = factory;

    } else {

        throw new Error( 'define函数未定义的行为' );

    }

}

function require ( id ) {

    var module = _modules[ id ],
        exports = null;

    if ( !module ) {

        return null;

    }

    if ( module.value ) {

        return module.value;

    }

    exports = module.factory.call( null, require, module.exports, module );

    // return 值不为空， 则以return值为最终值
    if ( exports ) {

        module.exports = exports;

    }

    module.value = module.exports;

    return module.value;

}

function use ( id ) {

    return require( id );

}
/**
 * 字符类
 */
define("char/char", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/lparentheses", "char/data/symbol/rparentheses", "char/data/symbol/negative", "char/data/symbol/positive", "char/data/symbol/vertical", "char/data/symbol/slash", "char/data/symbol/exclamation", "char/data/symbol/lbrackets", "char/data/symbol/rbrackets", "char/data/symbol/colon", "char/data/symbol/quotation", "char/data/symbol/lt", "char/data/symbol/gt", "char/data/symbol/point", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/greek/u-alpha", "char/data/greek/u-beta", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/greek/u-epsilon", "char/data/greek/u-zeta", "char/data/greek/u-eta", "char/data/greek/u-theta", "char/data/greek/u-iota", "char/data/greek/u-kappa", "char/data/greek/u-lambda", "char/data/greek/u-mu", "char/data/greek/u-nu", "char/data/greek/u-xi", "char/data/greek/u-omicron", "char/data/greek/u-pi", "char/data/greek/u-rho", "char/data/greek/u-sigma", "char/data/greek/u-tau", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/greek/u-chi", "char/data/greek/u-psi", "char/data/greek/u-omega", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_DATA = require("char/data");
    return kity.createClass("Char", {
        base: require("signgroup"),
        constructor: function(value) {
            var currentData = CHAR_DATA[value];
            if (!currentData) {
                throw new Error("invalid character: " + value);
            }
            this.callBase();
            this.value = value;
            this.contentShape = new kity.Group();
            this.box = new kity.Path(currentData.box).fill("transparent");
            this.char = new kity.Path(currentData.path).fill("black");
            this.char.translate(currentData.offset.x, currentData.offset.y);
            this.contentShape.addShape(this.box);
            this.contentShape.addShape(this.char);
            this.addShape(this.contentShape);
        },
        getBaseWidth: function() {
            return this.char.getWidth();
        },
        getBaseHeight: function() {
            return this.char.getHeight();
        },
        getBoxWidth: function() {
            return this.box.getWidth();
        }
    });
});
/**
 * 字符与pathdata映射
 */
define("char/data", [ "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/lparentheses", "char/data/symbol/rparentheses", "char/data/symbol/negative", "char/data/symbol/positive", "char/data/symbol/vertical", "char/data/symbol/slash", "char/data/symbol/exclamation", "char/data/symbol/lbrackets", "char/data/symbol/rbrackets", "char/data/symbol/colon", "char/data/symbol/quotation", "char/data/symbol/lt", "char/data/symbol/gt", "char/data/symbol/point", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/greek/u-alpha", "char/data/greek/u-beta", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/greek/u-epsilon", "char/data/greek/u-zeta", "char/data/greek/u-eta", "char/data/greek/u-theta", "char/data/greek/u-iota", "char/data/greek/u-kappa", "char/data/greek/u-lambda", "char/data/greek/u-mu", "char/data/greek/u-nu", "char/data/greek/u-xi", "char/data/greek/u-omicron", "char/data/greek/u-pi", "char/data/greek/u-rho", "char/data/greek/u-sigma", "char/data/greek/u-tau", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/greek/u-chi", "char/data/greek/u-psi", "char/data/greek/u-omega" ], function(require, exports, module) {
    return {
        // number
        0: require("char/data/number/0"),
        1: require("char/data/number/1"),
        2: require("char/data/number/2"),
        3: require("char/data/number/3"),
        4: require("char/data/number/4"),
        5: require("char/data/number/5"),
        6: require("char/data/number/6"),
        7: require("char/data/number/7"),
        8: require("char/data/number/8"),
        9: require("char/data/number/9"),
        // character
        a: require("char/data/character/a"),
        b: require("char/data/character/b"),
        c: require("char/data/character/c"),
        d: require("char/data/character/d"),
        e: require("char/data/character/e"),
        f: require("char/data/character/f"),
        g: require("char/data/character/g"),
        h: require("char/data/character/h"),
        i: require("char/data/character/i"),
        j: require("char/data/character/j"),
        k: require("char/data/character/k"),
        l: require("char/data/character/l"),
        m: require("char/data/character/m"),
        n: require("char/data/character/n"),
        o: require("char/data/character/o"),
        p: require("char/data/character/p"),
        q: require("char/data/character/q"),
        r: require("char/data/character/r"),
        s: require("char/data/character/s"),
        t: require("char/data/character/t"),
        u: require("char/data/character/u"),
        v: require("char/data/character/v"),
        w: require("char/data/character/w"),
        x: require("char/data/character/x"),
        y: require("char/data/character/y"),
        z: require("char/data/character/z"),
        A: require("char/data/character/ua"),
        B: require("char/data/character/ub"),
        C: require("char/data/character/uc"),
        D: require("char/data/character/ud"),
        E: require("char/data/character/ue"),
        F: require("char/data/character/uf"),
        G: require("char/data/character/ug"),
        H: require("char/data/character/uh"),
        I: require("char/data/character/ui"),
        J: require("char/data/character/uj"),
        K: require("char/data/character/uk"),
        L: require("char/data/character/ul"),
        M: require("char/data/character/um"),
        N: require("char/data/character/un"),
        O: require("char/data/character/uo"),
        P: require("char/data/character/up"),
        Q: require("char/data/character/uq"),
        R: require("char/data/character/ur"),
        S: require("char/data/character/us"),
        T: require("char/data/character/ut"),
        U: require("char/data/character/uu"),
        V: require("char/data/character/uv"),
        W: require("char/data/character/uw"),
        X: require("char/data/character/ux"),
        Y: require("char/data/character/uy"),
        Z: require("char/data/character/uz"),
        // symbol
        "(": require("char/data/symbol/lparentheses"),
        ")": require("char/data/symbol/rparentheses"),
        "-": require("char/data/symbol/negative"),
        "+": require("char/data/symbol/positive"),
        "|": require("char/data/symbol/vertical"),
        "/": require("char/data/symbol/slash"),
        "!": require("char/data/symbol/exclamation"),
        "[": require("char/data/symbol/lbrackets"),
        "]": require("char/data/symbol/rbrackets"),
        ":": require("char/data/symbol/colon"),
        "'": require("char/data/symbol/quotation"),
        "<": require("char/data/symbol/lt"),
        ">": require("char/data/symbol/gt"),
        ".": require("char/data/symbol/point"),
        // greek
        "α": require("char/data/greek/alpha"),
        "\\alpha\\": require("char/data/greek/alpha"),
        "β": require("char/data/greek/alpha"),
        "\\beta\\": require("char/data/greek/beta"),
        "γ": require("char/data/greek/gamma"),
        "\\gamma\\": require("char/data/greek/gamma"),
        "δ": require("char/data/greek/delta"),
        "\\delta\\": require("char/data/greek/delta"),
        "ε": require("char/data/greek/varepsilon"),
        "\\epsilon\\": require("char/data/greek/varepsilon"),
        "ζ": require("char/data/greek/zeta"),
        "\\zeta\\": require("char/data/greek/zeta"),
        "η": require("char/data/greek/eta"),
        "\\eta\\": require("char/data/greek/eta"),
        "θ": require("char/data/greek/theta"),
        "\\theta\\": require("char/data/greek/theta"),
        "ι": require("char/data/greek/iota"),
        "\\iota\\": require("char/data/greek/iota"),
        "κ": require("char/data/greek/kappa"),
        "\\kappa\\": require("char/data/greek/kappa"),
        "λ": require("char/data/greek/lambda"),
        "\\lambda\\": require("char/data/greek/lambda"),
        "μ": require("char/data/greek/mu"),
        "\\mu\\": require("char/data/greek/mu"),
        "ν": require("char/data/greek/nu"),
        "\\nu\\": require("char/data/greek/nu"),
        "ξ": require("char/data/greek/xi"),
        "\\xi\\": require("char/data/greek/xi"),
        "ο": require("char/data/character/o"),
        "\\omicron\\": require("char/data/character/o"),
        "π": require("char/data/greek/pi"),
        "\\pi\\": require("char/data/greek/pi"),
        "ρ": require("char/data/greek/rho"),
        "\\rho\\": require("char/data/greek/rho"),
        "σ": require("char/data/greek/sigma"),
        "\\sigma\\": require("char/data/greek/sigma"),
        "τ": require("char/data/greek/tau"),
        "\\tau\\": require("char/data/greek/tau"),
        "υ": require("char/data/greek/upsilon"),
        "\\upsilon\\": require("char/data/greek/upsilon"),
        "φ": require("char/data/greek/phi"),
        "\\phi\\": require("char/data/greek/phi"),
        "χ": require("char/data/greek/chi"),
        "\\chi\\": require("char/data/greek/chi"),
        "ψ": require("char/data/greek/psi"),
        "\\psi\\": require("char/data/greek/psi"),
        "ω": require("char/data/greek/omega"),
        "\\omega\\": require("char/data/greek/omega"),
        "Α": require("char/data/greek/u-alpha"),
        "\\Alpha\\": require("char/data/greek/u-alpha"),
        "Β": require("char/data/greek/u-beta"),
        "\\Beta\\": require("char/data/greek/u-beta"),
        "Γ": require("char/data/greek/u-gamma"),
        "\\Gamma\\": require("char/data/greek/u-gamma"),
        "Δ": require("char/data/greek/u-delta"),
        "\\Delta\\": require("char/data/greek/u-delta"),
        "Ε": require("char/data/greek/u-epsilon"),
        "\\Epsilon\\": require("char/data/greek/u-epsilon"),
        "Ζ": require("char/data/greek/u-zeta"),
        "\\Zeta\\": require("char/data/greek/u-zeta"),
        "Η": require("char/data/greek/u-eta"),
        "\\Eta\\": require("char/data/greek/u-eta"),
        "Θ": require("char/data/greek/u-theta"),
        "\\Theta\\": require("char/data/greek/u-theta"),
        "Ι": require("char/data/greek/u-iota"),
        "\\Iota\\": require("char/data/greek/u-iota"),
        "Κ": require("char/data/greek/u-kappa"),
        "\\Kappa\\": require("char/data/greek/u-kappa"),
        "Λ": require("char/data/greek/u-lambda"),
        "\\Lambda\\": require("char/data/greek/u-lambda"),
        "Μ": require("char/data/greek/u-mu"),
        "\\Mu\\": require("char/data/greek/u-mu"),
        "Ν": require("char/data/greek/u-nu"),
        "\\Nu\\": require("char/data/greek/u-nu"),
        "Ξ": require("char/data/greek/u-xi"),
        "\\Xi\\": require("char/data/greek/u-xi"),
        "Ο": require("char/data/greek/u-omicron"),
        "\\Omicron\\": require("char/data/greek/u-omicron"),
        "Π": require("char/data/greek/u-pi"),
        "\\Pi\\": require("char/data/greek/u-pi"),
        "Ρ": require("char/data/greek/u-rho"),
        "\\Rho\\": require("char/data/greek/u-rho"),
        "Σ": require("char/data/greek/u-sigma"),
        "\\Sigma\\": require("char/data/greek/u-sigma"),
        "Τ": require("char/data/greek/u-tau"),
        "\\Tau\\": require("char/data/greek/u-tau"),
        "Υ": require("char/data/greek/u-upsilon"),
        "\\Upsilon\\": require("char/data/greek/u-upsilon"),
        "Φ": require("char/data/greek/u-phi"),
        "\\Phi\\": require("char/data/greek/u-phi"),
        "Χ": require("char/data/greek/u-chi"),
        "\\Chi\\": require("char/data/greek/u-chi"),
        "Ψ": require("char/data/greek/u-psi"),
        "\\Psi\\": require("char/data/greek/u-psi"),
        "Ω": require("char/data/greek/u-omega"),
        "\\Omega\\": require("char/data/greek/u-omega")
    };
});
/**
 * 字符data: a
 */
define("char/data/character/a", [], {
    path: "M0,21.432c0-5.226,1.752-10.104,5.256-14.635C8.759,2.266,12.503,0,16.488,0c2.736,0,4.727,1.416,5.976,4.244   c0.383-1.825,1.343-2.738,2.88-2.738c1.296,0,1.944,0.624,1.944,1.87C27.288,3.625,27.191,4,27,4.5l-4.896,19.515   c-0.336,1.41-0.504,2.693-0.504,3.851c0,2.063,0.623,3.095,1.872,3.095c1.775,0,3.384-2.835,4.824-8.507   c0.191-0.763,0.36-1.228,0.504-1.394s0.432-0.251,0.864-0.251c0.72,0,1.08,0.241,1.08,0.72c0,0.097-0.084,0.516-0.252,1.26   c-0.169,0.745-0.432,1.692-0.792,2.844c-0.36,1.152-0.732,2.136-1.116,2.952c-1.296,2.689-3.049,4.032-5.256,4.032   c-1.393,0-2.64-0.425-3.744-1.273c-1.104-0.85-1.848-2.123-2.232-3.822c-2.736,3.397-5.616,5.095-8.64,5.095   c-2.64,0-4.752-1.07-6.336-3.211C0.792,27.265,0,24.606,0,21.432z M5.04,24.583c0,1.578,0.285,3.034,0.854,4.371   c0.569,1.338,1.591,2.006,3.062,2.006c1.756,0,3.596-0.987,5.519-2.961c1.921-1.974,3.048-3.675,3.381-5.103l3.36-13.604   c0.144-0.427,0.216-0.737,0.216-0.928c0-1.665-0.452-3.199-1.356-4.603c-0.903-1.404-2.091-2.106-3.564-2.106   c-1.425,0-2.887,0.765-4.383,2.292c-1.496,1.529-2.695,3.416-3.598,5.66c-0.713,1.672-1.473,4.168-2.28,7.488   C5.444,20.417,5.04,22.912,5.04,24.583z",
    offset: {
        x: 1,
        y: 32
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 字符data: b
 */
define("char/data/character/b", [], {
    path: "M0,39.79c0-2.341,0.264-4.301,0.792-5.878L7.854,5.456l0.138-0.56c0.096-0.349,0.144-0.573,0.144-0.673   c0-0.299-0.048-0.523-0.144-0.673C7.896,3.401,7.571,3.263,7.02,3.139C6.468,3.015,5.64,2.952,4.536,2.952   c-1.152,0-1.728-0.255-1.728-0.766c0-0.418,0.083-0.731,0.252-0.94C3.228,1.036,3.408,0.909,3.6,0.861   C3.792,0.815,4.08,0.768,4.464,0.72l7.128-0.576C11.88,0.048,12.264,0,12.744,0c0.672,0,1.008,0.174,1.008,0.523   c0,0.117-0.072,0.306-0.216,0.567L8.444,21.384c2.706-2.16,5.268-3.24,7.684-3.24c2.41,0,4.489,0.975,6.236,2.923   c1.746,1.949,2.62,4.726,2.62,8.334c0,5.274-1.763,10.153-5.289,14.635C16.17,48.519,12.364,50.76,8.28,50.76   c-2.545,0-4.561-1.046-6.048-3.139C0.744,45.528,0,42.917,0,39.79z M4.032,42.019c0,2.51,0.426,4.318,1.281,5.425   s1.844,1.661,2.967,1.661c1.584,0,3.071-0.764,4.464-2.293c1.392-1.528,2.448-3.033,3.168-4.514   c1.008-2.197,1.932-5.039,2.772-8.526c0.839-3.486,1.26-6.018,1.26-7.595c0-1.576-0.3-3.033-0.9-4.371   c-0.601-1.336-1.62-2.006-3.06-2.006c-2.448,0-4.968,1.64-7.56,4.918c-0.673,0.841-1.201,1.861-1.584,3.057   C4.968,35.106,4.032,39.854,4.032,42.019z",
    offset: {
        x: 1,
        y: 14
    },
    box: "M 0 0 L 29 0 L 29 86 L 0 86 Z"
});
/**
 * 字符data: c
 */
define("char/data/character/c", [], {
    path: "M0,20.7c0-5.222,1.908-9.979,5.724-14.267C9.54,2.145,13.704,0,18.216,0c2.277,0,4.143,0.592,5.596,1.774   c1.454,1.184,2.181,2.667,2.181,4.453c0,1.286-0.364,2.322-1.094,3.107c-0.729,0.785-1.602,1.178-2.621,1.178   c-0.777,0-1.385-0.226-1.821-0.678C20.019,9.382,19.8,8.846,19.8,8.228c0-0.095,0.012-0.227,0.036-0.393   c0.024-0.167,0.098-0.429,0.22-0.787c0.121-0.356,0.291-0.678,0.51-0.964c0.218-0.286,0.581-0.559,1.092-0.821   c0.51-0.261,1.104-0.44,1.785-0.536c-0.774-2.047-2.492-3.071-5.154-3.071c-1.681,0-3.36,0.621-5.04,1.862   c-1.681,1.242-3.145,3.008-4.392,5.3c-0.913,1.719-1.776,4.13-2.593,7.233c-0.816,3.104-1.224,5.61-1.224,7.52   c0,2.2,0.479,3.982,1.44,5.346c0.959,1.364,2.376,2.044,4.248,2.044c0.818,0,1.745-0.083,2.781-0.25   c1.035-0.167,2.602-0.832,4.696-1.997s3.938-2.746,5.528-4.744c0.437-0.523,0.753-0.785,0.947-0.785   c0.291,0,0.559,0.144,0.802,0.432s0.364,0.529,0.364,0.72c0,0.48-0.592,1.344-1.772,2.592c-1.182,1.249-3.026,2.509-5.534,3.78   c-2.508,1.271-5.16,1.908-7.957,1.908c-3.168,0-5.724-1.095-7.668-3.286C0.972,27.14,0,24.263,0,20.7z",
    offset: {
        x: 1,
        y: 32
    },
    box: "M 0 0 L 31 0 L 31 86 L 0 86 Z"
});
/**
 * 字符data: d
 */
define("char/data/character/d", [], {
    path: "M0,39.575C0,34.35,1.763,29.471,5.29,24.94c3.525-4.53,7.294-6.796,11.304-6.796c2.609,0,4.566,1.387,5.872,4.162   l4.179-16.85l0.14-0.559C26.928,4.547,27,4.323,27,4.223c0-0.299-0.048-0.523-0.144-0.673c-0.097-0.149-0.42-0.287-0.972-0.412   c-0.553-0.124-1.38-0.187-2.484-0.187c-1.152,0-1.728-0.255-1.728-0.766c0-0.418,0.083-0.731,0.252-0.94   c0.167-0.209,0.348-0.336,0.54-0.384c0.191-0.046,0.479-0.093,0.864-0.142l7.128-0.576C30.744,0.048,31.128,0,31.608,0   c0.672,0,1.008,0.317,1.008,0.952c0,0.211-0.097,0.556-0.288,1.03L22.032,42.898C21.744,44.04,21.6,45.134,21.6,46.18   c0,1.95,0.651,2.924,1.955,2.924c1.771,0,3.375-2.835,4.813-8.507c0.191-0.763,0.36-1.228,0.504-1.394s0.432-0.251,0.864-0.251   c0.72,0,1.08,0.241,1.08,0.72c0,0.097-0.084,0.516-0.252,1.26c-0.167,0.745-0.431,1.692-0.791,2.844   c-0.36,1.152-0.731,2.136-1.114,2.952c-1.294,2.689-3.043,4.032-5.249,4.032c-1.388,0-2.631-0.425-3.731-1.273   c-1.1-0.85-1.842-2.123-2.224-3.822c-2.727,3.397-5.598,5.095-8.612,5.095c-2.68,0-4.824-1.07-6.432-3.211   C0.803,45.408,0,42.75,0,39.575z M5.04,42.727c0,1.578,0.285,3.034,0.854,4.371c0.569,1.338,1.591,2.006,3.062,2.006   c1.755,0,3.582-0.975,5.481-2.925c1.899-1.951,3.014-3.616,3.347-4.995l3.432-13.843c0.144-0.427,0.216-0.735,0.216-0.925   c0-1.518-0.476-3.035-1.428-4.553c-0.902-1.375-2.066-2.063-3.492-2.063c-1.425,0-2.887,0.765-4.383,2.292   c-1.496,1.529-2.695,3.416-3.598,5.66c-0.713,1.672-1.473,4.168-2.28,7.488C5.444,38.56,5.04,41.056,5.04,42.727z",
    offset: {
        x: 1,
        y: 14
    },
    box: "M 0 0 L 37 0 L 37 86 L 0 86 Z"
});
/**
 * 字符data: e
 */
define("char/data/character/e", [], {
    path: "M0,19.995c0-5.897,1.921-10.704,5.766-14.42S13.646,0,17.875,0c2.202,0,3.961,0.591,5.277,1.77   c1.316,1.179,1.976,2.636,1.976,4.368c0,0.24-0.012,0.492-0.036,0.755c-0.024,0.263-0.131,0.73-0.323,1.401   c-0.191,0.67-0.467,1.293-0.826,1.868c-0.359,0.575-0.933,1.186-1.721,1.833c-0.79,0.646-1.71,1.186-2.762,1.617   c-2.679,1.054-6.146,1.581-10.403,1.581H6.259c-0.813,3.154-1.219,5.782-1.219,7.884c0,1.195,0.119,2.319,0.359,3.37   c0.238,1.051,0.789,2.066,1.65,3.045c0.86,0.979,2.008,1.469,3.443,1.469c0.813,0,1.734-0.083,2.762-0.25s2.582-0.832,4.663-1.997   c2.081-1.166,3.91-2.746,5.49-4.744c0.43-0.523,0.74-0.785,0.933-0.785c0.286,0,0.549,0.144,0.789,0.432   c0.239,0.288,0.359,0.529,0.359,0.72c0,0.48-0.588,1.344-1.764,2.592c-1.177,1.249-3.013,2.509-5.508,3.78   c-2.496,1.271-5.137,1.908-7.92,1.908c-3.265,0-5.796-1.237-7.596-3.713C0.9,26.426,0,23.458,0,19.995z M6.689,13.536h1.505   c0.717,0,1.362-0.011,1.937-0.035c0.574-0.024,1.494-0.095,2.761-0.214c1.267-0.118,2.377-0.343,3.333-0.676   c0.957-0.332,1.947-0.758,2.976-1.28s1.817-1.245,2.367-2.17c0.549-0.925,0.825-1.98,0.825-3.166c0-1.233-0.407-2.263-1.22-3.094   c-0.812-0.83-1.911-1.245-3.297-1.245c-0.335,0-0.718,0.036-1.147,0.107c-0.431,0.072-1.16,0.32-2.187,0.747   c-1.028,0.427-1.972,1.02-2.833,1.778c-0.861,0.758-1.769,1.944-2.725,3.556C8.027,9.458,7.263,11.355,6.689,13.536z",
    offset: {
        x: 1,
        y: 31
    },
    box: "M 0 0 L 30 0 L 30 86 L 0 86 Z"
});
/**
 * 字符data: f
 */
define("char/data/character/f", [], {
    path: "M0,60.768c0-1.2,0.369-2.16,1.105-2.88c0.737-0.72,1.597-1.08,2.58-1.08c0.639,0,1.216,0.204,1.732,0.612   c0.515,0.407,0.774,0.972,0.774,1.692c0,0.815-0.284,1.559-0.848,2.232c-0.565,0.672-1.364,1.104-2.396,1.296   c0.639,0.816,1.621,1.224,2.949,1.224c1.717,0,3.039-2.041,3.967-6.12c0.578-2.079,1.252-5.075,2.024-8.989l5.229-26.795h-4.359   c-1.172,0-1.757-0.264-1.757-0.792c0-0.672,0.141-1.08,0.423-1.224c0.283-0.144,0.776-0.216,1.483-0.216h4.658l1.516-7.92   C20.725,3.936,23.87,0,28.516,0c1.621,0,3.033,0.42,4.237,1.26c1.204,0.84,1.807,2.005,1.807,3.492c0,1.2-0.369,2.16-1.105,2.88   c-0.738,0.72-1.598,1.08-2.58,1.08c-0.639,0-1.217-0.204-1.732-0.612c-0.517-0.407-0.773-0.972-0.773-1.692   c0-0.815,0.282-1.559,0.847-2.232c0.564-0.672,1.363-1.104,2.396-1.296c-0.738-0.816-1.77-1.224-3.096-1.224   c-0.838,0-1.552,0.639-2.143,1.917s-0.96,2.27-1.105,2.976c-0.146,0.707-0.356,1.718-0.629,3.037   c-0.523,2.254-1.221,5.635-2.092,10.143h5.412c0.463,0,0.798,0.013,1.006,0.036c0.208,0.025,0.382,0.108,0.521,0.252   c0.138,0.144,0.208,0.36,0.208,0.648c0,0.576-0.14,0.936-0.419,1.08c-0.278,0.144-0.769,0.216-1.466,0.216h-5.723l-5.633,27.311   c-0.293,1.413-0.576,2.777-0.851,4.096c-0.274,1.317-0.838,3.023-1.688,5.118c-0.852,2.094-1.976,3.79-3.371,5.088   c-1.396,1.298-2.945,1.947-4.647,1.947c-1.523,0-2.888-0.42-4.091-1.26C0.603,63.419,0,62.255,0,60.768z",
    offset: {
        x: -7,
        y: 12
    },
    box: "M 0 0 L 22 0 L 22 86 L 0 86 Z"
});
/**
 * 字符data: g
 */
define("char/data/character/g", [], {
    path: "M0,42.408c0-1.249,0.39-2.196,1.172-2.844c0.781-0.648,1.587-0.972,2.418-0.972c0.892,0,1.549,0.237,1.97,0.712   c0.421,0.475,0.632,0.997,0.632,1.566c0,0.617-0.224,1.246-0.67,1.887c-0.447,0.64-1.017,1.103-1.712,1.388   c1.333,0.522,3.086,0.783,5.259,0.783c2.604,0,4.851-1.121,6.746-3.361c0.946-1.146,1.609-2.194,1.988-3.147   c0.378-0.955,0.805-2.409,1.278-4.364l1.5-6.003c-2.542,2.514-5.085,3.771-7.626,3.771c-2.639,0-4.762-1.058-6.369-3.175   s-2.41-4.738-2.41-7.866c0-5.082,1.716-9.816,5.148-14.203C12.755,2.194,16.488,0,20.52,0c2.688,0,4.704,1.371,6.048,4.109   c0.144-0.891,0.504-1.547,1.08-1.97c0.576-0.422,1.152-0.633,1.728-0.633c1.296,0,1.944,0.624,1.944,1.87   c0,0.301-0.097,0.825-0.288,1.574l-7.848,31.393c-0.713,2.884-2.366,5.313-4.957,7.286c-2.591,1.97-5.692,2.956-9.306,2.956   C2.973,46.584,0,45.191,0,42.408z M9.216,23.936c0,0.43,0.035,0.884,0.107,1.361c0.071,0.478,0.212,1.135,0.426,1.97   c0.213,0.836,0.615,1.529,1.208,2.078c0.592,0.549,1.338,0.824,2.24,0.824c1.753,0,3.578-0.962,5.473-2.886   s3.009-3.575,3.341-4.954l3.282-13.124l0.244-0.977c0-0.286-0.06-0.726-0.179-1.322c-0.119-0.595-0.334-1.31-0.645-2.143   c-0.311-0.833-0.824-1.56-1.539-2.178S21.6,1.656,20.598,1.656c-1.337,0-2.731,0.681-4.188,2.042   c-1.456,1.361-2.637,3.045-3.543,5.05c-0.764,1.768-1.564,4.322-2.399,7.666C9.633,19.757,9.216,22.264,9.216,23.936z",
    offset: {
        x: -3,
        y: 31
    },
    box: "M 0 0 L 31 0 L 31 86 L 0 86 Z"
});
/**
 * 字符data: h
 */
define("char/data/character/h", [], {
    path: "M0,48.817c0-0.398,0.047-0.688,0.144-0.865L10.732,5.455l0.14-0.559c0.096-0.335,0.144-0.551,0.144-0.648   c0-0.288-0.048-0.504-0.144-0.648C10.775,3.456,10.451,3.324,9.9,3.204c-0.552-0.119-1.38-0.18-2.484-0.18   c-1.152,0-1.728-0.263-1.728-0.792c0-0.432,0.083-0.756,0.252-0.972c0.168-0.216,0.348-0.348,0.54-0.396   C6.671,0.816,6.959,0.768,7.344,0.72l7.128-0.576C14.76,0.048,15.144,0,15.624,0c0.672,0,1.008,0.225,1.008,0.674   c0,0.15-0.072,0.394-0.216,0.73L11.16,22.503c1.055-0.938,1.883-1.642,2.484-2.112c0.6-0.469,1.559-0.961,2.88-1.475   c1.32-0.514,2.724-0.772,4.212-0.772c2.111,0,3.888,0.58,5.328,1.738s2.16,3.09,2.16,5.792c0,2.914-1.465,8.24-4.392,15.978   c-0.864,2.581-1.296,4.372-1.296,5.374c0,1.386,0.528,2.078,1.584,2.078c2.688,0,4.919-2.979,6.696-8.937   c0.144-0.572,0.276-0.917,0.396-1.036c0.12-0.12,0.396-0.179,0.828-0.179c0.72,0,1.08,0.241,1.08,0.72   c0,0.144-0.097,0.576-0.288,1.296c-0.192,0.72-0.529,1.645-1.008,2.772c-0.48,1.128-1.057,2.208-1.728,3.24   c-0.673,1.033-1.548,1.92-2.628,2.664c-1.08,0.744-2.245,1.116-3.492,1.116c-1.681,0-3.013-0.557-3.996-1.67   c-0.984-1.114-1.476-2.494-1.476-4.141c0-1.051,0.384-2.579,1.152-4.586c2.783-7.929,4.176-13.206,4.176-15.834   c0-3.152-1.104-4.729-3.312-4.729c-3.543,0-6.728,2.214-9.551,6.642c-0.91,1.585-1.581,3.216-2.01,4.894   c-0.128,0.515-0.321,1.287-0.577,2.315s-0.454,1.822-0.592,2.383c-0.105,0.42-0.415,1.659-0.927,3.716   c-0.513,2.056-0.984,3.949-1.415,5.678c-0.431,1.729-0.687,2.757-0.768,3.083c-0.144,0.536-0.457,1.045-0.936,1.527   c-0.48,0.48-1.057,0.722-1.728,0.722c-0.625,0-1.116-0.2-1.476-0.597C0.18,49.764,0,49.315,0,48.817z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 36 0 L 36 86 L 0 86 Z"
});
/**
 * 字符data: i
 */
define("char/data/character/i", [], {
    path: "M0,26.496c0-0.144,0.096-0.576,0.288-1.296c0.191-0.72,0.527-1.644,1.008-2.772c0.479-1.127,1.055-2.207,1.728-3.24   c0.671-1.032,1.559-1.919,2.664-2.664c1.104-0.744,2.279-1.116,3.528-1.116c1.508,0,2.796,0.498,3.867,1.49   c1.07,0.993,1.605,2.435,1.605,4.322c0,0.991-0.313,2.313-0.936,3.964L9.144,37.493c-1.249,3.532-1.872,5.822-1.872,6.872   c0,1.336,0.527,2.004,1.584,2.004c2.832,0,5.063-2.979,6.696-8.937c0.144-0.572,0.276-0.917,0.396-1.036   c0.12-0.12,0.396-0.179,0.828-0.179c0.72,0,1.08,0.241,1.08,0.72c0,0.144-0.097,0.564-0.288,1.26   c-0.192,0.696-0.529,1.609-1.008,2.736c-0.48,1.128-1.044,2.221-1.692,3.276c-0.648,1.056-1.524,1.957-2.628,2.7   c-1.104,0.744-2.28,1.116-3.528,1.116c-1.776,0-3.132-0.582-4.068-1.744S3.24,43.762,3.24,42.212c0-0.95,0.432-2.589,1.296-4.917   c1.14-3.182,2.018-5.569,2.636-7.16l2.188-5.944c0.864-2.329,1.296-4.039,1.296-5.132c0-1.33-0.529-1.996-1.584-1.996   c-2.833,0-5.064,3.002-6.696,9.008c-0.144,0.524-0.288,0.846-0.432,0.965s-0.432,0.179-0.864,0.179C0.36,27.216,0,26.976,0,26.496z    M11.592,3.456c0-0.96,0.374-1.775,1.122-2.448C13.46,0.336,14.245,0,15.066,0c0.545,0,1.04,0.192,1.48,0.576   c0.441,0.384,0.662,0.984,0.662,1.8c0,0.961-0.335,1.776-1.005,2.448c-0.669,0.673-1.371,1.008-2.104,1.008   c-0.639,0-1.217-0.191-1.733-0.576C11.85,4.872,11.592,4.272,11.592,3.456z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 23 0 L 23 86 L 0 86 Z"
});
/**
 * 字符data: j
 */
define("char/data/character/j", [], {
    path: "M0,57.816c0-1.249,0.394-2.196,1.179-2.844C1.966,54.324,2.776,54,3.612,54c0.884,0,1.535,0.237,1.953,0.712   c0.417,0.475,0.626,0.997,0.626,1.566c0,0.236-0.049,0.534-0.147,0.89c-0.099,0.355-0.369,0.807-0.811,1.354   c-0.443,0.544-1.058,0.936-1.843,1.173c0.884,0.427,1.72,0.641,2.507,0.641c1.982,0,3.681-0.977,5.097-2.93   c1.415-1.953,2.406-4.097,2.974-6.43l6.84-27.428c0.383-1.33,0.576-2.542,0.576-3.634c0-1.9-0.648-2.851-1.944-2.851   c-3.216,0-6.024,2.979-8.424,8.937c-0.144,0.43-0.265,0.715-0.36,0.858c-0.097,0.143-0.205,0.238-0.324,0.286   c-0.121,0.047-0.349,0.071-0.684,0.071c-0.72,0-1.08-0.24-1.08-0.72c0-0.144,0.144-0.587,0.432-1.332   c0.288-0.744,0.744-1.667,1.368-2.772c0.623-1.104,1.355-2.171,2.196-3.204c0.839-1.032,1.872-1.919,3.096-2.664   c1.224-0.744,2.507-1.116,3.852-1.116c1.941,0,3.472,0.643,4.589,1.925c1.116,1.282,1.675,2.82,1.675,4.611   c0,0.891-0.168,1.708-0.504,2.45l-6.696,26.854c-0.761,3.008-2.363,5.551-4.807,7.629c-2.446,2.076-5.044,3.115-7.799,3.115   c-1.671,0-3.084-0.372-4.239-1.116C0.578,60.131,0,59.112,0,57.816z M22.32,3.456c0-0.864,0.368-1.656,1.104-2.376   C24.159,0.36,24.994,0,25.928,0c0.607,0,1.19,0.18,1.749,0.54c0.557,0.36,0.836,0.997,0.836,1.908c0,0.864-0.39,1.645-1.168,2.34   c-0.778,0.696-1.62,1.044-2.524,1.044c-0.785,0-1.397-0.252-1.838-0.756C22.541,4.572,22.32,4.032,22.32,3.456z",
    offset: {
        x: -7,
        y: 16
    },
    box: "M 0 0 L 26 0 L 26 86 L 0 86 Z"
});
/**
 * 字符data: k
 */
define("char/data/character/k", [], {
    path: "M0,48.817c0-0.398,0.072-0.688,0.216-0.865L10.804,5.455l0.14-0.559c0.047-0.349,0.072-0.573,0.072-0.673   c0-0.299-0.049-0.523-0.144-0.673C10.775,3.401,10.451,3.263,9.9,3.139C9.348,3.015,8.52,2.952,7.416,2.952   c-1.152,0-1.728-0.255-1.728-0.766c0-0.418,0.083-0.731,0.252-0.94c0.167-0.209,0.348-0.336,0.54-0.384   C6.671,0.815,6.959,0.768,7.344,0.72l7.128-0.576C14.76,0.048,15.144,0,15.624,0c0.671,0,1.008,0.272,1.008,0.816   c0,0.182-0.048,0.477-0.144,0.885L9.127,31.055c1.259-0.495,2.319-1.199,3.178-2.112c0.859-0.913,2.398-2.544,4.615-4.895   c3.341-3.936,6.443-5.904,9.307-5.904c1.505,0,2.646,0.445,3.423,1.332c0.776,0.889,1.166,1.885,1.166,2.988   c0,1.249-0.377,2.232-1.129,2.952c-0.753,0.72-1.591,1.08-2.513,1.08c-0.875,0-1.518-0.237-1.931-0.712   c-0.413-0.475-0.619-0.997-0.619-1.567c0-0.332,0.061-0.7,0.182-1.104s0.461-0.878,1.019-1.425c0.558-0.545,1.299-0.89,2.222-1.033   c-0.583-0.569-1.239-0.855-1.967-0.855c-1.141,0-2.316,0.384-3.528,1.15c-1.211,0.767-2.177,1.539-2.895,2.317   c-0.718,0.778-1.943,2.104-3.674,3.978c-2.016,2.302-3.72,3.883-5.112,4.745c6.239,0.911,9.36,3.404,9.36,7.478   c0,0.671-0.111,1.511-0.332,2.517c-0.355,1.918-0.532,3.26-0.532,4.027c0,2.061,0.686,3.092,2.056,3.092   c0.786,0,1.487-0.25,2.102-0.75c0.614-0.501,1.143-1.24,1.586-2.216c0.442-0.977,0.799-1.847,1.069-2.61   c0.27-0.763,0.554-1.739,0.848-2.931c0.194-0.763,0.364-1.228,0.51-1.394c0.145-0.167,0.437-0.251,0.874-0.251   c0.728,0,1.092,0.241,1.092,0.72c0,0.144-0.099,0.601-0.294,1.368c-0.196,0.769-0.514,1.753-0.955,2.952   c-0.441,1.201-0.907,2.208-1.396,3.024c-1.47,2.497-3.357,3.744-5.659,3.744c-1.537,0-2.898-0.581-4.083-1.739   c-1.187-1.159-1.78-2.923-1.78-5.291c0-0.821,0.096-1.644,0.288-2.466c0.144-0.677,0.216-1.281,0.216-1.813   c0-1.305-0.445-2.417-1.335-3.337c-0.891-0.919-1.829-1.573-2.814-1.959c-0.987-0.387-2.033-0.653-3.14-0.798L4.896,47.928   c-0.391,1.888-1.34,2.832-2.85,2.832c-0.635,0-1.134-0.2-1.499-0.597C0.182,49.764,0,49.315,0,48.817z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 字符data: l
 */
define("char/data/character/l", [], {
    path: "M0,44.216c0-0.703,0.144-1.618,0.432-2.744l8.934-36.02l0.138-0.561C9.6,4.556,9.648,4.341,9.648,4.245   c0-0.287-0.048-0.502-0.144-0.646C9.407,3.455,9.083,3.323,8.532,3.204c-0.552-0.119-1.38-0.18-2.484-0.18   c-1.152,0-1.728-0.263-1.728-0.792c0-0.432,0.083-0.756,0.252-0.972c0.168-0.216,0.348-0.348,0.54-0.396   C5.303,0.816,5.591,0.768,5.976,0.72l7.128-0.576C13.392,0.048,13.775,0,14.256,0c0.672,0,1.008,0.317,1.008,0.952   c0,0.211-0.072,0.556-0.216,1.03L4.824,42.608c-0.288,1.195-0.432,2.34-0.432,3.435c0,2.041,0.622,3.062,1.866,3.062   c1.77-0.239,3.301-3.011,4.593-8.316l0.452-1.8c0.144-0.023,0.479-0.036,1.008-0.036c0.72,0,1.08,0.241,1.08,0.72   c0,0.097-0.109,0.545-0.326,1.348c-0.217,0.803-0.493,1.811-0.828,3.024c-0.335,1.214-0.694,2.205-1.078,2.972   c-1.296,2.497-3,3.744-5.112,3.744c-1.728,0-3.168-0.619-4.32-1.854S0,46.107,0,44.216z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 20 0 L 20 86 L 0 86 Z"
});
/**
 * 字符data: m
 */
define("char/data/character/m", [], {
    path: "M0,11.088c0-0.096,0.096-0.516,0.288-1.26c0.191-0.744,0.479-1.715,0.864-2.916C1.536,5.713,1.919,4.68,2.304,3.816   C3.647,1.272,5.375,0,7.488,0c1.584,0,2.927,0.521,4.032,1.563c1.104,1.042,1.775,2.433,2.016,4.177   C16.319,1.914,19.751,0,23.832,0c1.919,0,3.6,0.497,5.04,1.487c1.44,0.992,2.279,2.625,2.52,4.897C34.272,2.129,37.872,0,42.192,0   c2.063,0,3.84,0.568,5.328,1.702c1.487,1.134,2.232,3.077,2.232,5.829c0,2.914-1.465,8.24-4.392,15.978   c-0.864,2.581-1.296,4.372-1.296,5.374c0,1.386,0.527,2.078,1.584,2.078c2.688,0,4.919-2.979,6.696-8.937   c0.144-0.572,0.276-0.917,0.396-1.036c0.12-0.12,0.396-0.179,0.828-0.179c0.72,0,1.08,0.241,1.08,0.72   c0,0.144-0.097,0.576-0.288,1.296c-0.192,0.72-0.529,1.645-1.008,2.772c-0.48,1.128-1.057,2.208-1.728,3.24   c-0.673,1.033-1.548,1.92-2.628,2.664c-1.08,0.744-2.245,1.116-3.492,1.116c-1.681,0-3.013-0.557-3.996-1.67   c-0.984-1.114-1.476-2.494-1.476-4.141c0-1.051,0.384-2.579,1.152-4.586C43.967,14.29,45.36,9.013,45.36,6.385   c0-3.152-1.104-4.729-3.312-4.729c-3.744,0-7.128,2.441-10.152,7.321c-0.529,0.858-1.128,2.485-1.8,4.88   c-0.139,0.567-0.334,1.357-0.583,2.372c-0.25,1.015-0.443,1.806-0.582,2.372l-2.868,11.68c-0.48,1.557-1.344,2.335-2.592,2.335   c-0.673,0-1.177-0.2-1.512-0.597c-0.336-0.398-0.504-0.847-0.504-1.346c0-0.223,0.072-0.536,0.216-0.937l4.68-18.72   C26.784,9.063,27,7.515,27,6.372c0-3.143-1.105-4.716-3.312-4.716c-3.744,0-7.128,2.441-10.152,7.321   c-0.529,0.858-1.128,2.485-1.8,4.88c-0.128,0.52-0.322,1.311-0.583,2.373c-0.261,1.062-0.455,1.852-0.582,2.371l-2.868,11.68   c-0.48,1.557-1.345,2.335-2.592,2.335c-0.673,0-1.177-0.2-1.512-0.597c-0.336-0.398-0.504-0.847-0.504-1.346   c0-0.223,0.072-0.536,0.216-0.937l5.4-21.6c0.335-1.329,0.504-2.539,0.504-3.631c0-1.899-0.625-2.849-1.872-2.849   c-1.056,0-1.956,0.715-2.7,2.146c-0.745,1.43-1.476,3.55-2.196,6.362c-0.192,0.763-0.349,1.229-0.468,1.395   c-0.121,0.167-0.421,0.25-0.9,0.25C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 59 0 L 59 86 L 0 86 Z"
});
/**
 * 字符data: n
 */
define("char/data/character/n", [], {
    path: "M0,11.088c0-0.096,0.096-0.516,0.288-1.26c0.191-0.744,0.479-1.715,0.864-2.916C1.536,5.713,1.919,4.68,2.304,3.816   C3.647,1.272,5.375,0,7.488,0c1.584,0,2.927,0.521,4.032,1.563c1.104,1.042,1.775,2.433,2.016,4.177   c0.479-0.727,1.067-1.452,1.764-2.179c0.695-0.727,1.847-1.502,3.456-2.326C20.364,0.412,22.056,0,23.832,0   c2.111,0,3.888,0.58,5.328,1.738c1.44,1.159,2.16,3.09,2.16,5.792c0,2.914-1.465,8.24-4.392,15.978   c-0.864,2.581-1.296,4.372-1.296,5.374c0,1.386,0.528,2.078,1.584,2.078c2.688,0,4.92-2.979,6.696-8.937   c0.144-0.572,0.275-0.917,0.396-1.036c0.119-0.12,0.396-0.179,0.828-0.179c0.72,0,1.08,0.241,1.08,0.72   c0,0.144-0.097,0.576-0.288,1.296c-0.192,0.72-0.528,1.645-1.008,2.772c-0.48,1.128-1.056,2.208-1.728,3.24   c-0.673,1.033-1.548,1.92-2.628,2.664c-1.08,0.744-2.245,1.116-3.492,1.116c-1.681,0-3.013-0.557-3.996-1.67   c-0.984-1.114-1.476-2.494-1.476-4.141c0-1.051,0.383-2.579,1.152-4.586c2.783-7.929,4.176-13.206,4.176-15.834   c0-3.152-1.104-4.729-3.312-4.729c-3.697,0-6.937,2.238-9.72,6.71c-0.817,1.266-1.537,3.096-2.16,5.491   c-0.128,0.52-0.322,1.311-0.583,2.373c-0.261,1.062-0.455,1.852-0.582,2.371l-2.868,11.68c-0.48,1.557-1.345,2.335-2.592,2.335   c-0.673,0-1.177-0.2-1.512-0.597c-0.336-0.398-0.504-0.847-0.504-1.346c0-0.223,0.072-0.536,0.216-0.937l5.4-21.6   c0.335-1.329,0.504-2.539,0.504-3.631c0-1.899-0.625-2.849-1.872-2.849c-1.056,0-1.956,0.715-2.7,2.146   c-0.745,1.43-1.476,3.55-2.196,6.362c-0.192,0.763-0.349,1.229-0.468,1.395c-0.121,0.167-0.421,0.25-0.9,0.25   C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 40 0 L 40 86 L 0 86 Z"
});
/**
 * 字符data: o
 */
define("char/data/character/o", [], {
    path: "M0,20.715c0-5.227,1.908-9.985,5.724-14.277C9.54,2.146,13.704,0,18.216,0c3.12,0,5.652,1.107,7.596,3.319   c1.944,2.212,2.916,5.049,2.916,8.512c0,5.227-1.908,9.997-5.724,14.313c-3.816,4.315-7.98,6.473-12.492,6.473   c-3.072,0-5.592-1.07-7.56-3.209C0.983,27.267,0,24.37,0,20.715z M5.04,23.58c0,2.437,0.528,4.275,1.584,5.517   c1.055,1.242,2.351,1.863,3.888,1.863c1.728,0,3.431-0.681,5.112-2.042c1.68-1.361,3.071-3.069,4.176-5.124   c1.055-2.006,1.967-4.537,2.736-7.595c0.767-3.057,1.152-5.445,1.152-7.164c0-2.148-0.493-3.916-1.476-5.302   c-0.984-1.385-2.34-2.078-4.068-2.078c-1.488,0-3.024,0.562-4.608,1.684s-3.024,2.735-4.32,4.836   C8.111,10.04,7.139,12.595,6.3,15.842C5.459,19.091,5.04,21.67,5.04,23.58z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 31 0 L 31 86 L 0 86 Z"
});
/**
 * 字符data: p
 */
define("char/data/character/p", [], {
    path: "M0,44.928c0-0.913,0.504-1.368,1.512-1.368c1.44-0.048,2.387-0.205,2.844-0.468c0.456-0.265,0.828-0.948,1.116-2.052   L13.68,8.06c0.335-1.327,0.504-2.513,0.504-3.557c0-1.896-0.625-2.846-1.872-2.846c-1.056,0-1.956,0.715-2.7,2.146   c-0.745,1.43-1.476,3.55-2.196,6.362c-0.192,0.763-0.349,1.229-0.468,1.395c-0.121,0.167-0.421,0.25-0.9,0.25   c-0.72,0-1.08-0.24-1.08-0.72c0-0.096,0.096-0.516,0.288-1.26C5.447,9.084,5.735,8.113,6.12,6.912   C6.504,5.713,6.887,4.68,7.272,3.816C8.615,1.272,10.343,0,12.456,0c1.199,0,2.387,0.377,3.564,1.128   c1.176,0.753,1.956,2.075,2.34,3.967C21.24,1.699,24.144,0,27.072,0c2.41,0,4.489,0.975,6.236,2.923   c1.746,1.949,2.62,4.726,2.62,8.334c0,5.322-1.763,10.213-5.289,14.671c-3.526,4.459-7.307,6.688-11.343,6.688   c-1.623,0-2.936-0.522-3.938-1.565c-1.002-1.044-1.694-2.115-2.076-3.213l-2.627,10.555c-0.529,2.368-0.792,3.66-0.792,3.875   c0,0.322,0.047,0.564,0.144,0.727c0.096,0.161,0.419,0.294,0.972,0.404c0.551,0.107,1.404,0.161,2.556,0.161   s1.728,0.288,1.728,0.864c0,0.911-0.457,1.368-1.368,1.368c-0.72,0-1.872-0.036-3.456-0.108c-1.584-0.072-2.761-0.108-3.528-0.108   c-0.673,0-1.692,0.036-3.06,0.108c-1.368,0.072-2.365,0.108-2.988,0.108C0.288,45.792,0,45.504,0,44.928z M14.328,23.812   c0,0.513,0.096,1.244,0.288,2.191c0.191,0.947,0.695,2.01,1.512,3.189c0.815,1.179,1.847,1.768,3.096,1.768   c1.584,0,3.071-0.764,4.464-2.293c1.392-1.528,2.448-3.033,3.168-4.514c1.008-2.197,1.932-5.039,2.772-8.526   c0.839-3.486,1.26-6.018,1.26-7.595c0-1.576-0.3-3.033-0.9-4.371c-0.601-1.336-1.62-2.006-3.06-2.006   c-1.825,0-3.697,0.91-5.616,2.728c-1.92,1.819-3.048,3.417-3.384,4.792l-3.376,13.561C14.402,23.352,14.328,23.711,14.328,23.812z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 39 0 L 39 86 L 0 86 Z"
});
/**
 * 字符data: q
 */
define("char/data/character/q", [], {
    path: "M0,21.432c0-5.226,1.762-10.104,5.285-14.635C8.809,2.266,12.574,0,16.582,0c2.87,0,4.926,1.556,6.17,4.666   c0.576-1.021,1.379-2.041,2.412-3.062c1.032-1.021,1.739-1.531,2.124-1.531c0.528,0,0.792,0.157,0.792,0.47   c0,0.115-0.097,0.299-0.288,0.556l-9.813,39.346l-0.123,0.489c-0.038,0.454-0.056,0.81-0.056,1.07c0,0.389,0.047,0.681,0.143,0.876   c0.096,0.194,0.418,0.355,0.97,0.486c0.55,0.129,1.399,0.194,2.548,0.194c1.149,0,1.724,0.288,1.724,0.864   c0,0.911-0.457,1.368-1.368,1.368c-0.765,0-1.96-0.036-3.585-0.108c-1.626-0.072-2.845-0.108-3.658-0.108   c-0.812,0-2.019,0.036-3.62,0.108c-1.601,0.072-2.783,0.108-3.548,0.108c-0.621,0-0.932-0.288-0.932-0.864   c0-0.625,0.141-1.008,0.423-1.152c0.282-0.144,0.707-0.216,1.272-0.216c2.211-0.048,3.554-0.241,4.025-0.576   c0.47-0.336,0.918-1.296,1.342-2.88l2.806-11.25c-2.595,2.509-5.096,3.762-7.502,3.762c-2.679,0-4.822-1.07-6.428-3.211   C0.803,27.265,0,24.606,0,21.432z M5.04,24.583c0,1.578,0.285,3.034,0.854,4.371c0.569,1.338,1.591,2.006,3.063,2.006   c1.756,0,3.584-0.973,5.483-2.921c1.899-1.946,3.015-3.609,3.348-4.986L21.24,9.216c0.191-0.428,0.288-0.737,0.288-0.927   c0-1.521-0.479-3.043-1.434-4.565c-0.909-1.378-2.08-2.068-3.513-2.068s-2.904,0.765-4.409,2.292   c-1.505,1.529-2.712,3.416-3.621,5.66c-0.716,1.672-1.481,4.168-2.294,7.488C5.446,20.417,5.04,22.912,5.04,24.583z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 31 0 L 31 86 L 0 86 Z"
});
/**
 * 字符data: r
 */
define("char/data/character/r", [], {
    path: "M0,11.088c0-0.096,0.096-0.516,0.288-1.26c0.191-0.744,0.479-1.715,0.864-2.916C1.536,5.713,1.919,4.68,2.304,3.816   C3.647,1.272,5.375,0,7.488,0c1.343,0,2.58,0.423,3.708,1.269c1.127,0.846,1.883,2.163,2.268,3.949C15.959,1.739,18.864,0,22.176,0   c1.715,0,3.342,0.353,4.886,1.054c1.542,0.702,2.314,1.876,2.314,3.522c0,1.235-0.394,2.172-1.18,2.813   c-0.786,0.642-1.598,0.962-2.432,0.962c-0.884,0-1.536-0.237-1.953-0.712c-0.418-0.475-0.626-0.997-0.626-1.567   c0-0.237,0.048-0.534,0.147-0.891c0.098-0.355,0.368-0.807,0.811-1.354c0.442-0.545,1.056-0.937,1.843-1.176   c-0.977-0.664-2.271-0.997-3.881-0.997c-1.152,0-2.268,0.31-3.348,0.927c-1.08,0.618-1.969,1.313-2.664,2.085   c-0.696,0.771-1.332,1.644-1.908,2.614c-0.576,0.971-0.961,1.678-1.152,2.119c-0.192,0.441-0.336,0.771-0.432,0.992L7.92,29.41   c-0.432,2.137-1.368,3.206-2.808,3.206c-0.673,0-1.177-0.192-1.512-0.576c-0.336-0.383-0.504-0.815-0.504-1.296   c0-0.24,0.072-0.576,0.216-1.008l5.4-21.6c0.335-1.329,0.504-2.539,0.504-3.631c0-1.899-0.625-2.849-1.872-2.849   c-1.056,0-1.956,0.715-2.7,2.146c-0.745,1.43-1.476,3.55-2.196,6.362c-0.192,0.763-0.349,1.229-0.468,1.395   c-0.121,0.167-0.421,0.25-0.9,0.25C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 32 0 L 32 86 L 0 86 Z"
});
/**
 * 字符data: s
 */
define("char/data/character/s", [], {
    path: "M0,25.632c0-1.487,0.377-2.604,1.131-3.348c0.753-0.744,1.617-1.116,2.588-1.116c0.775,0,1.382,0.215,1.818,0.643   c0.437,0.43,0.655,0.978,0.655,1.644c0,0.286-0.037,0.607-0.109,0.965c-0.073,0.358-0.413,0.846-1.019,1.465   c-0.608,0.62-1.468,0.978-2.584,1.072c0.869,2.668,3.186,4.003,6.953,4.003c1.392,0,2.664-0.203,3.816-0.609   c1.152-0.405,2.052-0.918,2.7-1.539c0.648-0.62,1.199-1.312,1.656-2.076c0.456-0.763,0.768-1.455,0.936-2.076   c0.167-0.621,0.252-1.193,0.252-1.719c0-0.907-0.168-1.682-0.504-2.327c-0.336-0.644-0.864-1.156-1.584-1.539   c-0.72-0.381-1.358-0.644-1.912-0.785c-0.553-0.142-1.361-0.35-2.421-0.622c-0.601-0.153-1.097-0.28-1.488-0.381   s-0.959-0.332-1.703-0.692c-0.745-0.36-1.332-0.767-1.764-1.224c-0.432-0.457-0.828-1.092-1.188-1.909   c-0.36-0.816-0.54-1.752-0.54-2.809c0-2.398,0.96-4.774,2.88-7.125C10.487,1.177,13.32,0,17.064,0c2.239,0,4.047,0.588,5.424,1.764   c1.376,1.177,2.064,2.628,2.064,4.356c0,1.393-0.31,2.401-0.928,3.024c-0.619,0.625-1.294,0.936-2.026,0.936   c-0.733,0-1.264-0.204-1.593-0.612c-0.329-0.407-0.493-0.875-0.493-1.404c0-0.528,0.223-1.116,0.669-1.764   c0.445-0.648,1.162-1.044,2.15-1.188c-0.665-2.304-2.445-3.456-5.339-3.456c-2.497,0-4.333,0.76-5.508,2.279   C10.307,5.454,9.72,6.878,9.72,8.208c0,0.961,0.261,1.741,0.785,2.34c0.524,0.601,1.036,0.997,1.538,1.188   c0.5,0.192,1.183,0.385,2.049,0.576c0.774,0.199,1.436,0.369,1.982,0.51s1.296,0.425,2.247,0.855   c0.95,0.43,1.712,0.908,2.288,1.433c0.575,0.527,1.088,1.254,1.538,2.186s0.676,1.995,0.676,3.188c0,0.771-0.121,1.625-0.359,2.563   c-0.239,0.938-0.681,1.986-1.324,3.141c-0.645,1.157-1.444,2.204-2.399,3.142c-0.956,0.938-2.245,1.721-3.868,2.347   c-1.623,0.625-3.461,0.938-5.514,0.938c-2.66,0-4.886-0.637-6.675-1.908C0.895,29.437,0,27.745,0,25.632z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 28 0 L 28 86 L 0 86 Z"
});
/**
 * 字符data: t
 */
define("char/data/character/t", [], {
    path: "M0,15.408c0-0.623,0.153-1.008,0.461-1.152c0.307-0.144,0.815-0.216,1.525-0.216h6.03l2.855-11.448   C11.351,0.864,12.287,0,13.68,0c1.296,0,1.944,0.524,1.944,1.571c0,0.283-0.097,0.706-0.288,1.269L12.542,14.04h5.859   c0.488,0,0.83,0.013,1.025,0.036c0.195,0.025,0.378,0.097,0.549,0.216c0.171,0.12,0.256,0.324,0.256,0.612   c0,0.625-0.159,1.008-0.475,1.152c-0.316,0.144-0.839,0.216-1.568,0.216h-6.203L6.768,37.187c-0.288,1.424-0.432,2.723-0.432,3.893   c0,2.086,0.644,3.129,1.933,3.129c1.813,0,3.423-0.906,4.832-2.717c1.409-1.811,2.542-3.836,3.402-6.077   c0.286-0.666,0.488-1.06,0.607-1.179c0.12-0.12,0.394-0.179,0.824-0.179c0.715,0,1.074,0.241,1.074,0.72   c0,0.144-0.144,0.576-0.432,1.296c-0.288,0.72-0.745,1.645-1.368,2.772c-0.625,1.128-1.344,2.208-2.16,3.24   c-0.816,1.033-1.848,1.92-3.096,2.664c-1.249,0.744-2.545,1.116-3.888,1.116c-1.825,0-3.301-0.63-4.428-1.889   c-1.128-1.26-1.692-2.811-1.692-4.651c0-0.655,0.119-1.451,0.36-2.389l5.154-20.664H1.776c-0.475,0-0.807-0.011-0.996-0.036   c-0.189-0.024-0.367-0.096-0.532-0.216C0.082,15.9,0,15.696,0,15.408z",
    offset: {
        x: 0,
        y: 20
    },
    box: "M 0 0 L 24 0 L 24 86 L 0 86 Z"
});
/**
 * 字符data: u
 */
define("char/data/character/u", [], {
    path: "M0,11.088c0-0.144,0.096-0.576,0.288-1.296c0.191-0.72,0.54-1.644,1.044-2.772c0.504-1.127,1.08-2.207,1.728-3.24   c0.648-1.032,1.523-1.919,2.628-2.664C6.792,0.373,7.967,0,9.216,0c1.584,0,2.891,0.534,3.924,1.599   c1.031,1.065,1.548,2.494,1.548,4.285c0,0.957-0.313,2.246-0.936,3.869c-2.784,7.546-4.176,12.776-4.176,15.69   c0,3.679,1.296,5.517,3.888,5.517c2.543,0,4.752-1.376,6.624-4.13c0.384-0.569,0.72-1.354,1.008-2.351l5.256-21.024   c0.432-1.775,1.368-2.664,2.808-2.664c0.671,0,1.175,0.199,1.512,0.597c0.335,0.398,0.504,0.845,0.504,1.342   c0,0.098-0.072,0.234-0.216,0.409l-5.184,20.731c-0.336,1.439-0.504,2.748-0.504,3.93c0,2.107,0.623,3.16,1.872,3.16   c1.775,0,3.384-2.835,4.824-8.507c0.191-0.763,0.36-1.228,0.504-1.394c0.144-0.167,0.432-0.251,0.864-0.251   c0.72,0,1.08,0.241,1.08,0.72c0,0.097-0.084,0.516-0.252,1.26c-0.169,0.745-0.432,1.692-0.792,2.844   c-0.36,1.152-0.732,2.136-1.116,2.952c-1.296,2.689-3.049,4.032-5.256,4.032c-2.88,0-4.8-1.459-5.76-4.378   c-2.304,2.919-4.968,4.378-7.992,4.378c-2.257,0-4.165-0.676-5.724-2.025c-1.561-1.35-2.34-3.473-2.34-6.367   c0-2.674,1.248-7.355,3.744-14.042c1.152-3.2,1.728-5.35,1.728-6.449c0-1.385-0.529-2.078-1.584-2.078   c-2.88,0-5.112,3.002-6.696,9.008c-0.144,0.524-0.288,0.846-0.432,0.965s-0.432,0.179-0.864,0.179C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 38 0 L 38 86 L 0 86 Z"
});
/**
 * 字符data: A
 */
define("char/data/character/ua", [], {
    path: "M0,50.544c0-0.624,0.263-1.008,0.792-1.152c0.527-0.144,1.188-0.227,1.98-0.252c0.792-0.023,1.811-0.503,3.06-1.439   c1.248-0.936,2.448-2.363,3.6-4.283L32.947,1.965c0.047-0.083,0.135-0.24,0.266-0.469c0.13-0.229,0.254-0.404,0.372-0.524   c0.118-0.119,0.26-0.275,0.426-0.468c0.166-0.191,0.354-0.324,0.567-0.396C34.791,0.036,35.016,0,35.252,0   c0.189,0,0.354,0.012,0.496,0.036c0.142,0.025,0.261,0.097,0.355,0.216c0.094,0.12,0.166,0.205,0.212,0.252   c0.047,0.048,0.095,0.168,0.142,0.36c0.047,0.192,0.071,0.313,0.071,0.36c0,0.048,0.023,0.192,0.071,0.432l0.025,0.36l3.046,44.712   c0.047,1.105,0.312,1.8,0.792,2.088c0.479,0.288,1.463,0.457,2.952,0.504c1.296,0,1.944,0.336,1.944,1.008   c0,0.817-0.48,1.224-1.44,1.224c-0.241,0-1.104-0.036-2.589-0.108c-1.486-0.072-3.083-0.108-4.789-0.108   c-1.613,0-3.031,0.012-4.252,0.036c-1.223,0.025-2.134,0.061-2.734,0.108c-0.601,0.048-0.948,0.072-1.044,0.072   c-0.72,0-1.08-0.335-1.08-1.008c0-0.479,0.191-0.816,0.576-1.008c0.384-0.191,0.852-0.275,1.404-0.252   c0.551,0.025,1.188-0.036,1.908-0.18c0.72-0.144,1.343-0.432,1.872-0.864c0.383-0.335,0.576-0.983,0.576-1.944   c0-0.288-0.03-0.868-0.089-1.738c-0.06-0.871-0.152-2.227-0.278-4.067s-0.25-3.673-0.374-5.499H16.386   c-0.279,0.488-0.673,1.18-1.183,2.076c-0.511,0.896-0.92,1.616-1.229,2.157c-0.309,0.542-0.636,1.115-0.98,1.719   c-0.344,0.605-0.617,1.084-0.819,1.439c-0.203,0.354-0.422,0.74-0.659,1.157c-0.238,0.417-0.405,0.756-0.5,1.017   c-0.097,0.261-0.205,0.536-0.324,0.823c-0.12,0.288-0.192,0.523-0.216,0.705c-0.025,0.183-0.036,0.378-0.036,0.586   c0,0.731,0.204,1.306,0.612,1.723c0.407,0.418,0.864,0.654,1.368,0.706s0.959,0.162,1.368,0.33   c0.407,0.169,0.612,0.421,0.612,0.756c0,0.913-0.48,1.368-1.44,1.368c-0.144,0-0.493-0.023-1.044-0.072   c-0.552-0.047-1.309-0.083-2.268-0.108c-0.961-0.023-1.992-0.036-3.096-0.036c-0.912,0-1.933,0.036-3.06,0.108   c-1.128,0.072-1.764,0.108-1.908,0.108C0.527,51.552,0,51.216,0,50.544z M17.615,32.832h15.263l-1.63-23.932L17.615,32.832z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 48 0 L 48 86 L 0 86 Z"
});
/**
 * 字符data: B
 */
define("char/data/character/ub", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   s1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.287-1.127,0.287-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.671-0.144-1.727-0.216-3.167-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.155,2.1,11.988,1.98   c-0.169-0.12-0.252-0.324-0.252-0.612c0-0.623,0.144-1.008,0.432-1.152S12.96,0,13.68,0h22.348c3.735,0,6.68,0.946,8.836,2.837   c2.154,1.891,3.232,4.201,3.232,6.929c0,2.876-1.26,5.633-3.78,8.27c-2.52,2.637-5.893,4.435-10.116,5.394   c2.832,0.337,5.208,1.375,7.128,3.109c1.919,1.736,2.88,4.025,2.88,6.869c0,3.888-1.856,7.488-5.567,10.8   c-3.71,3.312-8.047,4.968-13.01,4.968H1.8c-0.48,0-0.817-0.011-1.008-0.036c-0.192-0.023-0.373-0.096-0.54-0.216   C0.083,48.805,0,48.6,0,48.312z M12.963,45.127c-0.099,0.396-0.147,0.711-0.147,0.944s0.023,0.407,0.072,0.524   c0.047,0.117,0.24,0.204,0.576,0.262c0.335,0.059,0.864,0.087,1.584,0.087h8.928c3.792,0,7.02-1.5,9.684-4.5   c2.664-3,3.996-6.324,3.996-9.972c0-0.72-0.073-1.428-0.217-2.124c-0.144-0.695-0.42-1.548-0.829-2.556   c-0.408-1.008-1.141-1.824-2.198-2.448c-1.057-0.623-2.355-0.936-3.894-0.936H18.115L13.13,44.463   C13.117,44.51,13.062,44.731,12.963,45.127z M18.526,22.752h9.553c3.909,0,7.189-1.422,9.843-4.269s3.981-5.895,3.981-9.148   c0-0.718-0.073-1.411-0.217-2.081c-0.144-0.669-0.433-1.423-0.867-2.26s-1.144-1.506-2.132-2.008   c-0.988-0.501-2.18-0.753-3.578-0.753h-8.528c-1.253,0-2.085,0.11-2.494,0.328c-0.41,0.22-0.76,0.898-1.047,2.035L18.526,22.752z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 51 0 L 51 86 L 0 86 Z"
});
/**
 * 字符data: C
 */
define("char/data/character/uc", [], {
    path: "M0,33.12c0-5.472,1.487-10.8,4.462-15.984S11.274,7.8,15.975,4.68C20.677,1.56,25.45,0,30.296,0   c4.742,0,8.395,2.041,10.96,6.12l4.536-5.328C46.224,0.264,46.608,0,46.944,0c0.527,0,0.792,0.241,0.792,0.72   c0,0.288-0.048,0.625-0.144,1.008L43.2,19.224c-0.144,0.576-0.288,0.936-0.432,1.08s-0.432,0.216-0.864,0.216   c-0.72,0-1.08-0.239-1.08-0.72c0-0.047,0.023-0.312,0.072-0.792c0.047-0.479,0.108-1.068,0.18-1.764   c0.072-0.695,0.108-1.307,0.108-1.836c0-3.6-0.836-6.696-2.505-9.288c-1.669-2.592-4.271-3.888-7.805-3.888   c-2.887,0-5.87,0.853-8.949,2.556c-3.079,1.705-5.797,4.165-8.154,7.38c-2.55,3.504-4.45,7.584-5.701,12.24   c-1.251,4.656-1.876,8.473-1.876,11.448c0,4.752,1.214,8.316,3.644,10.692c2.43,2.376,5.353,3.564,8.77,3.564   c3.511,0,7.083-1.404,10.716-4.212c3.632-2.808,6.291-6.996,7.975-12.564c0.153-0.384,0.561-0.576,1.226-0.576   c0.766,0,1.15,0.241,1.15,0.72c0,1.008-0.509,2.496-1.526,4.464c-1.017,1.969-2.396,4.044-4.139,6.228   c-1.744,2.185-4.092,4.093-7.045,5.724c-2.954,1.631-6.077,2.448-9.369,2.448c-5.075,0-9.276-1.751-12.604-5.256   C1.663,43.584,0,38.928,0,33.12z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 字符data: D
 */
define("char/data/character/ud", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   s1.116-1.188,1.404-2.484l9.72-39.096c0.193-0.671,0.29-1.127,0.29-1.368c0-0.527-0.336-0.864-1.009-1.008S15.12,2.232,13.68,2.232   c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.155,2.1,11.988,1.98c-0.168-0.12-0.252-0.324-0.252-0.612   c0-0.623,0.144-1.008,0.432-1.152S12.96,0,13.68,0h22.583c4.637,0,8.332,1.632,11.085,4.896c2.754,3.265,4.131,7.513,4.131,12.744   c0,5.281-1.328,10.368-3.98,15.264s-6.114,8.833-10.382,11.808c-4.27,2.977-8.647,4.464-13.133,4.464H1.8   c-0.48,0-0.817-0.011-1.008-0.036c-0.192-0.023-0.373-0.096-0.54-0.216C0.083,48.805,0,48.6,0,48.312z M13.179,45.155   c-0.099,0.396-0.147,0.708-0.147,0.936c0,0.228,0.024,0.398,0.072,0.512c0.047,0.113,0.239,0.199,0.576,0.255   c0.335,0.057,0.864,0.085,1.584,0.085h7.416c5.52,0,10.32-2.376,14.4-7.128c2.688-3.168,4.727-7.344,6.12-12.528   c1.392-5.184,2.088-9.312,2.088-12.384c0-4.367-1.105-7.571-3.312-9.612c-2.208-2.04-4.945-3.06-8.208-3.06h-6.984   c-1.249,0-2.077,0.123-2.484,0.365c-0.408,0.244-0.756,0.919-1.044,2.026l-9.91,39.868C13.333,44.539,13.278,44.759,13.179,45.155z   ",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 54 0 L 54 86 L 0 86 Z"
});
/**
 * 字符data: E
 */
define("char/data/character/ue", [], {
    path: "M0,48.096c0-0.624,0.139-1.008,0.419-1.152s0.771-0.216,1.47-0.216c2.287,0,3.747-0.18,4.376-0.54S7.352,45,7.632,43.704   L17.28,5.117c0.191-0.721,0.288-1.274,0.288-1.659c0-0.288-0.048-0.505-0.144-0.649c-0.097-0.144-0.46-0.277-1.092-0.397   c-0.632-0.12-1.582-0.18-2.846-0.18c-0.563,0-0.949-0.011-1.159-0.036c-0.212-0.023-0.387-0.108-0.528-0.252s-0.21-0.36-0.21-0.648   c0-0.576,0.144-0.936,0.433-1.08C12.31,0.072,12.815,0,13.536,0h33.692c0.48,0,0.794,0.012,0.938,0.036   c0.145,0.024,0.336,0.097,0.577,0.216c0.241,0.121,0.325,0.3,0.253,0.54c-0.072,0.241-0.084,0.601-0.036,1.08l-1.655,12.744   c-0.049,0.48-0.097,0.817-0.145,1.008c-0.048,0.192-0.167,0.336-0.358,0.432C46.61,16.153,46.323,16.2,45.94,16.2   c-0.818,0-1.229-0.288-1.229-0.864c0-0.335,0.055-0.744,0.165-1.224c0.271-1.919,0.409-3.456,0.409-4.608   c0-2.688-0.66-4.572-1.98-5.652s-3.852-1.62-7.595-1.62h-8.999c-1.249,0-2.064,0.104-2.448,0.313   c-0.385,0.209-0.72,0.814-1.008,1.815l-4.507,18.032h5.878c2.854,0,4.825-0.456,5.914-1.368c1.089-0.911,1.995-2.688,2.723-5.328   c0.271-1.055,0.52-1.607,0.747-1.656c0.135-0.047,0.315-0.072,0.543-0.072c0.724,0,1.086,0.25,1.086,0.75   c0,0.167-0.025,0.438-0.072,0.811l-3.96,15.973c-0.143,0.67-0.286,1.097-0.428,1.277c-0.143,0.18-0.428,0.27-0.854,0.27   c-0.761,0-1.14-0.288-1.14-0.864c-0.019-0.096-0.001-0.247,0.053-0.452c0.054-0.206,0.087-0.332,0.099-0.379   c0.433-1.557,0.648-2.769,0.648-3.633c0-1.104-0.34-1.896-1.018-2.376c-0.677-0.479-2.157-0.72-4.44-0.72h-6.34l-4.843,19.378   c-0.011,0.047-0.066,0.268-0.166,0.663c-0.099,0.395-0.127,0.732-0.083,1.013c0.042,0.28,0.089,0.49,0.136,0.63   c0.047,0.141,0.238,0.247,0.571,0.316c0.333,0.069,0.857,0.104,1.573,0.104h8.716c2.239,0,4.192-0.216,5.859-0.648   c1.668-0.432,3.061-0.96,4.18-1.584c1.119-0.624,2.168-1.62,3.145-2.988c0.977-1.368,1.785-2.7,2.429-3.996   c0.644-1.296,1.441-3.096,2.394-5.4c0.339-0.815,0.581-1.307,0.727-1.476c0.145-0.167,0.411-0.252,0.798-0.252   c0.725,0,1.088,0.265,1.088,0.792c0,0.192-0.096,0.48-0.285,0.864l-6.368,15.768c-0.238,0.529-0.453,0.853-0.645,0.972   c-0.19,0.121-0.644,0.18-1.357,0.18H1.789c-0.477,0-0.811-0.011-1.002-0.036c-0.191-0.023-0.37-0.096-0.537-0.216   C0.083,48.589,0,48.384,0,48.096z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 字符data: F
 */
define("char/data/character/uf", [], {
    path: "M0,48.096c0-0.624,0.138-1.008,0.417-1.152c0.276-0.144,0.763-0.216,1.457-0.216c2.266,0,3.71-0.18,4.335-0.54   C6.831,45.828,7.282,45,7.56,43.704l9.648-38.587c0.191-0.721,0.288-1.274,0.288-1.659c0-0.288-0.048-0.505-0.144-0.649   c-0.097-0.144-0.458-0.277-1.085-0.397c-0.628-0.12-1.568-0.18-2.823-0.18c-0.558,0-0.942-0.011-1.151-0.036   c-0.209-0.023-0.382-0.108-0.522-0.252s-0.209-0.36-0.209-0.648c0-0.576,0.144-0.936,0.433-1.08C12.283,0.072,12.789,0,13.511,0   h32.851c0.481,0,0.794,0.012,0.938,0.036c0.144,0.024,0.337,0.097,0.578,0.216c0.241,0.121,0.325,0.3,0.253,0.54   c-0.072,0.241-0.084,0.601-0.036,1.08L46.44,14.616c-0.049,0.48-0.097,0.817-0.145,1.008c-0.048,0.192-0.167,0.336-0.358,0.432   c-0.191,0.097-0.479,0.144-0.861,0.144c-0.818,0-1.229-0.288-1.229-0.864l0.082-1.152c0.328-2.208,0.492-3.792,0.492-4.752   c0-2.64-0.627-4.5-1.879-5.58s-3.731-1.62-7.439-1.62h-8.452c-1.252,0-2.071,0.106-2.456,0.315   c-0.386,0.209-0.724,0.817-1.011,1.823l-4.741,18.958h5.669c2.858,0,4.82-0.468,5.887-1.404s1.938-2.772,2.617-5.508   c0.186-0.672,0.349-1.091,0.488-1.26c0.14-0.167,0.419-0.252,0.839-0.252c0.699,0,1.049,0.265,1.049,0.792   c0,0.288-0.048,0.625-0.142,1.008l-3.889,15.84c-0.188,0.673-0.353,1.08-0.494,1.224c-0.143,0.144-0.425,0.216-0.849,0.216   c-0.729,0-1.094-0.288-1.094-0.864c0-0.191,0.073-0.528,0.22-1.008c0.388-1.536,0.583-2.711,0.583-3.528   c0-1.055-0.342-1.824-1.021-2.304c-0.681-0.479-2.139-0.72-4.373-0.72h-6.049l-4.421,17.685c-0.192,0.83-0.288,1.411-0.288,1.741   c0,0.443,0.06,0.761,0.18,0.954c0.121,0.193,0.582,0.374,1.385,0.539c0.803,0.167,2.056,0.249,3.759,0.249h0.73   c0.486,0,0.827,0.012,1.021,0.036c0.195,0.024,0.377,0.097,0.548,0.216c0.17,0.12,0.255,0.324,0.255,0.612   c0,0.913-0.5,1.368-1.498,1.368c-1.047,0-2.678-0.036-4.89-0.108c-2.213-0.072-3.867-0.108-4.96-0.108   c-0.952,0-2.403,0.036-4.354,0.108c-1.951,0.072-3.402,0.108-4.354,0.108C0.333,48.96,0,48.672,0,48.096z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 字符data: G
 */
define("char/data/character/ug", [], {
    path: "M0,33.12c0-5.472,1.476-10.8,4.428-15.984S11.208,7.8,15.912,4.68C20.616,1.56,25.392,0,30.24,0   c4.704,0,8.327,2.041,10.872,6.12l4.536-5.328C46.08,0.264,46.464,0,46.8,0c0.527,0,0.792,0.241,0.792,0.72   c0,0.288-0.048,0.625-0.144,1.008l-4.392,17.496c-0.144,0.576-0.288,0.936-0.432,1.08s-0.432,0.216-0.864,0.216   c-0.72,0-1.08-0.239-1.08-0.72c0-0.047,0.023-0.312,0.072-0.792c0.047-0.479,0.108-1.068,0.18-1.764   c0.072-0.695,0.108-1.307,0.108-1.836c0-3.6-0.828-6.696-2.484-9.288c-1.656-2.592-4.237-3.888-7.74-3.888   c-2.88,0-5.857,0.853-8.928,2.556c-3.072,1.705-5.785,4.165-8.136,7.38c-2.592,3.553-4.5,7.644-5.724,12.276   c-1.224,4.633-1.836,8.413-1.836,11.34c0,4.561,1.211,8.089,3.636,10.584c2.423,2.497,5.459,3.744,9.108,3.744   c3.84,0,7.104-1.224,9.792-3.672c1.055-0.96,1.764-1.883,2.124-2.772c0.36-0.888,0.947-3.036,1.764-6.444   c0.384-1.343,0.576-2.16,0.576-2.448c0-0.335-0.084-0.587-0.252-0.756c-0.169-0.167-0.36-0.275-0.576-0.324   c-0.216-0.047-0.637-0.119-1.26-0.216c-1.249-0.096-2.28-0.144-3.096-0.144h-0.576c-1.249,0-1.872-0.263-1.872-0.792   c0-0.96,0.504-1.44,1.512-1.44c1.008,0,2.567,0.036,4.68,0.108c2.112,0.072,3.696,0.108,4.752,0.108   c0.767,0,1.944-0.036,3.528-0.108c1.584-0.072,2.736-0.108,3.456-0.108c0.623,0,0.936,0.313,0.936,0.936   c0,0.576-0.144,0.936-0.432,1.08s-0.72,0.216-1.296,0.216c-1.008,0-1.776,0.097-2.304,0.288c-0.529,0.192-0.853,0.421-0.972,0.684   c-0.121,0.265-0.277,0.732-0.468,1.404l-3.456,13.752c-0.241,0.816-0.529,1.224-0.864,1.224c-0.385,0-0.9-0.479-1.548-1.44   c-0.648-0.959-1.141-1.919-1.476-2.88c-1.201,1.537-3.073,2.916-5.616,4.14c-2.545,1.224-5.328,1.836-8.352,1.836   c-5.184,0-9.421-1.764-12.708-5.292C1.644,43.524,0,38.88,0,33.12z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 字符data: H
 */
define("char/data/character/uh", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152s0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   c0.648-0.36,1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.288-1.127,0.288-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.673-0.144-1.728-0.216-3.168-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.156,2.1,11.988,1.98   c-0.169-0.12-0.252-0.324-0.252-0.612C11.736,0.457,12.192,0,13.104,0c0.912,0,2.34,0.036,4.284,0.108   c1.944,0.072,3.395,0.108,4.356,0.108c0.959,0,2.387-0.036,4.284-0.108C27.924,0.036,29.328,0,30.24,0   c0.671,0,1.008,0.313,1.008,0.936c0,0.576-0.144,0.936-0.432,1.08c-0.288,0.144-0.864,0.216-1.728,0.216   c-2.208,0-3.636,0.15-4.284,0.452c-0.648,0.301-1.116,0.953-1.404,1.957l-4.43,17.823h19.845L43.2,4.824   c0.191-0.671,0.288-1.127,0.288-1.368c0-0.527-0.336-0.864-1.008-1.008c-0.672-0.144-1.728-0.216-3.168-0.216   c-0.529,0-0.9-0.011-1.116-0.036C37.98,2.172,37.788,2.1,37.62,1.98c-0.169-0.12-0.252-0.324-0.252-0.612   C37.368,0.457,37.824,0,38.736,0c0.911,0,2.34,0.036,4.284,0.108c1.944,0.072,3.396,0.108,4.356,0.108   c0.96,0,2.387-0.036,4.284-0.108C53.556,0.036,54.96,0,55.872,0c0.672,0,1.008,0.313,1.008,0.936c0,0.576-0.144,0.936-0.432,1.08   s-0.864,0.216-1.728,0.216c-2.208,0-3.636,0.15-4.284,0.452c-0.648,0.301-1.116,0.953-1.404,1.957l-9.72,39.097   c-0.192,0.802-0.288,1.417-0.288,1.844c0,0.32,0.047,0.561,0.144,0.721c0.096,0.161,0.468,0.308,1.116,0.441   c0.648,0.134,1.62,0.2,2.916,0.2c0.576,0,0.972,0.012,1.188,0.036c0.216,0.024,0.396,0.108,0.54,0.252s0.216,0.36,0.216,0.648   c0,0.864-0.457,1.296-1.368,1.296c-0.913,0-2.34-0.036-4.284-0.108c-1.944-0.072-3.396-0.108-4.356-0.108   c-0.961,0-2.389,0.036-4.284,0.108c-1.896,0.072-3.301,0.108-4.212,0.108c-0.673,0-1.008-0.288-1.008-0.864   c0-0.624,0.144-1.008,0.432-1.152c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54s1.116-1.188,1.404-2.484   l4.78-19.224H18.415L13.68,43.739c-0.192,0.809-0.288,1.386-0.288,1.732s0.047,0.606,0.144,0.78   c0.096,0.173,0.468,0.333,1.116,0.477c0.648,0.144,1.62,0.216,2.916,0.216c0.576,0,0.972,0.012,1.188,0.036   c0.216,0.024,0.396,0.108,0.54,0.252c0.144,0.144,0.216,0.36,0.216,0.648c0,0.864-0.457,1.296-1.368,1.296   c-0.912,0-2.34-0.036-4.284-0.108c-1.944-0.072-3.396-0.108-4.356-0.108c-0.96,0-2.388,0.036-4.284,0.108   c-1.897,0.072-3.301,0.108-4.212,0.108C0.335,49.176,0,48.888,0,48.312z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 60 0 L 60 86 L 0 86 Z"
});
/**
 * 字符data: I
 */
define("char/data/character/ui", [], {
    path: "M0,48.24c0-0.576,0.145-0.936,0.433-1.08s0.864-0.216,1.728-0.216c2.352,0,3.876-0.18,4.572-0.54   c0.695-0.36,1.188-1.163,1.476-2.412L18,4.828c0.145-0.432,0.217-0.889,0.217-1.37c0-0.529-0.36-0.865-1.08-1.009   c-0.721-0.144-1.872-0.217-3.456-0.217c-0.576,0-0.973-0.011-1.188-0.036c-0.216-0.023-0.396-0.108-0.54-0.252   c-0.144-0.144-0.216-0.36-0.216-0.648C11.736,0.432,12.192,0,13.104,0c1.008,0,2.52,0.036,4.536,0.108   c2.016,0.072,3.503,0.108,4.464,0.108c1.008,0,2.495-0.036,4.464-0.108C28.536,0.036,30,0,30.961,0   c0.671,0,1.008,0.288,1.008,0.864c0,0.625-0.156,1.008-0.469,1.152s-0.899,0.216-1.764,0.216c-2.353,0-3.864,0.165-4.536,0.496   c-0.673,0.331-1.151,1.07-1.439,2.215L14.04,43.817c-0.192,0.782-0.287,1.355-0.287,1.72c0,0.364,0.047,0.625,0.144,0.782   c0.096,0.156,0.491,0.299,1.188,0.43c0.694,0.131,1.739,0.195,3.132,0.195c0.576,0,0.972,0.012,1.188,0.036   c0.216,0.024,0.407,0.097,0.576,0.216c0.168,0.12,0.252,0.324,0.252,0.612c0,0.913-0.48,1.368-1.439,1.368   c-0.961,0-2.438-0.036-4.429-0.108c-1.992-0.072-3.492-0.108-4.5-0.108S7.368,48.996,5.4,49.068   c-1.969,0.072-3.433,0.108-4.392,0.108C0.336,49.176,0,48.864,0,48.24z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 字符data: J
 */
define("char/data/character/uj", [], {
    path: "M0,42.984c0-1.055,0.149-1.956,0.45-2.7c0.299-0.744,0.635-1.296,1.004-1.656c0.369-0.36,0.795-0.636,1.28-0.828   c0.483-0.191,0.83-0.299,1.037-0.324c0.207-0.023,0.38-0.036,0.52-0.036c0.784,0,1.454,0.252,2.007,0.756   c0.553,0.504,0.83,1.188,0.83,2.052c0,1.008-0.381,1.969-1.142,2.88c-0.761,0.912-1.765,1.368-3.01,1.368   c-0.417,0-0.669-0.023-0.762-0.072c0.289,1.418,1.001,2.554,2.136,3.404c1.134,0.851,2.451,1.276,3.947,1.276   c1.931,0,3.813-1.036,5.648-3.111c1.834-2.073,3.114-4.492,3.838-7.257l8.352-33.547c0.191-0.673,0.288-1.153,0.288-1.442   c0-0.48-0.133-0.793-0.396-0.937c-0.264-0.144-0.853-0.289-1.764-0.433C23.4,2.28,22.295,2.232,20.952,2.232h-0.864   c-0.48,0-0.817-0.011-1.008-0.036C18.888,2.172,18.708,2.1,18.54,1.98c-0.169-0.12-0.252-0.324-0.252-0.612   C18.288,0.457,18.792,0,19.8,0c1.055,0,2.675,0.036,4.86,0.108c2.184,0.072,3.827,0.108,4.932,0.108   c0.816,0,2.063-0.036,3.744-0.108C35.016,0.036,36.24,0,37.008,0c0.672,0,1.008,0.288,1.008,0.864c0,0.625-0.144,1.008-0.432,1.152   s-0.769,0.216-1.44,0.216c-1.537,0-2.568,0.161-3.096,0.481c-0.529,0.322-0.912,0.986-1.152,1.995l-8.424,33.834   c-0.817,3.386-2.677,6.268-5.58,8.647c-2.905,2.379-6.037,3.57-9.396,3.57c-2.401,0-4.417-0.708-6.048-2.124   C0.815,47.221,0,45.336,0,42.984z",
    offset: {
        x: -6,
        y: 14
    },
    box: "M 0 0 L 34 0 L 34 86 L 0 86 Z"
});
/**
 * 字符data: K
 */
define("char/data/character/uk", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152s0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   c0.648-0.36,1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.288-1.127,0.288-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.673-0.144-1.728-0.216-3.168-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.156,2.1,11.988,1.98   c-0.169-0.12-0.252-0.324-0.252-0.612C11.736,0.457,12.192,0,13.104,0c0.912,0,2.34,0.036,4.284,0.108   c1.944,0.072,3.395,0.108,4.356,0.108c0.959,0,2.387-0.036,4.284-0.108C27.924,0.036,29.328,0,30.24,0   c0.671,0,1.008,0.313,1.008,0.936c0,0.576-0.144,0.936-0.432,1.08c-0.288,0.144-0.864,0.216-1.728,0.216   c-2.208,0-3.636,0.133-4.284,0.396S23.688,3.462,23.4,4.342l-5.896,23.911l25.55-21.269c1.61-1.296,2.416-2.4,2.416-3.312   c0-0.864-0.633-1.343-1.9-1.44c-0.68,0-1.02-0.288-1.02-0.864C42.55,0.457,43.012,0,43.938,0c0.828,0,2.107,0.036,3.835,0.108   c1.728,0.072,3.024,0.108,3.888,0.108c0.576,0,1.428-0.036,2.556-0.108C55.345,0.036,56.148,0,56.629,0   c0.528,0,0.792,0.288,0.792,0.864c0,0.817-0.432,1.272-1.296,1.368c-3.12,0.288-6.888,2.257-11.304,5.904L31.433,19.237   l9.434,24.898c0.432,1.105,0.936,1.836,1.512,2.196c0.576,0.36,1.512,0.565,2.808,0.612c0.864,0,1.296,0.288,1.296,0.864   c0,0.913-0.408,1.368-1.224,1.368c-0.673,0-1.75-0.036-3.232-0.108c-1.483-0.072-2.579-0.108-3.287-0.108   c-0.898,0-2.239,0.036-4.023,0.108c-1.784,0.072-3.108,0.108-3.972,0.108c-0.673,0-1.008-0.312-1.008-0.936   c0-0.864,0.456-1.296,1.368-1.296c2.444,0,3.666-0.792,3.666-2.376c0-0.24-0.142-0.72-0.425-1.44l-7.49-20.095L16.72,31.435   l-2.392,9.699c-0.625,2.494-0.936,3.98-0.936,4.457c0,0.319,0.047,0.558,0.144,0.717c0.096,0.16,0.468,0.305,1.116,0.438   c0.648,0.133,1.62,0.199,2.916,0.199c0.576,0,0.972,0.012,1.188,0.036c0.216,0.024,0.396,0.108,0.54,0.252   c0.144,0.144,0.216,0.36,0.216,0.648c0,0.864-0.457,1.296-1.368,1.296c-0.912,0-2.34-0.036-4.284-0.108   c-1.944-0.072-3.396-0.108-4.356-0.108c-0.96,0-2.388,0.036-4.284,0.108c-1.897,0.072-3.301,0.108-4.212,0.108   C0.335,49.176,0,48.888,0,48.312z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 60 0 L 60 86 L 0 86 Z"
});
/**
 * 字符data: L
 */
define("char/data/character/ul", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152s0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   c0.648-0.36,1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.288-1.127,0.288-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.673-0.144-1.728-0.216-3.168-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.156,2.1,11.988,1.98   c-0.169-0.12-0.252-0.324-0.252-0.612C11.736,0.457,12.192,0,13.104,0c0.96,0,2.423,0.036,4.392,0.108   c1.968,0.072,3.456,0.108,4.464,0.108c1.104,0,2.772-0.036,5.004-0.108C29.196,0.036,30.84,0,31.896,0   c0.72,0,1.08,0.288,1.08,0.864c0,0.625-0.144,1.008-0.432,1.152c-0.288,0.144-0.816,0.216-1.584,0.216h-0.72   c-2.785,0-4.548,0.171-5.292,0.511c-0.745,0.341-1.285,1.072-1.62,2.192L13.562,44.22c-0.011,0.047-0.066,0.269-0.166,0.665   c-0.099,0.396-0.148,0.733-0.148,1.012c0,0.279,0.024,0.488,0.072,0.628c0.047,0.139,0.239,0.244,0.576,0.314   c0.335,0.069,0.864,0.104,1.584,0.104h5.832c2.16,0,4.104-0.335,5.832-1.008c1.728-0.671,3.12-1.427,4.176-2.268   c1.055-0.839,2.063-2.04,3.024-3.6c0.959-1.56,1.631-2.831,2.016-3.813c0.385-0.981,0.917-2.342,1.597-4.084   c0.279-0.713,0.478-1.154,0.599-1.321c0.119-0.167,0.396-0.251,0.828-0.251c0.72,0,1.08-0.161,1.08-0.485l-0.144,0.412   c-0.114,0.272-0.17,0.432-0.17,0.477l-5.446,15.611c-0.241,1.233-0.457,1.969-0.648,2.206c-0.192,0.237-0.673,0.355-1.44,0.355H1.8   c-0.48,0-0.817-0.011-1.008-0.036c-0.192-0.023-0.372-0.096-0.54-0.216C0.083,48.805,0,48.6,0,48.312z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 43 0 L 43 86 L 0 86 Z"
});
/**
 * 字符data: M
 */
define("char/data/character/um", [], {
    path: "M0,48.312c0-0.912,0.456-1.368,1.368-1.368c1.872-0.096,3.384-0.492,4.536-1.188c1.152-0.695,1.968-1.98,2.448-3.852   l9.216-37.08c0.192-0.671,0.289-1.127,0.289-1.368c0-0.527-0.336-0.864-1.009-1.008S15.12,2.232,13.68,2.232   c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.156,2.1,11.988,1.98c-0.169-0.12-0.252-0.324-0.252-0.612   c0-0.623,0.144-1.008,0.432-1.152S12.96,0,13.68,0h9.587c0.914,0,1.467,0.072,1.66,0.216s0.313,0.601,0.361,1.368l4.066,40.392   L53.784,1.293c0.383-0.623,0.708-0.995,0.972-1.114C55.02,0.061,55.559,0,56.376,0h9.216c0.479,0,0.828,0.012,1.044,0.036   c0.216,0.025,0.396,0.108,0.54,0.252c0.144,0.144,0.216,0.36,0.216,0.648c0,0.576-0.144,0.936-0.432,1.08s-0.864,0.216-1.728,0.216   c-2.208,0-3.636,0.152-4.284,0.453C60.3,2.987,59.832,3.64,59.544,4.646l-9.72,39.026c-0.192,0.818-0.288,1.444-0.288,1.881   c0,0.328,0.047,0.573,0.144,0.736c0.096,0.164,0.468,0.314,1.116,0.45c0.648,0.137,1.62,0.205,2.916,0.205   c0.576,0,0.972,0.012,1.188,0.036c0.216,0.024,0.396,0.108,0.54,0.252s0.216,0.36,0.216,0.648c0,0.864-0.457,1.296-1.368,1.296   c-0.864,0-2.245-0.036-4.14-0.108c-1.896-0.072-3.301-0.108-4.212-0.108c-0.913,0-2.293,0.036-4.14,0.108   c-1.848,0.072-3.204,0.108-4.068,0.108c-0.673,0-1.008-0.288-1.008-0.864c0-0.624,0.144-1.008,0.432-1.152   c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54s1.116-1.188,1.404-2.484L54.72,3.163l-0.072-0.091   l-26.856,44.72c-0.48,0.922-1.056,1.384-1.727,1.384c-0.336,0-0.588-0.072-0.756-0.216c-0.168-0.144-0.277-0.299-0.324-0.468   c-0.048-0.167-0.097-0.515-0.144-1.044L20.448,3.816l-0.072-0.145L10.8,41.903c-0.192,0.791-0.288,1.408-0.288,1.853   c0,0.396,0.036,0.73,0.108,1.001c0.072,0.272,0.227,0.581,0.468,0.927c0.24,0.347,0.672,0.63,1.296,0.853   c0.623,0.223,1.415,0.357,2.376,0.407c0.911,0,1.368,0.313,1.368,0.936c0,0.864-0.432,1.296-1.296,1.296   c-0.72,0-1.884-0.036-3.492-0.108c-1.608-0.072-2.796-0.108-3.564-0.108c-0.768,0-1.92,0.036-3.456,0.108   c-1.537,0.072-2.664,0.108-3.384,0.108C0.312,49.176,0,48.888,0,48.312z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 71 0 L 71 86 L 0 86 Z"
});
/**
 * 字符data: N
 */
define("char/data/character/un", [], {
    path: "M0,48.312c0-0.912,0.456-1.368,1.368-1.368c3.839-0.144,6.167-1.824,6.984-5.04l9.504-38.156   C18,3.267,18.073,2.954,18.073,2.81c0-0.385-1.465-0.578-4.393-0.578c-0.529,0-0.9-0.011-1.116-0.036   C12.348,2.172,12.156,2.1,11.988,1.98c-0.169-0.12-0.252-0.324-0.252-0.612c0-0.623,0.144-1.008,0.432-1.152   C12.456,0.072,12.96,0,13.68,0h9.022c0.772,0,1.242,0.061,1.411,0.18c0.169,0.121,0.374,0.468,0.615,1.044l13.466,37.44   L46.08,7.056c0.191-0.767,0.288-1.343,0.288-1.728c0-1.967-1.44-2.999-4.32-3.096c-0.864,0-1.296-0.288-1.296-0.864   C40.752,0.457,41.184,0,42.048,0c0.72,0,1.872,0.036,3.456,0.108c1.584,0.072,2.76,0.108,3.528,0.108   c0.767,0,1.932-0.036,3.492-0.108C54.083,0.036,55.224,0,55.944,0c0.623,0,0.936,0.313,0.936,0.936c0,0.864-0.36,1.296-1.08,1.296   c-4.081,0.134-6.505,1.644-7.272,4.529l-10.08,40.705c-0.192,0.741-0.373,1.211-0.54,1.411c-0.169,0.2-0.468,0.299-0.9,0.299   c-0.481,0-0.793-0.06-0.938-0.18c-0.144-0.119-0.313-0.468-0.504-1.044L20.088,4.916L10.8,41.908   c-0.192,0.79-0.288,1.407-0.288,1.852c0,0.395,0.036,0.728,0.108,0.999c0.072,0.272,0.227,0.581,0.468,0.926   c0.24,0.346,0.672,0.63,1.296,0.852c0.623,0.223,1.415,0.357,2.376,0.407c0.911,0,1.368,0.313,1.368,0.936   c0,0.864-0.432,1.296-1.296,1.296c-0.72,0-1.884-0.036-3.492-0.108c-1.609-0.072-2.797-0.108-3.564-0.108   c-0.769,0-1.92,0.036-3.456,0.108c-1.537,0.072-2.664,0.108-3.384,0.108C0.312,49.176,0,48.888,0,48.312z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 59 0 L 59 86 L 0 86 Z"
});
/**
 * 字符data: O
 */
define("char/data/character/uo", [], {
    path: "M0,33.718c0-5.416,1.429-10.747,4.288-15.997c2.857-5.248,6.605-9.514,11.24-12.797C20.163,1.642,24.883,0,29.687,0   c4.718,0,8.641,1.684,11.771,5.051c3.13,3.367,4.695,7.917,4.695,13.647c0,5.632-1.454,11.071-4.359,16.318   c-2.907,5.247-6.641,9.447-11.204,12.599c-4.563,3.151-9.223,4.729-13.978,4.729c-4.912,0-8.908-1.732-11.989-5.197   C1.541,43.681,0,39.205,0,33.718z M6.552,35.957c0,4.333,0.945,7.835,2.837,10.507c1.892,2.672,4.466,4.007,7.724,4.007   c2.778,0,5.651-1.071,8.621-3.213c2.97-2.142,5.58-5.164,7.832-9.063c1.867-3.226,3.401-6.98,4.598-11.266   c1.197-4.284,1.797-8.04,1.797-11.265c0-4.573-1.042-8.052-3.125-10.435s-4.634-3.575-7.651-3.575   c-3.067,0-6.108,1.132-9.125,3.394c-3.018,2.264-5.508,5.151-7.472,8.666c-2.203,3.852-3.76,7.884-4.67,12.096   C7.007,30.024,6.552,33.405,6.552,35.957z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 字符data: P
 */
define("char/data/character/up", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   s1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.287-1.127,0.287-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.671-0.144-1.727-0.216-3.167-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.155,2.1,11.988,1.98   c-0.168-0.12-0.252-0.324-0.252-0.612c0-0.623,0.144-1.008,0.432-1.152S12.96,0,13.68,0h21.517c3.82,0,6.889,1.008,9.207,3.024   c2.317,2.016,3.476,4.561,3.476,7.632c0,4.129-1.971,7.789-5.913,10.98c-3.942,3.193-8.243,4.788-12.905,4.788H17.886L13.68,43.739   c-0.192,0.809-0.288,1.386-0.288,1.732s0.047,0.606,0.144,0.78c0.096,0.173,0.468,0.333,1.116,0.477   c0.648,0.144,1.62,0.216,2.916,0.216c0.576,0,0.972,0.012,1.188,0.036c0.216,0.024,0.396,0.108,0.54,0.252s0.216,0.36,0.216,0.648   c0,0.864-0.457,1.296-1.368,1.296c-0.913,0-2.34-0.036-4.284-0.108c-1.944-0.072-3.396-0.108-4.356-0.108   c-0.961,0-2.388,0.036-4.284,0.108c-1.896,0.072-3.301,0.108-4.212,0.108C0.335,49.176,0,48.888,0,48.312z M18.342,24.552h9.079   c4.468,0,7.951-1.392,10.448-4.176c1.201-1.392,2.137-3.384,2.81-5.976c0.673-2.592,1.009-4.488,1.009-5.688   c0-2.208-0.781-3.84-2.34-4.896c-1.56-1.055-3.684-1.584-6.372-1.584h-6.192c-1.296,0-2.136,0.098-2.52,0.291   c-0.385,0.194-0.72,0.794-1.008,1.802L18.342,24.552z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 51 0 L 51 86 L 0 86 Z"
});
/**
 * 字符data: Q
 */
define("char/data/character/uq", [], {
    path: "M0,33.744c0-5.42,1.432-10.756,4.299-16.009c2.865-5.251,6.622-9.521,11.271-12.807C20.216,1.644,24.948,0,29.766,0   c4.736,0,8.676,1.685,11.818,5.054c3.141,3.371,4.713,7.922,4.713,13.658c0,6.526-1.967,12.798-5.897,18.815   c-3.932,6.019-8.865,10.332-14.798,12.942c0.047,2.968,0.431,4.958,1.149,5.971c0.718,1.011,1.771,1.519,3.159,1.519   c1.484,0,2.98-0.588,4.488-1.764c1.507-1.177,2.645-2.941,3.411-5.292c0.191-0.624,0.478-0.936,0.862-0.936   c0.526,0,0.79,0.288,0.79,0.864c0,0.144-0.121,0.648-0.359,1.512c-0.24,0.864-0.647,2.003-1.221,3.42   c-0.575,1.416-1.269,2.783-2.083,4.104c-0.814,1.32-1.903,2.459-3.267,3.42c-1.365,0.96-2.813,1.44-4.344,1.44   c-3.782,0-5.672-2.208-5.672-6.624c0-1.44,0.239-3.721,0.718-6.84c-2.154,0.72-4.333,1.08-6.534,1.08   c-4.936,0-8.954-1.73-12.051-5.191C1.548,43.692,0,39.223,0,33.744z M6.192,36.201c0,2.961,0.537,5.691,1.61,8.191   c1.073,2.5,2.78,4.309,5.119,5.425c-0.262-0.629-0.393-1.306-0.393-2.033c0-1.853,0.696-3.597,2.09-5.23   c1.393-1.634,3.068-2.45,5.023-2.45c3.494,0,5.409,2.585,5.744,7.753c2.68-1.739,5.049-4.106,7.108-7.104   c2.058-2.996,3.601-6.076,4.63-9.242c1.029-3.165,1.783-6.051,2.263-8.662c0.478-2.609,0.717-4.855,0.717-6.741   c0-4.336-0.982-7.829-2.944-10.479c-1.962-2.649-4.595-3.975-7.897-3.975c-2.692,0-5.468,0.952-8.327,2.855   c-2.86,1.903-5.372,4.517-7.534,7.841c-2.403,3.71-4.206,7.865-5.407,12.466C6.793,29.419,6.192,33.214,6.192,36.201z    M14.256,47.784c0,1.936,0.981,2.904,2.944,2.904c2.009,0,4.115-0.556,6.318-1.67c0.047-0.387,0.072-1.064,0.072-2.032   c0-0.967-0.036-1.743-0.108-2.323c-0.072-0.581-0.418-1.209-1.041-1.887c-0.624-0.677-1.532-1.017-2.729-1.017   c-1.485,0-2.765,0.654-3.842,1.96C14.794,45.027,14.256,46.381,14.256,47.784z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 字符data: R
 */
define("char/data/character/ur", [], {
    path: "M0,48.312c0-0.624,0.144-1.008,0.432-1.152c0.288-0.144,0.792-0.216,1.512-0.216c2.351,0,3.852-0.18,4.5-0.54   s1.116-1.188,1.404-2.484l9.72-39.096c0.191-0.671,0.287-1.127,0.287-1.368c0-0.527-0.336-0.864-1.008-1.008   c-0.671-0.144-1.727-0.216-3.167-0.216c-0.529,0-0.9-0.011-1.116-0.036C12.348,2.172,12.155,2.1,11.988,1.98   c-0.168-0.12-0.252-0.324-0.252-0.612c0-0.623,0.144-1.008,0.432-1.152S12.96,0,13.68,0h18.935c4.346,0,7.832,1.029,10.46,3.088   c2.626,2.059,3.94,4.572,3.94,7.54c0,2.833-1.318,5.583-3.954,8.247s-6.396,4.62-11.28,5.868c1.863,0.675,3.356,1.746,4.479,3.214   c1.123,1.469,1.684,3.19,1.684,5.164c0,1.296-0.192,3.409-0.576,6.336c-0.288,2.497-0.432,4.32-0.432,5.472   c0,0.896,0.048,1.604,0.146,2.124c0.097,0.52,0.329,0.991,0.695,1.415c0.367,0.425,0.891,0.637,1.575,0.637   c1.172,0,2.259-0.558,3.26-1.675c1.001-1.117,1.819-2.65,2.455-4.6c0.097-0.333,0.17-0.57,0.219-0.713   c0.048-0.142,0.157-0.261,0.325-0.356c0.167-0.095,0.396-0.143,0.684-0.143c0.72,0,1.08,0.313,1.08,0.936   c0,0.432-0.244,1.236-0.73,2.412c-0.487,1.177-1.412,2.437-2.774,3.78s-2.968,2.016-4.816,2.016c-2.424,0-4.475-0.648-6.153-1.944   c-1.679-1.296-2.518-3.192-2.518-5.688c0-0.768,0.304-2.688,0.911-5.76c0.688-3.264,1.033-5.159,1.033-5.688   c0-2.351-0.646-3.996-1.936-4.932c-1.292-0.936-2.852-1.404-4.682-1.404h-7.605L13.464,44.01c-0.192,0.74-0.288,1.269-0.288,1.586   c0,0.317,0.047,0.556,0.144,0.714c0.096,0.159,0.468,0.304,1.116,0.435c0.648,0.133,1.62,0.198,2.916,0.198   c0.576,0,0.972,0.012,1.188,0.036c0.216,0.024,0.396,0.108,0.54,0.252c0.144,0.144,0.216,0.36,0.216,0.648   c0,0.864-0.457,1.296-1.368,1.296c-0.96,0-2.4-0.036-4.32-0.108c-1.92-0.072-3.337-0.108-4.248-0.108   c-0.913,0-2.304,0.036-4.176,0.108c-1.872,0.072-3.265,0.108-4.176,0.108C0.335,49.176,0,48.888,0,48.312z M18.515,23.688h7.221   c4.48,0,8.007-1.243,10.581-3.732c1.143-1.147,2.061-2.655,2.752-4.52s1.097-3.277,1.216-4.233   c0.119-0.957,0.179-1.699,0.179-2.226c0-1.292-0.273-2.392-0.818-3.3c-0.545-0.909-1.162-1.579-1.85-2.009   c-0.688-0.43-1.647-0.765-2.879-1.005c-1.233-0.238-2.216-0.37-2.951-0.395c-0.736-0.023-1.743-0.036-3.022-0.036   c-2.418,0-3.793,0.045-4.124,0.133c-0.712,0.178-1.234,0.93-1.565,2.259L18.515,23.688z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 50 0 L 50 86 L 0 86 Z"
});
/**
 * 字符data: S
 */
define("char/data/character/us", [], {
    path: "M0,53.281c0,0.125,0.072,0.532,0.216,1.222L3.96,35.64c0.144-0.527,0.288-0.864,0.432-1.008   c0.145-0.144,0.433-0.216,0.864-0.216c0.72,0,1.08,0.223,1.08,0.666c0,0.041-0.013,0.144-0.036,0.31   c-0.024,0.166-0.036,0.249-0.036,0.249c-0.432,1.393-0.647,2.856-0.647,4.392c0,3.456,1.063,6.001,3.19,7.632   c2.127,1.632,4.731,2.448,7.813,2.448c3.104,0,5.874-1.451,8.311-4.356c2.436-2.904,3.654-6.036,3.654-9.396   c0-2.112-0.533-3.84-1.6-5.184c-0.583-0.623-1.177-1.068-1.782-1.332c-0.606-0.263-1.879-0.684-3.818-1.26l-3.518-1.032   c-1.735-0.468-2.77-0.772-3.106-0.913C10.919,24.882,9,21.748,9,17.235c0-4.248,1.717-8.183,5.151-11.804   C17.586,1.811,21.479,0,25.833,0s7.479,1.677,9.375,5.031l3.24-4.144C38.927,0.295,39.287,0,39.528,0   c0.527,0,0.792,0.241,0.792,0.72c0,0.288-0.049,0.625-0.145,1.008l-3.744,14.904c-0.144,0.576-0.288,0.936-0.432,1.08   c-0.145,0.144-0.432,0.216-0.864,0.216c-0.72,0-1.08-0.237-1.08-0.713l0.072-0.999c0.239-1.332,0.36-2.639,0.36-3.924   c0-2.997-0.688-5.435-2.065-7.313c-1.378-1.879-3.637-2.818-6.776-2.818c-3.01,0-5.696,1.287-8.061,3.859   c-2.365,2.572-3.546,5.358-3.546,8.357c0,3.145,1.207,5.24,3.623,6.288c0.523,0.192,1.833,0.576,3.929,1.152   c3.646,1.061,5.942,1.808,6.891,2.242c0.947,0.434,1.859,1.181,2.735,2.241c1.604,1.977,2.406,4.435,2.406,7.375   c0,4.644-1.737,8.917-5.21,12.818c-3.474,3.901-7.453,5.852-11.938,5.852c-5.181,0-8.919-1.653-11.215-4.96   c-1.28,1.726-2.395,3.091-3.342,4.097c-0.475,0.575-0.854,0.863-1.137,0.863C0.26,52.344,0,52.655,0,53.281z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 44 0 L 44 86 L 0 86 Z"
});
/**
 * 字符data: T
 */
define("char/data/character/ut", [], {
    path: "M0,15.408c0-0.191,0.119-0.6,0.36-1.224L4.608,1.296C4.799,0.673,5.004,0.3,5.22,0.18C5.436,0.061,5.928,0,6.696,0h36.937   c0.479,0,0.815,0.013,1.008,0.036c0.191,0.025,0.371,0.097,0.54,0.216c0.167,0.121,0.252,0.324,0.252,0.612   c0,0.432-0.025,0.745-0.072,0.936l-2.295,12.888c-0.103,0.673-0.225,1.092-0.369,1.26c-0.144,0.168-0.457,0.252-0.936,0.252   c-0.721,0-1.08-0.312-1.08-0.936c0-0.191,0.047-0.551,0.144-1.08c0.479-2.832,0.72-4.992,0.72-6.48   c0-2.255-0.586-3.731-1.758-4.428c-1.173-0.695-3.624-1.044-7.354-1.044c-2.067,0-3.291,0.043-3.666,0.126   c-0.751,0.084-1.293,0.778-1.621,2.078l-9.648,38.662c-0.192,0.763-0.288,1.281-0.288,1.554c0,0.6,0.143,1.008,0.429,1.226   c0.286,0.218,0.928,0.383,1.926,0.491c0.047,0,0.285,0.012,0.712,0.036c0.428,0.024,0.927,0.048,1.498,0.072   c0.569,0.025,1.021,0.036,1.354,0.036h1.069c1.188,0,1.782,0.264,1.782,0.792c0,0.96-0.503,1.44-1.506,1.44   c-1.196,0-3.061-0.036-5.595-0.108c-2.535-0.072-4.423-0.108-5.667-0.108c-1.196,0-3.038,0.036-5.525,0.108   c-2.487,0.072-4.353,0.108-5.596,0.108c-0.817,0-1.224-0.288-1.224-0.864c0-0.624,0.155-1.008,0.468-1.152   c0.312-0.144,0.828-0.216,1.548-0.216h1.152c3.024,0,4.968-0.204,5.832-0.612c0.864-0.407,1.464-1.283,1.8-2.628l9.648-38.664   C21.503,4.032,21.6,3.504,21.6,3.024c0-0.191-0.025-0.335-0.072-0.432c-0.048-0.096-0.192-0.18-0.432-0.252   c-0.241-0.072-0.624-0.108-1.152-0.108h-2.448c-4.657,0-7.848,0.684-9.576,2.052s-3.433,4.572-5.112,9.612   c-0.48,1.249-0.792,1.944-0.936,2.088C1.728,16.128,1.463,16.2,1.08,16.2C0.36,16.2,0,15.937,0,15.408z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 字符data: U
 */
define("char/data/character/uu", [], {
    path: "M0,37.224c0-1.536,0.191-3.071,0.576-4.608L7.488,4.819c0.191-0.67,0.288-1.125,0.288-1.366   c0-0.526-0.326-0.862-0.977-1.006C6.149,2.304,5.13,2.232,3.744,2.232c-0.549,0-0.936-0.011-1.161-0.036   C2.358,2.172,2.159,2.1,1.984,1.98C1.809,1.86,1.723,1.656,1.723,1.368C1.723,0.457,2.196,0,3.145,0s2.376,0.036,4.282,0.108   c1.906,0.072,3.329,0.108,4.271,0.108c0.94,0,2.359-0.036,4.253-0.108C17.845,0.036,19.248,0,20.16,0   c0.671,0,1.008,0.313,1.008,0.936c0,0.576-0.144,0.936-0.432,1.08c-0.288,0.144-0.864,0.216-1.728,0.216   c-2.208,0-3.636,0.15-4.284,0.452c-0.648,0.301-1.116,0.953-1.404,1.957l-7.2,28.954c-0.336,2.18-0.504,4.062-0.504,5.646   c0,3.121,0.749,5.45,2.248,6.984c1.499,1.536,3.294,2.303,5.388,2.303c3.426,0,6.768-1.5,10.027-4.5   c3.258-3,5.435-6.779,6.53-11.34l6.408-25.632c0.191-0.767,0.288-1.343,0.288-1.728c0-1.967-1.44-2.999-4.32-3.096   c-0.864,0-1.296-0.288-1.296-0.864C30.888,0.457,31.32,0,32.184,0c0.72,0,1.859,0.036,3.42,0.108   c1.559,0.072,2.724,0.108,3.492,0.108c0.767,0,1.908-0.036,3.42-0.108C44.028,0.036,45.144,0,45.864,0   C46.487,0,46.8,0.313,46.8,0.936c0,0.864-0.36,1.296-1.08,1.296c-4.081,0.142-6.505,1.74-7.272,4.798l-6.552,26.505   c-1.056,4.259-3.42,8.195-7.092,11.807c-3.672,3.612-7.668,5.418-11.988,5.418c-3.553,0-6.577-1.224-9.072-3.672   C1.248,44.64,0,41.353,0,37.224z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 字符data: V
 */
define("char/data/character/uv", [], {
    path: "M0,1.368C0,0.457,0.432,0,1.296,0c0.767,0,1.972,0.036,3.614,0.108C6.553,0.18,7.773,0.216,8.57,0.216   c0.891,0,2.266-0.036,4.125-0.108C14.555,0.036,15.918,0,16.782,0c0.672,0,1.008,0.288,1.008,0.864   c0,0.625-0.144,1.008-0.432,1.152s-0.745,0.216-1.368,0.216c-3.024,0-4.536,0.745-4.536,2.232l3.706,38.06L36.072,7.525   c0.72-1.273,1.08-2.254,1.08-2.941c0-1.469-0.961-2.253-2.88-2.352c-0.768-0.096-1.152-0.384-1.152-0.864   C33.12,0.457,33.552,0,34.416,0c0.672,0,1.764,0.036,3.276,0.108c1.512,0.072,2.628,0.108,3.348,0.108   c0.624,0,1.548-0.036,2.772-0.108C45.036,0.036,45.936,0,46.512,0c0.623,0,0.936,0.264,0.936,0.792   c0,0.336-0.036,0.601-0.108,0.792c-0.072,0.192-0.205,0.336-0.396,0.432C46.752,2.112,46.62,2.16,46.548,2.16   c-0.072,0-0.229,0.025-0.468,0.072c-1.584,0.144-3,0.601-4.248,1.368c-1.249,0.768-2.52,2.255-3.816,4.462L13.32,49.392   c-0.385,0.624-0.697,1.008-0.936,1.152c-0.241,0.144-0.601,0.216-1.081,0.216c-0.529,0-0.864-0.108-1.008-0.324   c-0.144-0.216-0.264-0.684-0.36-1.404L5.616,4.68C5.568,3.96,5.472,3.468,5.328,3.204C5.184,2.94,4.848,2.712,4.32,2.52   C3.792,2.329,2.927,2.232,1.728,2.232C0.576,2.232,0,1.944,0,1.368z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 50 0 L 50 86 L 0 86 Z"
});
/**
 * 字符data: W
 */
define("char/data/character/uw", [], {
    path: "M0,1.368C0,0.457,0.429,0,1.288,0C2.004,0,3.161,0.036,4.76,0.108C6.358,0.18,7.54,0.216,8.304,0.216   c0.867,0,2.216-0.036,4.048-0.108C14.183,0.036,15.557,0,16.472,0c0.538,0,0.808,0.288,0.808,0.864   c0,0.625-0.128,1.008-0.384,1.152c-0.256,0.144-0.66,0.216-1.214,0.216c-1.15,0-2.071,0.097-2.764,0.288   c-0.694,0.192-1.161,0.493-1.399,0.9c-0.24,0.408-0.395,0.745-0.467,1.008c-0.072,0.265-0.084,0.661-0.036,1.188L12.6,40.824   L29.16,10.01c0.384-0.479,0.576-0.96,0.576-1.44c0-2.448-0.098-4.057-0.292-4.826c-0.097-0.576-0.34-0.972-0.729-1.188   C28.325,2.34,27.4,2.232,25.94,2.232c-1.021,0-1.532-0.288-1.532-0.864C24.408,0.457,24.869,0,25.793,0   c0.706,0,1.846,0.036,3.423,0.108c1.577,0.072,2.742,0.108,3.496,0.108c0.918,0,2.297-0.036,4.135-0.108   C38.686,0.036,40.04,0,40.911,0c0.71,0,1.065,0.264,1.065,0.792c0,0.432-0.098,0.768-0.292,1.008   c-0.196,0.241-0.366,0.373-0.512,0.396c-0.146,0.025-0.366,0.036-0.658,0.036c-2.145,0.048-3.542,0.313-4.189,0.792   c-0.648,0.48-0.972,1.104-0.972,1.872c0,0.288,0.023,0.457,0.072,0.504l1.584,35.424L55.152,7.27   c0.624-0.958,0.936-1.727,0.936-2.303c0-1.679-1.224-2.591-3.672-2.735c-0.768,0-1.152-0.288-1.152-0.864   C51.264,0.457,51.72,0,52.632,0c0.767,0,1.955,0.036,3.564,0.108c1.607,0.072,2.795,0.108,3.564,0.108   c0.576,0,1.463-0.036,2.664-0.108C63.624,0.036,64.487,0,65.016,0c0.576,0,0.864,0.264,0.864,0.792c0,0.912-0.342,1.393-1.025,1.44   c-1.805,0.139-3.246,0.589-4.319,1.351s-2.221,2.204-3.44,4.328L34.545,49.464c-0.478,0.864-1.099,1.296-1.863,1.296   c-0.574,0-0.92-0.109-1.04-0.326c-0.119-0.219-0.204-0.714-0.251-1.488l-1.44-36.153l-19.944,36.96   c-0.322,0.402-0.574,0.671-0.756,0.807c-0.183,0.134-0.526,0.201-1.03,0.201s-0.826-0.108-0.963-0.324   c-0.137-0.216-0.229-0.708-0.275-1.476L4.824,4.536c-0.046-0.671-0.104-1.14-0.172-1.404c-0.07-0.263-0.334-0.479-0.793-0.648   C3.4,2.316,2.664,2.232,1.654,2.232C0.551,2.232,0,1.944,0,1.368z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 68 0 L 68 86 L 0 86 Z"
});
/**
 * 字符data: X
 */
define("char/data/character/ux", [], {
    path: "M0,48.312c0-0.864,0.288-1.32,0.864-1.368c1.199-0.096,2.196-0.204,2.988-0.324c0.792-0.119,1.944-0.6,3.456-1.44   c1.512-0.839,2.916-2.003,4.212-3.492l14.999-17.113L19.08,4.536c-0.241-0.623-0.457-1.067-0.648-1.332   C18.24,2.94,17.82,2.712,17.172,2.52c-0.648-0.191-1.597-0.288-2.844-0.288c-1.152,0-1.728-0.288-1.728-0.864   C12.6,0.457,13.056,0,13.968,0c0.767,0,1.979,0.036,3.635,0.108c1.655,0.072,2.89,0.108,3.705,0.108   c0.958,0,2.372-0.036,4.241-0.108C27.418,0.036,28.81,0,29.723,0c0.671,0,1.008,0.313,1.008,0.936c0,0.864-0.385,1.296-1.152,1.296   c-0.817,0.048-1.561,0.216-2.232,0.504c-0.673,0.288-1.152,0.576-1.44,0.864c-0.288,0.288-0.432,0.529-0.432,0.72   c0,0.048,0.041,0.186,0.124,0.411c0.083,0.225,0.133,0.36,0.149,0.405l5.263,14.319L41.688,7.272C42.696,6.12,43.2,5.16,43.2,4.392   c0-1.199-0.862-1.919-2.584-2.16c-0.572,0-0.857-0.288-0.857-0.864C39.759,0.457,40.188,0,41.044,0c0.765,0,2,0.036,3.704,0.108   c1.703,0.072,2.963,0.108,3.78,0.108c0.72,0,1.775-0.036,3.168-0.108C53.088,0.036,54.119,0,54.792,0   c0.624,0,0.936,0.288,0.936,0.864s-0.12,0.936-0.36,1.08c-0.241,0.144-0.625,0.241-1.152,0.288c-1.681,0.097-3.24,0.495-4.68,1.193   c-1.44,0.7-2.448,1.314-3.024,1.844c-0.576,0.531-1.296,1.254-2.16,2.17l-0.864,0.722l-11.66,13.525l8.487,23.097   c0.191,0.576,0.384,0.984,0.576,1.224c0.191,0.241,0.612,0.457,1.26,0.648c0.648,0.192,1.595,0.288,2.844,0.288   c0.479,0,0.815,0.012,1.008,0.036c0.191,0.024,0.36,0.108,0.504,0.252s0.216,0.36,0.216,0.648c0,0.864-0.432,1.296-1.296,1.296   c-0.769,0-1.995-0.036-3.678-0.108c-1.684-0.072-2.938-0.108-3.763-0.108c-0.922,0-2.324,0.036-4.207,0.108   c-1.883,0.072-3.28,0.108-4.191,0.108c-0.72,0-1.08-0.288-1.08-0.864c0-0.816,0.384-1.271,1.152-1.368   c1.199-0.047,2.184-0.312,2.953-0.792c0.769-0.479,1.153-0.936,1.153-1.368l-0.218-0.864l-6.202-17.093L13.532,42.667l-0.085,0.123   c-0.115,0.164-0.229,0.286-0.342,0.367c-0.385,0.515-0.576,1.075-0.576,1.683c0,1.262,0.839,1.964,2.52,2.104   c0.623,0,0.936,0.264,0.936,0.792c0,0.96-0.457,1.44-1.368,1.44c-0.769,0-1.993-0.036-3.672-0.108   C9.263,48.996,8.016,48.96,7.2,48.96c-0.72,0-1.789,0.036-3.204,0.108c-1.417,0.072-2.46,0.108-3.132,0.108   C0.288,49.176,0,48.888,0,48.312z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 58 0 L 58 86 L 0 86 Z"
});
/**
 * 字符data: Y
 */
define("char/data/character/uy", [], {
    path: "M0,1.368C0,0.457,0.456,0,1.368,0C2.135,0,3.373,0.036,5.08,0.108C6.785,0.18,8.048,0.216,8.869,0.216   c0.964,0,2.385-0.036,4.261-0.108C15.006,0.036,16.4,0,17.313,0c0.672,0,1.008,0.288,1.008,0.864c0,0.625-0.133,1.008-0.396,1.152   c-0.265,0.144-0.661,0.216-1.188,0.216c-2.689,0-4.033,0.576-4.033,1.728c0,0.144,0.096,0.457,0.289,0.936l6.857,21.603   L35.511,7.315l0.273-0.335c0.144-0.191,0.299-0.407,0.468-0.647c0.168-0.24,0.335-0.504,0.504-0.792   c0.168-0.288,0.312-0.575,0.433-0.863c0.119-0.288,0.18-0.551,0.18-0.792c0-1.007-0.745-1.558-2.232-1.655   c-0.72,0-1.08-0.288-1.08-0.864C34.056,0.457,34.488,0,35.353,0c0.72,0,1.823,0.036,3.312,0.108   c1.487,0.072,2.615,0.108,3.384,0.108c0.623,0,1.548-0.036,2.772-0.108C46.044,0.036,46.944,0,47.521,0   c0.575,0,0.863,0.264,0.863,0.792c0,0.624-0.107,1.008-0.324,1.152c-0.216,0.144-0.564,0.241-1.044,0.288   c-1.776,0.147-3.408,0.674-4.896,1.58c-1.488,0.905-3.049,2.386-4.68,4.441L20.448,28.84c-0.288,0.335-0.576,0.982-0.864,1.939   c-0.288,1.15-0.684,2.73-1.188,4.742c-0.504,2.012-0.853,3.377-1.044,4.095c-0.913,3.783-1.368,5.818-1.368,6.105   c0,0.527,0.335,0.863,1.008,1.007c0.671,0.144,1.728,0.215,3.168,0.215c0.527,0,0.9,0.012,1.116,0.036   c0.216,0.024,0.407,0.097,0.576,0.216c0.167,0.12,0.252,0.324,0.252,0.612c0,0.913-0.457,1.368-1.368,1.368   c-0.912,0-2.329-0.036-4.248-0.108c-1.92-0.072-3.361-0.108-4.32-0.108c-0.912,0-2.304,0.036-4.176,0.108   c-1.872,0.072-3.265,0.108-4.176,0.108c-0.673,0-1.008-0.288-1.008-0.864c0-0.624,0.144-1.008,0.432-1.152   c0.288-0.144,0.744-0.216,1.368-0.216c2.639-0.047,4.236-0.263,4.788-0.648c0.551-0.384,1.068-1.584,1.548-3.6   c2.208-8.399,3.312-12.792,3.312-13.176c0-0.24-0.097-0.6-0.288-1.08L6.336,4.392c-0.241-0.864-0.66-1.44-1.26-1.728   C4.475,2.376,3.359,2.232,1.728,2.232C0.576,2.232,0,1.944,0,1.368z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 51 0 L 51 86 L 0 86 Z"
});
/**
 * 字符data: Z
 */
define("char/data/character/uz", [], {
    path: "M0,48.528c0-0.576,0.264-1.176,0.792-1.8L38.016,2.232h-9.971c-2.707,0-5.022,0.326-6.945,0.977   c-1.924,0.651-3.466,1.652-4.629,3.002c-1.163,1.351-2.065,2.654-2.707,3.907c-0.641,1.254-1.271,2.87-1.888,4.846   c-0.095,0.339-0.167,0.556-0.214,0.653s-0.126,0.217-0.235,0.361c-0.109,0.145-0.232,0.229-0.368,0.253   c-0.137,0.024-0.342,0.036-0.615,0.036c-0.819,0-1.229-0.264-1.229-0.795c0-0.337,0.072-0.65,0.216-0.939L13.32,1.445   c0.24-0.674,0.456-1.083,0.648-1.229C14.16,0.073,14.64,0,15.408,0h27.864c0.383,0,0.648,0,0.792,0   c0.144,0,0.299,0.023,0.468,0.068c0.167,0.046,0.275,0.115,0.324,0.207c0.047,0.092,0.072,0.206,0.072,0.343   c0,0.551-0.288,1.147-0.864,1.789L6.713,46.944h10.584c2.448,0,4.583-0.277,6.408-0.832c1.824-0.555,3.3-1.218,4.428-1.99   c1.127-0.771,2.147-1.904,3.06-3.399c0.912-1.495,1.596-2.822,2.052-3.979c0.456-1.157,1.019-2.773,1.692-4.847   c0.288-0.869,0.504-1.387,0.648-1.556c0.144-0.168,0.407-0.253,0.792-0.253c0.768,0,1.152,0.289,1.152,0.867   c0,0.286-0.121,0.667-0.36,1.143L32.273,47.89c-0.192,0.619-0.385,0.987-0.576,1.107c-0.192,0.119-0.696,0.179-1.512,0.179H1.618   C0.539,49.176,0,48.96,0,48.528z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 48 0 L 48 86 L 0 86 Z"
});
/**
 * 字符data: v
 */
define("char/data/character/v", [], {
    path: "M0,11.088c0-0.144,0.096-0.576,0.288-1.296c0.191-0.72,0.54-1.644,1.044-2.772c0.504-1.127,1.08-2.207,1.728-3.24   c0.648-1.032,1.523-1.919,2.628-2.664C6.792,0.373,7.967,0,9.216,0c1.584,0,2.891,0.534,3.924,1.599   c1.031,1.065,1.548,2.494,1.548,4.285c0,0.717-0.265,1.911-0.792,3.582c-2.833,7.5-4.248,12.682-4.248,15.548   c0,1.529,0.348,2.902,1.044,4.12c0.695,1.218,1.908,1.827,3.636,1.827c1.919,0,3.683-0.932,5.292-2.795   c1.607-1.863,2.844-4.035,3.708-6.519c0.864-2.484,1.523-4.705,1.98-6.664c0.456-1.958,0.684-3.296,0.684-4.013   c0-2.387-0.665-4.274-1.992-5.66c-0.64-0.716-0.959-1.361-0.959-1.935c0-0.831,0.371-1.602,1.116-2.311   C24.899,0.356,25.679,0,26.496,0c1.008,0,1.751,0.45,2.232,1.348c0.479,0.899,0.72,2.052,0.72,3.46c0,0.575-0.144,1.773-0.43,3.593   c-0.287,1.82-0.801,4.143-1.541,6.969s-1.648,5.497-2.724,8.012c-1.076,2.516-2.556,4.682-4.443,6.502   c-1.888,1.82-3.953,2.73-6.199,2.73c-2.448,0-4.536-0.688-6.264-2.061c-1.728-1.374-2.592-3.579-2.592-6.616   c0-2.484,1.224-7.069,3.672-13.756c1.152-3.2,1.728-5.35,1.728-6.449c0-1.385-0.529-2.078-1.584-2.078   c-2.88,0-5.112,3.002-6.696,9.008c-0.144,0.524-0.288,0.846-0.432,0.965s-0.432,0.179-0.864,0.179C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 32 0 L 32 86 L 0 86 Z"
});
/**
 * 字符data: w
 */
define("char/data/character/w", [], {
    path: "M0,11.088c0-0.144,0.096-0.576,0.288-1.296c0.191-0.72,0.54-1.644,1.044-2.772c0.504-1.127,1.08-2.207,1.728-3.24   c0.648-1.032,1.523-1.919,2.628-2.664C6.792,0.373,7.967,0,9.216,0c1.584,0,2.891,0.534,3.924,1.599   c1.031,1.065,1.548,2.494,1.548,4.285c0,0.957-0.288,2.222-0.864,3.797C11.088,16.895,9.72,21.91,9.72,24.727   c0,0.478,0.036,0.956,0.108,1.433c0.072,0.479,0.239,1.135,0.504,1.971c0.263,0.836,0.779,1.517,1.548,2.042   c0.767,0.525,1.728,0.788,2.88,0.788c1.631,0,3.048-0.918,4.248-2.754c1.199-1.836,1.8-3.16,1.8-3.971   c0-1.478,0.191-2.98,0.576-4.507l4.104-16.416c0.432-1.679,1.343-2.52,2.736-2.52c0.671,0,1.175,0.199,1.512,0.597   c0.335,0.398,0.504,0.845,0.504,1.342c0,0.304-0.385,1.735-1.152,4.292l-3.024,12.096c-0.576,2.369-0.864,4.268-0.864,5.699   c0,1.776,0.372,3.244,1.116,4.403c0.744,1.16,1.955,1.739,3.636,1.739c2.927,0,5.328-2.221,7.2-6.664   c0.72-1.719,1.487-4.037,2.304-6.95c0.815-2.914,1.224-5.039,1.224-6.376c0-2.387-0.665-4.274-1.992-5.66   c-0.64-0.716-0.959-1.361-0.959-1.935c0-0.831,0.371-1.602,1.116-2.311C39.587,0.356,40.367,0,41.184,0   c1.008,0,1.751,0.45,2.232,1.348c0.479,0.899,0.72,2.052,0.72,3.46c0,1.917-0.55,5.078-1.648,9.485   c-1.098,4.408-2.197,7.832-3.295,10.274c-2.246,5.366-5.398,8.048-9.457,8.048c-2.064,0-3.805-0.425-5.22-1.276   c-1.417-0.851-2.412-1.98-2.988-3.39c-1.825,3.111-4.152,4.666-6.984,4.666c-2.833,0-5.088-0.747-6.768-2.241   c-1.632-1.494-2.448-3.71-2.448-6.651c0-2.531,1.199-7.044,3.6-13.542c1.152-3.2,1.728-5.35,1.728-6.449   c0-1.385-0.529-2.078-1.584-2.078c-2.88,0-5.112,3.002-6.696,9.008c-0.144,0.524-0.288,0.846-0.432,0.965s-0.432,0.179-0.864,0.179   C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 47 0 L 47 86 L 0 86 Z"
});
/**
 * 字符data: x
 */
define("char/data/character/x", [], {
    path: "M0,28.152C0,27,0.368,26.064,1.106,25.344c0.737-0.72,1.596-1.08,2.58-1.08c1.671,0,2.506,0.769,2.506,2.304   c0,0.673-0.234,1.356-0.701,2.052c-0.467,0.696-1.191,1.165-2.173,1.404c0.833,0.624,1.91,0.936,3.233,0.936   c0.981,0,1.859-0.284,2.63-0.852c0.772-0.568,1.427-1.444,1.964-2.628s0.933-2.25,1.185-3.199c0.252-0.95,0.581-2.187,0.987-3.715   c0.602-2.342,1.179-4.518,1.731-6.526c1.008-4.104,1.512-6.729,1.512-7.874c0-1.431-0.308-2.542-0.925-3.329   c-0.616-0.788-1.421-1.181-2.411-1.181c-1.586,0-3.185,0.763-4.795,2.288C6.819,5.47,5.558,7.686,4.644,10.593   C4.447,11.165,4.3,11.51,4.202,11.629c-0.099,0.119-0.394,0.179-0.884,0.179c-0.738,0-1.106-0.24-1.106-0.72   c0-0.479,0.253-1.296,0.76-2.448c0.506-1.152,1.195-2.387,2.064-3.708C5.905,3.613,7.089,2.46,8.586,1.476   C10.083,0.493,11.676,0,13.367,0c3.396,0,5.693,1.653,6.89,4.958c0.574-1.118,1.458-2.224,2.655-3.317   C24.108,0.547,25.567,0,27.289,0c1.473,0,2.908,0.349,4.308,1.044c1.399,0.696,2.1,1.86,2.1,3.492c0,1.249-0.394,2.196-1.18,2.844   c-0.787,0.648-1.598,0.972-2.433,0.972c-0.884,0-1.536-0.237-1.953-0.712c-0.418-0.475-0.627-0.997-0.627-1.567   c0-0.237,0.024-0.511,0.073-0.819s0.319-0.771,0.811-1.389c0.492-0.617,1.18-1.021,2.064-1.212   c-0.785-0.664-1.863-0.997-3.235-0.997c-2.865,0-5.002,2.414-6.409,7.242c-1.105,4.619-1.92,7.88-2.448,9.785   c-0.912,4.139-1.368,6.72-1.368,7.741c0,1.654,0.341,2.824,1.022,3.509s1.501,1.027,2.457,1.027c1.633,0,3.245-0.762,4.831-2.288   c1.586-1.525,2.836-3.742,3.75-6.649c0.196-0.572,0.355-0.917,0.479-1.036c0.123-0.12,0.405-0.179,0.847-0.179   c0.737,0,1.106,0.241,1.106,0.72c0,0.432-0.242,1.213-0.725,2.34c-0.484,1.128-1.16,2.365-2.028,3.708   c-0.87,1.344-2.053,2.52-3.549,3.528c-1.498,1.008-3.115,1.512-4.854,1.512c-1.292,0-2.595-0.36-3.912-1.08   c-1.316-0.72-2.285-1.991-2.906-3.816c-1.866,3.265-4.211,4.896-7.032,4.896c-1.768,0-3.29-0.408-4.565-1.224   C0.638,30.577,0,29.497,0,28.152z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 37 0 L 37 86 L 0 86 Z"
});
/**
 * 字符data: y
 */
define("char/data/character/y", [], {
    path: "M0,11.088c0-0.144,0.096-0.576,0.288-1.296c0.191-0.72,0.54-1.644,1.044-2.772c0.504-1.127,1.08-2.207,1.728-3.24   c0.648-1.032,1.523-1.919,2.628-2.664C6.792,0.373,7.967,0,9.216,0c1.584,0,2.891,0.534,3.924,1.599   c1.031,1.065,1.548,2.494,1.548,4.285c0,0.957-0.313,2.246-0.936,3.869c-2.784,7.546-4.176,12.776-4.176,15.69   c0,3.679,1.296,5.517,3.888,5.517c1.914,0,3.577-0.724,4.988-2.17c1.412-1.447,2.286-2.834,2.621-4.163l5.279-21.223   c0.432-1.741,1.368-2.612,2.808-2.612c0.671,0,1.175,0.199,1.512,0.597c0.335,0.398,0.504,0.845,0.504,1.342   c0,0.05-0.029,0.19-0.087,0.424c-0.059,0.234-0.105,0.419-0.139,0.559L23.904,32.04c-0.96,3.792-2.952,7.164-5.976,10.116   c-3.024,2.952-6.312,4.428-9.864,4.428c-2.016,0-3.672-0.571-4.968-1.711c-1.296-1.142-1.944-2.66-1.944-4.553   c0-1.201,0.263-2.172,0.792-2.916c0.528-0.745,1.032-1.188,1.512-1.332c0.479-0.144,0.936-0.216,1.368-0.216   c0.672,0,1.248,0.204,1.728,0.612c0.479,0.407,0.72,0.972,0.72,1.692c0,0.72-0.27,1.44-0.808,2.16   c-0.539,0.72-1.322,1.152-2.349,1.296c-0.392,0.047-0.587,0.119-0.587,0.216c0,0.191,0.122,0.516,0.366,0.972   c0.243,0.456,0.731,0.924,1.462,1.404c0.731,0.479,1.635,0.72,2.708,0.72c2.207,0,4.392-1.152,6.552-3.455   c2.16-2.305,3.863-6.116,5.112-11.437c-1.776,1.72-3.937,2.58-6.48,2.58c-2.257,0-4.165-0.676-5.724-2.025   c-1.561-1.35-2.34-3.473-2.34-6.367c0-2.674,1.248-7.355,3.744-14.042c1.152-3.2,1.728-5.35,1.728-6.449   c0-1.385-0.529-2.078-1.584-2.078c-2.88,0-5.112,3.002-6.696,9.008c-0.144,0.524-0.288,0.846-0.432,0.965s-0.432,0.179-0.864,0.179   C0.36,11.808,0,11.568,0,11.088z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 字符data: z
 */
define("char/data/character/z", [], {
    path: "M0,31.896c0-0.432,0.792-1.764,2.376-3.996s3.288-4.236,5.112-6.012l11.808-11.736c0.479-0.479,1.44-1.536,2.88-3.168   c-1.249,0-2.664-0.376-4.248-1.13c-1.92-0.83-3.36-1.246-4.32-1.246c-1.249,0-2.365,0.343-3.348,1.027   C9.276,6.32,8.615,7.088,8.28,7.937C8.088,8.362,7.931,8.633,7.812,8.751C7.692,8.87,7.416,8.928,6.984,8.928   c-0.72,0-1.08-0.261-1.08-0.785c0-1.19,0.828-2.845,2.484-4.965C10.044,1.06,12.024,0,14.328,0c1.57,0,3.068,0.936,4.492,2.808   c1.276,1.681,2.43,2.52,3.461,2.52c0.687,0,1.23-0.292,1.63-0.875c0.399-0.583,1.307-1.767,2.724-3.548   c0.087-0.411,0.197-0.664,0.326-0.761C27.091,0.049,27.389,0,27.856,0c0.724,0,1.088,0.241,1.088,0.72   c0,0.241-0.372,0.899-1.114,1.975c-0.743,1.075-1.704,2.466-2.88,4.169c-1.178,1.705-2.399,3.088-3.664,4.152l-10.46,10.296   c-1.015,1.008-2.368,2.473-4.058,4.392c0.24-0.047,0.672-0.072,1.296-0.072c1.104,0,2.592,0.426,4.464,1.279   c1.728,0.731,3.071,1.097,4.032,1.097c1.584,0,3.132-0.558,4.644-1.675c1.512-1.116,2.58-2.554,3.204-4.312   c0.148-0.475,0.285-0.784,0.408-0.927c0.124-0.142,0.409-0.213,0.854-0.213c0.743,0,1.114,0.238,1.114,0.715   c0,0.764-0.399,1.969-1.196,3.615c-0.798,1.646-2.09,3.292-3.878,4.938s-3.744,2.468-5.87,2.468c-0.673,0-1.309-0.156-1.908-0.468   c-0.601-0.313-1.044-0.624-1.332-0.936c-0.288-0.312-0.696-0.78-1.224-1.404c-0.72-1.008-1.296-1.68-1.728-2.016   c-0.432-0.335-1.008-0.504-1.728-0.504c-0.624,0-1.224,0.142-1.8,0.424s-1.165,0.765-1.764,1.447   c-0.601,0.682-0.972,1.128-1.116,1.34s-0.48,0.702-1.008,1.469C1.991,32.4,1.608,32.616,1.08,32.616C0.36,32.616,0,32.375,0,31.896   z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 32 0 L 32 86 L 0 86 Z"
});
/**
 * 希腊字符data: alpha
 */
define("char/data/greek/alpha", [], {
    path: "M31.395,19.297c3.384-4.248,5.76-9.721,7.057-14.257c0.36-1.296,0.36-1.512,1.08-1.512c0.792,0,0.864,0.576,0.864,0.72   c0,0.072-1.512,8.425-8.281,16.922c-0.72,0.864-0.72,1.008-0.72,2.52c0,1.728,0,7.345,2.232,7.345c0.144,0,2.736,0,4.032-3.528   c0.216-0.504,0.432-0.72,0.936-0.72c0.432,0,0.864,0.216,0.864,0.72c0,1.152-2.232,5.112-6.048,5.112   c-3.24,0-5.617-2.232-6.553-6.048c-5.473,4.392-10.657,6.048-15.193,6.048C4.32,32.619,0,27.146,0,20.45C0,10.297,9.505,0,19.37,0   c5.329,0,12.025,3.528,12.025,14.833V19.297z M26.426,16.633c0-5.616,0-15.049-7.128-15.049c-2.521,0-6.409,1.368-9.793,6.625   c-2.304,3.672-4.176,11.449-4.176,14.978c0,4.608,2.16,7.849,6.48,7.849c2.88,0,8.425-0.792,14.761-6.336   C26.426,23.474,26.426,19.297,26.426,16.633z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 43 0 L 43 86 L 0 86 Z"
});
/**
 * 希腊字符data: beta
 */
define("char/data/greek/beta", [], {
    path: "M30.972,21.89c2.592,1.8,5.256,5.544,5.256,10.729c0,5.329-2.304,9.937-5.761,13.25c-3.24,3.168-8.641,5.688-13.897,5.688   s-8.425-2.665-9.793-6.985L1.737,64.446c-0.072,0.216-0.288,0.36-0.864,0.36c-0.576,0-0.936-0.432-0.864-0.72l11.449-45.724   c1.368-5.473,5.328-12.457,9.289-15.337C23.267,1.152,25.284,0,29.46,0c5.833,0,9.793,4.464,9.793,9.865   C39.253,15.049,35.148,19.514,30.972,21.89z M28.524,1.656c-8.641,0-13.825,11.449-15.41,17.642L8.506,37.515   c-0.36,1.368-0.36,2.448-0.36,3.168c0,5.112,2.736,9.289,8.208,9.289c4.104,0,8.929-2.592,11.737-6.48   c2.016-2.808,3.744-8.208,3.6-12.385c-0.072-3.313-0.432-5.545-3.168-8.137c-2.16,0.864-3.24,0.936-5.905,0.936   c-1.296,0-5.041,0.216-4.968-1.8c0-2.376,4.032-2.304,5.544-2.304c2.16,0,3.6,0.144,5.544,0.864   c3.744-2.232,6.48-7.417,6.48-12.458C35.22,3.888,32.7,1.656,28.524,1.656z M23.195,21.458c-0.792,0-3.384-0.144-3.528,0.576   c0.72,0.36,2.16,0.288,3.168,0.288c1.728,0,2.52-0.144,3.456-0.504C25.355,21.458,24.708,21.458,23.195,21.458z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 42 0 L 42 86 L 0 86 Z"
});
/**
 * 希腊字符data: chi
 */
define("char/data/greek/chi", [], {
    path: "M22.61,22.034c1.584,5.544,6.48,22.97,10.153,22.97c1.368,0,3.168-1.152,3.816-2.88c0.216-0.72,0.288-1.008,1.008-1.008   c0.72,0,0.864,0.432,0.864,0.792c0,0.936-1.944,4.68-6.121,4.68c-6.409,0-7.993-3.6-8.929-5.76   c-1.728-4.033-2.592-6.841-4.896-14.33L2.016,45.004c-0.288,0.288-0.648,0.792-1.152,0.792C0.432,45.796,0,45.364,0,44.932   c0-0.216,0-0.36,0.792-1.152l16.562-18.506c0.576-0.576,0.576-0.72,0.576-0.792c0-0.216-2.304-8.569-4.608-14.257   c-1.224-3.168-3.384-8.641-5.544-8.641c-0.432,0-2.736,0.288-3.816,3.096c-0.144,0.36-0.288,0.792-0.936,0.792   c-0.864,0-0.864-0.648-0.864-0.72C2.16,3.744,4.032,0,8.208,0c6.336,0,7.921,3.6,8.713,5.256c1.656,3.816,2.232,5.617,5.112,14.761   L38.523,1.656c0.432-0.504,0.72-0.864,1.152-0.864c0.576,0,0.864,0.432,0.864,0.864c0,0.216,0,0.36-0.792,1.152L22.61,22.034z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 43 0 L 43 86 L 0 86 Z"
});
/**
 * 希腊字符data: delta
 */
define("char/data/greek/delta", [], {
    path: "M11.665,7.417c0-4.32,2.592-7.417,8.208-7.417c1.152,0,2.16,0,5.905,0.792c2.592,0.576,3.744,0.792,3.744,2.376   c0,1.152-1.08,2.88-2.88,2.88c-1.08,0-2.52-0.936-3.96-1.8c-1.512-1.008-2.952-1.944-5.112-1.944c-2.52,0-3.96,1.728-3.96,3.312   c0,3.168,4.249,8.569,6.841,11.809c2.448,3.24,5.329,6.841,5.329,13.393c0,9.937-5.977,21.242-14.401,21.242   C4.608,52.061,0,46.876,0,39.963C0,31.25,6.984,21.89,15.985,19.729C13.753,15.337,11.665,11.305,11.665,7.417z M4.464,41.979   c0,5.473,2.952,8.497,6.913,8.497c6.696,0,9.433-12.025,9.433-16.777c0-5.185-2.16-9.073-3.96-12.385   C7.128,23.906,4.464,37.443,4.464,41.979z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 32 0 L 32 86 L 0 86 Z"
});
/**
 * 希腊字符data: eta
 */
define("char/data/greek/eta", [], {
    path: "M24.842,44.5c-0.216,0.792-0.72,2.88-2.952,2.88c-1.224,0-2.016-0.864-2.016-1.944c0-0.144,0-0.288,0.216-1.152   l8.209-33.123c0.72-2.88,0.72-4.176,0.72-4.536c0-2.592-0.792-5.041-3.888-5.041s-5.329,1.368-6.913,2.521   c-2.448,1.944-4.68,5.976-4.896,6.625c-0.072,0.432-0.648,2.808-0.792,3.24c-0.36,1.656-0.792,3.24-1.224,4.824l-1.584,6.48   c-0.432,1.8-1.296,5.185-1.368,5.329c-0.504,1.44-1.8,2.016-2.664,2.016c-1.08,0-2.088-0.648-2.088-1.944   c0-0.36,0.432-2.016,0.648-3.096l4.176-16.633c0.937-3.744,1.152-4.536,1.152-6.048c0-2.736-1.008-3.313-2.232-3.313   c-2.592,0-4.032,3.457-5.256,8.569c-0.432,1.584-0.504,1.656-1.224,1.656c-0.144,0-0.864,0-0.864-0.72   c0-0.216,0.936-4.537,2.232-6.984C2.88,2.808,4.248,0,7.561,0c3.24,0,6.265,2.16,6.625,6.265C15.913,3.744,19.658,0,25.346,0   c5.4,0,8.28,3.024,8.28,7.705c0,1.944-0.216,2.88-0.576,4.176L24.842,44.5z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 37 0 L 37 86 L 0 86 Z"
});
/**
 * 希腊字符data: gamma
 */
define("char/data/greek/gamma", [], {
    path: "M1.368,13.897c-0.72,0-1.368,0-1.368-0.72C0,10.945,5.041,0,14.042,0c4.968,0,7.849,3.528,9.577,7.92   c2.808,6.985,2.88,12.457,2.952,14.689c2.88-7.272,5.761-14.473,9.505-21.314c0.216-0.504,0.648-0.504,0.864-0.504   c0.144,0,0.864,0,0.864,0.72c0,0.288-0.864,1.872-1.368,2.736c-2.88,5.689-7.489,16.417-9.793,23.546   c-0.288,0.936-0.432,1.872-0.576,2.808c-0.288,2.232-1.008,6.336-2.664,12.385c-0.792,2.736-1.368,4.32-2.304,4.32   c-0.576,0-0.936-0.504-0.936-1.296c0-1.872,2.16-10.225,3.744-15.481c0.504-1.44,0.864-2.665,0.864-7.057   c0-5.688-0.792-18.29-11.665-18.29c-0.792,0-8.641,0.072-11.449,8.353L1.368,13.897z",
    offset: {
        x: 0,
        y: 30
    },
    box: "M 0 0 L 41 0 L 41 86 L 0 86 Z"
});
/**
 * 希腊字符data: iota
 */
define("char/data/greek/iota", [], {
    path: "M6.049,32.619C2.016,32.619,0,29.667,0,26.714c0-2.304,1.729-5.688,2.304-7.705c0.144-0.72,0.792-2.521,1.008-3.241   c0.216-0.936,2.016-7.272,2.16-7.632c0.432-1.368,1.08-4.896,1.584-6.265C7.633,0.504,8.929,0,9.721,0   c1.224,0,2.088,0.72,2.088,1.944c0,0.576-2.952,12.673-6.192,21.386c-0.72,1.944-1.296,3.6-1.296,5.328   c0,2.16,0.864,2.376,1.873,2.376c3.096,0,9.073-2.376,11.305-9.433c0.144-0.504,0.288-0.792,0.936-0.792   c0.216,0,0.864,0,0.864,0.72C19.298,23.906,14.257,32.619,6.049,32.619z",
    offset: {
        x: 0,
        y: 34
    },
    box: "M 0 0 L 22 0 L 22 86 L 0 86 Z"
});
/**
 * 希腊字符data: kappa
 */
define("char/data/greek/kappa", [], {
    path: "M6.913,2.592C7.561,0,9.577,0,9.793,0c1.224,0,2.088,0.72,2.088,1.944c0,0.36-0.864,3.745-1.296,5.617   c-0.36,1.224-1.224,4.824-1.44,5.617c2.592-0.864,4.32-1.944,9.217-6.121c3.168-2.665,7.417-6.265,11.809-6.265   c2.592,0,2.88,1.872,2.88,2.52c0,1.8-1.584,3.889-3.888,3.889c-2.232,0-2.736-1.656-2.736-2.521c0-0.36,0.216-1.224,0.36-1.584   c-2.88,1.224-4.968,2.952-8.281,5.76c-1.944,1.656-4.248,3.601-6.625,4.896c4.032,0.144,13.969,0.648,13.969,7.417   c0,0.792-0.216,1.728-0.36,2.376c-0.288,1.224-0.576,2.952-0.576,4.032c0,2.521,0.792,3.457,2.304,3.457   c3.24,0,4.896-3.96,6.265-8.929c0.216-1.008,0.288-1.296,1.008-1.296c0.216,0,0.864,0,0.864,0.72c0,0.144-0.864,4.32-2.664,7.345   c-1.44,2.448-3.313,3.744-5.617,3.744c-3.744,0-6.625-2.88-6.625-7.128c0-0.576,0.072-1.368,0.36-2.521   c0.144-0.72,0.144-1.08,0.144-1.584c0-4.68-6.265-5.904-12.313-6.121C5.544,27.362,5.977,25.994,5.256,28.586   c-0.576,2.304-1.008,4.032-3.168,4.032C1.008,32.619,0,31.971,0,30.674c0-0.504,0-0.648,0.288-1.656L6.913,2.592z",
    offset: {
        x: 0,
        y: 34
    },
    box: "M 0 0 L 38 0 L 38 86 L 0 86 Z"
});
/**
 * 希腊字符data: lambda
 */
define("char/data/greek/lambda", [], {
    path: "M4.536,49.396c-0.576,0.72-1.224,1.512-2.376,1.512C1.008,50.908,0,50.044,0,48.82c0-0.936,0.432-1.368,1.296-2.232   L21.17,26.858L14.185,7.272c-1.8-4.896-2.304-5.329-4.68-5.76c-0.072,0-0.648-0.144-0.648-0.72C8.856,0,9.793,0,10.153,0   c3.384,0,7.272,0.936,8.785,5.112l14.689,40.972c0.504,1.44,0.936,2.52,1.656,3.312c0.216,0.288,0.36,0.432,0.36,0.648   c0,0.216-0.072,0.648-0.792,0.72h-1.584c-1.944,0-2.664,0-3.816-1.584c-1.152-1.656-4.608-12.673-7.561-20.234L4.536,49.396z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 39 0 L 39 86 L 0 86 Z"
});
/**
 * 希腊字符data: mu
 */
define("char/data/greek/mu", [], {
    path: "M11.449,18.649c-0.504,2.016-1.008,4.032-1.008,6.121c0,3.888,1.728,6.265,5.329,6.265c5.833,0,9.289-6.553,9.361-6.913   c0.216-0.72,1.008-3.745,1.872-7.345l3.384-13.465c0.576-2.448,2.448-2.52,2.808-2.52c1.08,0,2.088,0.648,2.088,1.944   c0,0.432-0.72,3.168-1.08,4.824c-0.288,1.08-1.008,3.816-1.224,4.896l-2.016,7.777c-0.576,2.52-1.44,5.904-1.44,7.488   c0,1.44,0.216,3.313,2.16,3.313c2.953,0,4.249-4.249,5.473-8.929c0.216-1.008,0.288-1.296,1.008-1.296c0.216,0,0.864,0,0.864,0.72   c0,0.144-0.936,4.536-2.16,7.128c-1.152,2.304-2.808,3.96-5.329,3.96c-3.168,0-5.833-2.016-6.48-5.256   c-1.728,2.016-4.536,5.256-9.577,5.256c-1.44,0-4.681-0.288-6.985-2.232C5.761,41.476,4.824,45.22,4.537,45.868   c-0.144,0.216-1.008,1.512-2.521,1.512C0.792,47.38,0,46.516,0,45.436c0-0.144,0-0.288,0.216-1.152L10.585,2.592   C11.233,0.072,13.249,0,13.465,0c1.224,0,2.088,0.72,2.088,1.944c0,0.36-0.72,3.097-1.08,4.608L11.449,18.649z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 42 0 L 42 86 L 0 86 Z"
});
/**
 * 希腊字符data: nu
 */
define("char/data/greek/nu", [], {
    path: "M5.256,29.451c8.208-2.665,19.154-10.729,23.762-27.075C29.595,0.288,31.25,0,31.827,0c1.224,0,2.088,0.72,2.088,1.944   c0,0.648-1.944,10.441-11.449,19.298C15.049,28.154,7.201,30.962,2.16,31.827H1.152C0.72,31.827,0,31.755,0,30.962   c0-0.144,0.504-2.16,0.792-3.24l4.393-17.642c0.504-1.944,1.368-5.328,1.368-5.833c0-0.72-0.144-1.224-3.601-1.224   c-1.08,0-1.728,0-1.728-0.864c0-1.296,0.792-1.368,1.368-1.44C4.464,0.576,9.721,0,11.377,0c0.936,0,0.936,0.72,0.936,0.792   L5.256,29.451z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 37 0 L 37 86 L 0 86 Z"
});
/**
 * 希腊字符data: omega
 */
define("char/data/greek/omega", [], {
    path: "M38.235,22.826c-2.592,5.401-6.049,9.793-11.665,9.793c-4.464,0-7.273-3.384-7.921-7.561   c-2.592,3.96-5.977,7.561-11.089,7.561C1.656,32.619,0,27.29,0,22.322c0-6.553,2.736-15.121,6.408-20.45   C6.84,1.224,7.344,0.288,8.281,0.288c0.792,0,1.368,0.576,1.368,1.368c0,0.936-7.344,8.497-7.344,17.498   c0,4.032,1.512,8.28,6.264,8.28c4.537,0,7.417-3.24,9.793-6.625c0-2.592,0.864-7.272,1.656-8.712   c0.576-1.08,1.368-1.224,1.944-1.224c0.936,0,1.296,0.72,1.296,1.584c0,2.016-1.656,6.625-2.448,8.497   c0.648,3.889,2.88,6.48,6.985,6.48c3.384,0,6.048-2.448,8.208-5.544c2.232-3.312,3.6-7.417,3.6-10.297   c0-3.024-1.296-4.968-2.52-6.048c-0.72-0.648-1.08-1.44-1.08-2.16C36.003,1.728,37.947,0,39.819,0c1.584,0,2.88,1.8,2.88,5.041   C42.7,9.505,39.963,19.297,38.235,22.826z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 46 0 L 46 86 L 0 86 Z"
});
/**
 * 希腊字符data: phi
 */
define("char/data/greek/phi", [], {
    path: "M23.906,18.073c10.009,0.72,13.825,7.345,13.825,13.033c0,9.649-10.441,19.37-22.034,19.73l-2.736,10.729   c-0.216,1.008-0.648,2.736-0.792,2.88c-0.216,0.216-0.36,0.288-0.72,0.288c-0.36,0-0.864-0.072-0.864-0.792   c0-0.216,0.72-2.952,1.584-6.336c0.576-2.232,1.08-4.537,1.656-6.769C5.041,50.332,0,44.644,0,37.803   c0-9.793,10.585-19.37,22.034-19.73L26.21,1.44C26.498,0.216,26.57,0,27.291,0c0.864,0,0.864,0.648,0.864,0.72   c0,0.072-0.216,0.864-0.216,1.008L23.906,18.073z M21.602,19.658C10.873,20.594,4.68,30.674,4.68,39.315   c0,7.201,5.185,9.721,9.505,9.937L21.602,19.658z M16.058,49.252c10.801-0.864,16.993-11.161,16.993-19.658   c0-6.336-4.104-9.648-9.577-9.937L16.058,49.252z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 41 0 L 41 86 L 0 86 Z"
});
/**
 * 希腊字符data: pi
 */
define("char/data/greek/pi", [], {
    path: "M13.105,20.09c-0.936,3.6-0.936,3.744-1.944,7.057c-0.864,2.664-1.44,4.68-3.6,4.68c-0.936,0-2.088-0.576-2.088-1.944   c0-0.504,0-0.648,0.576-1.728c3.024-6.552,6.913-15.265,9.217-23.978h-4.104c-1.44,0-5.616,0-9.145,5.544   c-0.432,0.576-0.576,0.864-1.152,0.864C0,10.585,0,9.937,0,9.865c0-0.36,1.872-3.672,4.392-6.48C7.561,0,10.297,0,11.881,0h24.122   c1.368,0,2.88,0,2.88,1.728c0,2.448-2.592,2.448-3.528,2.448h-8.209c-0.792,3.745-1.296,7.633-1.296,11.449   c0,2.016,0,6.696,2.088,11.881c0.432,1.008,0.432,1.152,0.432,1.584c0,1.44-1.512,2.736-2.952,2.736c-1.08,0-1.872-0.432-2.592-3.6   c-0.576-2.448-0.576-4.393-0.576-5.473c0-4.824,0.648-7.92,3.024-18.578h-8.137L13.105,20.09z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 41 0 L 41 86 L 0 86 Z"
});
/**
 * 希腊字符data: psi
 */
define("char/data/greek/psi", [], {
    path: "M20.738,49.18c2.592,0,7.2,0,13.537-6.409c2.52-2.592,6.265-8.497,6.265-13.105c0-3.457-1.8-5.329-2.592-6.121   c-0.648-0.576-1.08-1.008-1.08-1.944c0-1.584,1.8-3.456,3.6-3.456c1.224,0,3.168,1.008,3.168,5.041   c0,3.168-1.584,9.433-2.232,11.233c-0.792,2.16-2.304,5.328-5.256,8.641c-6.769,7.705-13.105,7.705-15.77,7.705l-2.736,10.729   c-0.216,1.008-0.648,2.808-0.864,2.952c-0.144,0.288-0.504,0.288-0.648,0.288c-0.864,0-0.864-0.648-0.864-0.72   c0-0.216,1.44-6.048,1.656-6.84c1.008-3.816,1.008-3.96,1.584-6.553c-6.913-0.432-12.529-3.384-12.529-10.225   c0-1.224,0-3.096,3.457-12.169c0.936-2.52,1.656-4.32,1.656-6.192c0-2.304-1.224-2.304-1.8-2.304c-2.448,0-5.329,2.088-7.272,8.929   c-0.36,1.152-0.432,1.296-1.152,1.296c-0.144,0-0.864,0-0.864-0.72c0-0.648,2.664-11.089,9.504-11.089   c3.601,0,5.905,2.664,5.905,5.904c0,1.44-0.504,2.665-0.792,3.528c-3.889,10.081-3.889,11.953-3.889,13.393   c0,4.752,2.736,7.417,8.209,8.065L30.891,1.44C31.179,0.144,31.25,0,31.971,0c0.36,0,0.864,0.072,0.864,0.792   c0,0.36-0.144,0.792-0.216,1.08L20.738,49.18z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 47 0 L 47 86 L 0 86 Z"
});
/**
 * 希腊字符data: rho
 */
define("char/data/greek/rho", [], {
    path: "M7.272,15.985C9.433,7.201,16.994,0,23.978,0c5.256,0,10.009,4.104,10.009,11.737c0,10.729-9.289,20.882-17.713,20.882   c-3.384,0-5.688-1.944-7.128-4.824C7.201,35.571,4.896,45.22,4.537,45.868c-0.144,0.216-1.008,1.512-2.521,1.512   C0.792,47.38,0,46.516,0,45.436c0-0.144,0-0.288,0.216-1.152L7.272,15.985z M24.77,24.194c1.944-3.528,4.033-11.593,4.033-15.553   c0-4.968-2.304-7.057-4.969-7.057c-2.232,0-5.833,1.584-8.929,6.841c-1.584,2.88-2.304,5.472-4.32,13.537   c-0.216,0.936-0.576,2.376-0.576,2.664c0,0.648,1.152,6.409,6.193,6.409C18.938,31.035,22.394,28.73,24.77,24.194z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 36 0 L 36 86 L 0 86 Z"
});
/**
 * 希腊字符data: sigma
 */
define("char/data/greek/sigma", [], {
    path: "M26.642,4.176c2.232,3.168,2.232,6.625,2.232,7.849c0,11.089-9.577,19.802-18.074,19.802C4.248,31.827,0,26.786,0,20.45   C0,11.881,7.993,0,18.866,0h16.417c1.296,0,2.808,0,2.808,1.728c0,2.448-2.592,2.448-3.528,2.448H26.642z M20.377,24.122   c2.448-3.672,3.889-9.577,3.889-12.961c0-2.232-0.576-6.985-6.625-6.985c-2.448,0-6.769,1.008-9.793,5.977   c-2.521,4.249-3.384,10.153-3.384,12.313c0,5.185,2.88,7.777,6.409,7.777C13.681,30.243,17.569,28.371,20.377,24.122z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 40 0 L 40 86 L 0 86 Z"
});
/**
 * 希腊字符data: tau
 */
define("char/data/greek/tau", [], {
    path: "M14.401,28.802c-0.216,1.08-0.576,3.097-2.952,3.097c-1.584,0-2.088-1.152-2.088-1.944c0-0.288,0.432-1.8,0.72-2.664   l7.057-23.114h-5.977c-1.512,0-5.616,0-9.145,5.544c-0.432,0.576-0.576,0.864-1.152,0.864C0,10.585,0,9.937,0,9.865   c0-0.432,2.016-3.888,4.392-6.48C7.561,0,10.369,0,11.809,0h20.162c1.368,0,2.88,0,2.88,1.728c0,2.448-2.592,2.448-3.528,2.448   H19.226L14.401,28.802z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 38 0 L 38 86 L 0 86 Z"
});
/**
 * 希腊字符data: theta
 */
define("char/data/greek/theta", [], {
    path: "M8.641,51.556C2.088,51.556,0,43.563,0,36.795C0,20.306,11.089,0,21.098,0c7.345,0,8.641,10.009,8.641,14.761   C29.738,30.891,18.793,51.556,8.641,51.556z M7.057,26.93c-1.873,7.057-2.304,11.233-2.304,14.257c0,6.696,1.512,8.785,3.888,8.785   c3.096,0,5.833-3.528,8.353-8.425c2.736-5.185,4.249-11.305,5.041-14.617H7.057z M22.682,24.626   c1.729-7.129,2.304-10.801,2.304-14.329c0-4.104-0.432-8.713-3.96-8.713c-3.241,0-5.905,4.032-7.849,7.561   c-2.88,5.112-4.32,10.873-5.544,15.481H22.682z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 33 0 L 33 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写alpha
 */
define("char/data/greek/u-alpha", [], {
    path: "M0,51.336v-2.232c2.783-0.097,4.716-0.63,5.796-1.601c1.08-0.971,2.052-2.718,2.916-5.242L22.536,2.304   C23.063,0.769,23.76,0,24.624,0c0.911,0,1.631,0.769,2.16,2.304l14.4,41.76c0.816,2.338,1.62,3.763,2.412,4.274   s2.652,0.766,5.58,0.766h0.144v2.232l-8.064-0.209l-11.763,0.209v-2.232c3.84,0,5.76-0.836,5.76-2.508   c0-0.344-0.26-1.271-0.777-2.783c-0.518-1.512-1.103-3.217-1.754-5.118c-0.651-1.9-1.083-3.159-1.294-3.775H13.668   c-0.346,1.008-0.753,2.191-1.221,3.55c-0.467,1.359-0.816,2.377-1.051,3.057c-0.234,0.68-0.452,1.314-0.655,1.902   c-0.202,0.59-0.302,1.074-0.302,1.452c0,0.542,0.096,1.056,0.288,1.543c0.191,0.488,0.708,1.029,1.548,1.625   c0.839,0.596,1.955,0.947,3.348,1.055v2.232l-9.072-0.209L0,51.336z M14.437,32.688h16.226L22.562,9.055L14.437,32.688z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 53 0 L 53 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写beta
 */
define("char/data/greek/u-beta", [], {
    path: "M0,49.176v-2.232h1.224c2.543,0,4.212-0.229,5.004-0.687c0.792-0.457,1.188-1.48,1.188-3.07V5.988   c0-1.589-0.408-2.612-1.224-3.07c-0.817-0.457-2.496-0.686-5.04-0.686H0V0c5.231,0.144,8.736,0.215,10.512,0.215   c0.824,0,2.184-0.035,4.077-0.107C16.482,0.036,18.061,0,19.323,0h5.826c4.173,0,7.621,0.67,10.338,2.01   c2.233,1.1,3.993,2.561,5.28,4.378c1.285,1.818,1.929,3.733,1.929,5.742c0,2.698-1.126,5.093-3.376,7.188   c-2.251,2.095-5.182,3.456-8.792,4.082v0.144c4.025,0.386,7.359,1.771,10.003,4.153c2.644,2.383,3.965,5.188,3.965,8.413   c0,3.227-1.301,6.067-3.904,8.523c-2.604,2.457-5.858,3.923-9.762,4.4c-0.869,0.096-2.17,0.143-3.905,0.143h-7.23   c-1.398,0-3.014-0.035-4.846-0.107c-1.831-0.072-3.205-0.108-4.121-0.108C8.903,48.961,5.328,49.033,0,49.176z M13.464,22.752H23.4   c2.256,0,4.2-0.373,5.832-1.12c1.631-0.747,2.868-1.698,3.708-2.854c0.839-1.157,1.44-2.301,1.8-3.433   c0.36-1.131,0.54-2.203,0.54-3.215c0-2.312-0.66-4.371-1.98-6.178c-1.321-1.807-2.988-2.951-5.004-3.432   c-0.72-0.192-1.848-0.289-3.384-0.289h-6.48c-2.064,0-3.409,0.145-4.032,0.434c-0.625,0.289-0.936,1.132-0.936,2.528V22.752z    M13.464,43.91c0.047,1.349,0.372,2.191,0.972,2.529c0.6,0.338,1.715,0.505,3.348,0.505h7.632c4.223,0,7.416-1.468,9.576-4.407   c1.392-1.926,2.088-4.14,2.088-6.644c0-2.745-0.781-5.225-2.34-7.44c-1.56-2.215-3.661-3.516-6.3-3.901   c-0.625-0.096-1.537-0.144-2.736-0.144h-12.24V43.91z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 48 0 L 48 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写chi
 */
define("char/data/greek/u-chi", [], {
    path: "M0,49.176v-2.232c3.168-0.097,5.508-0.62,7.02-1.567c1.512-0.947,2.939-2.44,4.284-4.48   c6.377-9.558,9.998-14.945,10.862-16.157c-0.385-0.666-4.533-6.944-12.446-18.835C8.615,4.19,7.571,3.15,6.588,2.783   C5.604,2.417,3.839,2.232,1.296,2.232h-0.36V0L9,0.209L20.831,0v2.232c-2.869,0.243-4.303,1.017-4.303,2.324   c0,0.387,1.194,2.421,3.583,6.1c2.124,3.211,4.032,6.086,5.723,8.626c4.432-6.591,6.983-10.384,7.651-11.378   c0.668-0.994,1.003-1.784,1.003-2.371c0-0.342-0.072-0.698-0.216-1.064s-0.565-0.794-1.26-1.283   c-0.697-0.488-1.62-0.806-2.772-0.954V0l10.224,0.209L47.52,0v2.232c-0.817,0-1.573,0.045-2.268,0.133   c-0.696,0.089-1.321,0.178-1.872,0.265c-0.552,0.089-1.092,0.255-1.62,0.499c-0.528,0.244-0.96,0.422-1.296,0.532   c-0.336,0.11-0.732,0.366-1.188,0.764c-0.457,0.399-0.781,0.665-0.972,0.798c-0.192,0.133-0.49,0.498-0.893,1.097   c-0.402,0.599-0.664,0.988-0.785,1.168c-0.122,0.18-0.416,0.62-0.885,1.318c-0.47,0.699-0.758,1.127-0.865,1.287   c-4.689,7.009-7.229,10.786-7.62,11.333l3.934,5.929l10.322,15.558c1.152,1.76,2.207,2.872,3.168,3.336   c0.959,0.464,2.903,0.696,5.832,0.696v2.232l-7.92-0.209l-11.994,0.209v-2.232c2.878-0.244,4.318-1.003,4.318-2.277   c0-0.146-0.024-0.281-0.072-0.404c-0.047-0.121-0.132-0.317-0.251-0.587c-0.119-0.269-0.272-0.543-0.457-0.824   c-0.186-0.28-0.45-0.681-0.794-1.201c-0.344-0.52-0.695-1.051-1.053-1.592c-0.357-0.541-0.854-1.292-1.488-2.254   c-0.634-0.96-1.263-1.913-1.885-2.853s-1.41-2.132-2.363-3.574c-0.953-1.442-1.941-2.939-2.968-4.492   c-6.7,9.805-10.171,14.967-10.41,15.484c-0.144,0.362-0.216,0.723-0.216,1.085s0.072,0.737,0.216,1.124   c0.144,0.388,0.564,0.84,1.26,1.356c0.695,0.518,1.62,0.853,2.772,1.008v2.232L6.912,48.966L0,49.176z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 53 0 L 53 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写delta
 */
define("char/data/greek/u-delta", [], {
    path: "M54.148,49.973c0.36,0.72,0.36,0.864,0.36,0.936c0,0.648-0.504,0.648-1.656,0.648H1.656c-1.152,0-1.656,0-1.656-0.648   c0-0.144,0.144-0.504,0.432-1.08l24.842-48.46C25.778,0.36,26.21,0,27.218,0c1.152,0,1.512,0.36,2.16,1.656L54.148,49.973z    M4.896,46.012H44.86L24.842,7.129L4.896,46.012z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 57 0 L 57 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写upsilon
 */
define("char/data/greek/u-epsilon", [], {
    path: "M0,48.96v-2.232h1.008c2.639,0,4.367-0.216,5.184-0.65c0.815-0.433,1.224-1.468,1.224-3.106V5.988   c0-1.588-0.409-2.612-1.224-3.07C5.375,2.461,3.719,2.232,1.224,2.232H0V0l11.376,0.209L18.504,0h22.104l2.016,16.272h-1.67   c-0.25-1.656-0.446-2.946-0.586-3.87c-0.14-0.923-0.416-2.027-0.828-3.31c-0.412-1.283-0.909-2.274-1.491-2.976   c-0.583-0.702-1.382-1.379-2.4-2.033c-1.02-0.653-2.232-1.126-3.638-1.416c-1.406-0.291-3.565-0.436-6.475-0.436h-6.111   c-2.667,0-4.269,0.193-4.802,0.581c-0.533,0.387-0.8,1.644-0.8,3.771v15.88h5.283c2.412,0,4.221-0.193,5.427-0.581   c1.206-0.387,2.122-1.186,2.75-2.396c0.531-1.114,0.796-2.953,0.796-5.52h1.8v19.224h-1.8v-0.436c0-1.064-0.037-1.888-0.109-2.468   c-0.072-0.581-0.253-1.331-0.542-2.251c-0.29-0.92-0.82-1.635-1.592-2.143c-0.771-0.508-1.785-0.859-3.04-1.053   c-0.82-0.097-2.026-0.146-3.618-0.146h-5.355v18.998c0.047,1.444,0.396,2.312,1.044,2.601s2.22,0.433,4.716,0.433h6.12   c2.016,0,3.672-0.072,4.968-0.216c1.296-0.144,2.664-0.481,4.104-1.011s2.664-1.385,3.672-2.565   c1.008-1.179,1.824-2.709,2.448-4.588c0.576-1.685,1.152-4.357,1.728-8.018h1.872l-3.024,18.63H18.504l-7.172-0.216L0,48.96z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 47 0 L 47 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写eta
 */
define("char/data/greek/u-eta", [], {
    path: "M0,49.176v-2.232h1.236c2.567,0,4.251-0.229,5.051-0.687c0.8-0.457,1.201-1.48,1.201-3.07V5.988   c0-1.589-0.413-2.612-1.237-3.07c-0.823-0.457-2.52-0.686-5.088-0.686H0V0l9.174,0.209L21.384,0v2.232h-0.655   c-3.2,0-5.138,0.267-5.816,0.797c-0.678,0.532-1.017,1.862-1.017,3.988v15.518h21.6V6.365c0-1.836-0.4-2.985-1.2-3.444   c-0.8-0.459-2.678-0.689-5.633-0.689h-0.654V0l12.209,0.209L49.392,0v2.232h-1.236c-2.52,0-4.193,0.229-5.017,0.686   c-0.823,0.458-1.235,1.481-1.235,3.07v37.199c0,1.589,0.424,2.613,1.272,3.07c0.849,0.458,2.581,0.687,5.198,0.687h1.018v2.232   l-12.187-0.209l-9.197,0.209v-2.232h0.727c3.198,0,5.125-0.277,5.779-0.83c0.654-0.554,0.982-1.963,0.982-4.227V24.768h-21.6   v18.709c0.048,1.493,0.496,2.443,1.344,2.853c0.849,0.41,2.654,0.614,5.417,0.614h0.727v2.232L9.197,48.966L0,49.176z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写gamma
 */
define("char/data/greek/u-gamma", [], {
    path: "M40.323,16.202h-2.016C37.155,6.48,35.643,2.232,25.13,2.232h-7.776c-3.384,0-3.528,0.504-3.528,2.952v38.019   c0,2.665,0.288,3.528,6.84,3.528h2.304v2.232c-2.52-0.216-9.073-0.216-11.953-0.216c-3.313,0-7.777,0-11.017,0.216v-2.232h1.656   c5.544,0,5.688-0.792,5.688-3.456V5.688c0-2.664-0.144-3.456-5.688-3.456H0V0h38.308L40.323,16.202z",
    offset: {
        x: 0,
        y: 15.5
    },
    box: "M 0 0 L 41 0 L 41 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写iota
 */
define("char/data/greek/u-iota", [], {
    path: "M0,49.176v-2.232h1.09c2.712,0,4.504-0.229,5.377-0.687c0.872-0.457,1.309-1.504,1.309-3.142V6.06    c0-1.637-0.424-2.684-1.272-3.142C5.656,2.461,3.899,2.232,1.235,2.232H0V0l9.318,0.209L21.96,0v2.232h-1.235    c-2.666,0-4.421,0.229-5.27,0.686c-0.849,0.458-1.271,1.505-1.271,3.142v37.055c0,1.638,0.423,2.686,1.271,3.142    c0.848,0.458,2.652,0.687,5.415,0.687h1.09v2.232L9.342,48.966L0,49.176z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 25 0 L 25 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写kappa
 */
define("char/data/greek/u-kappa", [], {
    path: "M0,49.176v-2.232h1.236c2.52,0,4.192-0.229,5.015-0.687c0.824-0.457,1.237-1.48,1.237-3.07V5.988   c0-1.589-0.413-2.612-1.237-3.07c-0.823-0.457-2.52-0.686-5.088-0.686H0V0l9.174,0.209L21.384,0v2.232h-0.872   c-2.812,0-4.617,0.229-5.417,0.686c-0.8,0.457-1.199,1.456-1.199,2.996v22.454L35.567,7.776c1.202-1.265,1.802-2.285,1.802-3.063   c0-0.292-0.047-0.559-0.14-0.802c-0.092-0.243-0.219-0.45-0.381-0.621c-0.162-0.169-0.335-0.316-0.52-0.438   s-0.394-0.218-0.628-0.292c-0.234-0.072-0.422-0.132-0.566-0.182c-0.144-0.048-0.313-0.073-0.504-0.073l-0.216-0.073V0   l10.153,0.209L49.608,0v2.232C47.927,2.33,46.451,2.586,45.18,3c-1.272,0.415-2.581,1.146-3.924,2.195   c-1.344,1.049-2.555,2.089-3.631,3.121c-1.078,1.033-2.71,2.596-4.897,4.693c-2.188,2.097-4.269,4.089-6.239,5.978L42.68,42.912   c1.248,1.809,2.387,2.933,3.42,3.373c1.032,0.44,2.556,0.659,4.572,0.659v2.232l-7.056-0.209l-11.504,0.209v-2.232   c2.155-0.146,3.423-0.632,3.803-1.46c0.095-0.291,0.142-0.583,0.142-0.875c0-0.681-0.428-1.679-1.282-2.993   c-7.761-11.424-11.931-17.619-12.509-18.583c-4.77,4.464-7.326,6.914-7.67,7.351c-0.429,0.675-0.663,1.567-0.701,2.675v10.052   c0,1.688,0.424,2.749,1.272,3.183s2.701,0.65,5.561,0.65h0.655v2.232L9.197,48.966L0,49.176z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 53 0 L 53 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写lambda
 */
define("char/data/greek/u-lambda", [], {
    path: "M9.721,44.068c-0.36,1.008-0.36,1.152-0.36,1.512c0,2.016,1.873,3.672,5.401,3.744v2.232   c-3.745-0.144-4.969-0.216-7.993-0.216c-2.304,0-4.465,0-6.769,0.216v-2.232c5.041,0,6.553-2.808,7.273-5.04L21.602,1.512   C21.89,0.648,22.106,0,23.258,0c1.152,0,1.368,0.576,1.728,1.512L39.964,46.3c1.008,3.024,2.232,3.024,6.625,3.024v2.232   c-5.544-0.216-5.617-0.216-9.001-0.216c-3.312,0-6.984,0-10.225,0.216v-2.232c2.016,0,5.976,0,5.976-2.232   c0-0.288,0-0.432-0.36-1.368L21.026,10.153L9.721,44.068z",
    offset: {
        x: 0,
        y: 14
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写mu
 */
define("char/data/greek/u-mu", [], {
    path: "M0,49.176v-2.232c0.855,0,1.557-0.024,2.104-0.072c0.547-0.047,1.188-0.192,1.925-0.433   c0.736-0.241,1.319-0.553,1.746-0.938c0.428-0.385,0.797-0.939,1.106-1.662c0.308-0.722,0.463-1.613,0.463-2.673V5.988   c0-1.589-0.405-2.612-1.212-3.07C5.323,2.461,3.66,2.232,1.141,2.232H0V0h10.906c1.521,0,2.472,0.156,2.852,0.468   c0.38,0.313,0.926,1.38,1.639,3.204l14.874,38.257l1.771-4.595l13.03-33.778c0.768-1.858,1.356-2.916,1.764-3.172   C47.243,0.128,48.624,0,50.976,0h9.648v2.232h-1.201c-2.448,0-4.071,0.229-4.871,0.686c-0.801,0.458-1.2,1.481-1.2,3.07v37.199   c0,1.589,0.412,2.613,1.235,3.07c0.823,0.458,2.506,0.687,5.048,0.687h0.989v2.232l-8.895-0.209l-11.698,0.209v-2.232h0.989   c2.635,0,4.341-0.229,5.118-0.687c0.776-0.457,1.165-1.552,1.165-3.286V2.16h-0.072c-0.684,1.916-1.367,3.688-2.051,5.316   l-15.004,38.9l-0.156,0.405c-0.104,0.269-0.177,0.459-0.219,0.571c-0.044,0.113-0.137,0.277-0.281,0.495s-0.265,0.387-0.36,0.508   c-0.097,0.122-0.229,0.229-0.396,0.327c-0.169,0.097-0.349,0.145-0.54,0.145c-0.625,0-1.25-0.819-1.874-2.459L11.454,7.85   C10.25,4.825,9.6,3.144,9.504,2.808v38.583c0.047,2.116,0.676,3.559,1.889,4.328c1.213,0.77,3.031,1.178,5.456,1.225v2.232   l-7.791-0.209L0,49.176z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 64 0 L 64 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写nu
 */
define("char/data/greek/u-nu", [], {
    path: "M0,49.176v-2.232c1.045-0.047,1.876-0.108,2.495-0.18c0.618-0.072,1.366-0.277,2.246-0.614s1.533-0.903,1.961-1.697   c0.427-0.794,0.643-1.818,0.643-3.07V2.665C6.25,2.473,3.803,2.329,0,2.232V0h11.688c1.052,0,1.77,0.168,2.152,0.504   c0.382,0.336,1.171,1.368,2.366,3.096l23.539,34.708V8.172c0-1.787-0.357-3.09-1.07-3.912c-1.094-1.255-3.185-1.932-6.274-2.028V0   l7.671,0.209L49.248,0v2.232h-0.214c-1.569,0-2.865,0.181-3.887,0.542C44.126,3.135,43.4,3.64,42.973,4.291   c-0.427,0.65-0.713,1.252-0.855,1.806c-0.143,0.553-0.214,1.216-0.214,1.987v38.572c0,1.495-0.369,2.242-1.104,2.242   c-0.491,0-1.203-0.603-2.135-1.809L13.029,9.424c-1.535-2.333-2.71-4.058-3.525-5.176v37.215c0.047,2.116,0.688,3.547,1.925,4.292   c1.235,0.745,3.042,1.142,5.419,1.189v2.232l-7.791-0.209L0,49.176z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 53 0 L 53 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写omega
 */
define("char/data/greek/u-omega", [], {
    path: "M0,39.096h1.8c0.672,3.265,1.176,5.137,1.512,5.616c0.479,0.816,1.728,1.272,3.744,1.368c0.432,0,1.008,0,1.728,0h4.824   c-0.576-2.207-1.608-4.583-3.096-7.128c-1.489-2.543-2.929-4.763-4.32-6.66c-1.393-1.896-2.64-4.14-3.744-6.732   C1.343,22.968,0.792,20.448,0.792,18c0-4.896,2.112-9.12,6.336-12.672C11.351,1.776,16.56,0,22.752,0s11.412,1.764,15.66,5.292   C42.66,8.82,44.784,13.057,44.784,18c0,2.448-0.553,4.957-1.656,7.524c-1.104,2.568-2.34,4.8-3.708,6.696   c-1.368,1.897-2.808,4.129-4.32,6.696c-1.512,2.569-2.556,4.957-3.132,7.164h4.926c2.705,0,4.333-0.252,4.889-0.756   s1.123-2.099,1.702-4.788c0.097-0.623,0.193-1.104,0.29-1.44h1.8l-2.31,11.664H31.689c-0.627,0-1.085-0.096-1.375-0.288   c-0.291-0.191-0.435-0.623-0.435-1.296c0-3.264,1.248-8.399,3.744-15.408C36.119,26.76,37.368,21.504,37.368,18   c0-5.231-1.488-9.276-4.464-12.132c-2.977-2.855-6.36-4.284-10.152-4.284c-3.744,0-7.104,1.416-10.08,4.248   C9.695,8.665,8.208,12.72,8.208,18c0,3.553,1.248,8.82,3.744,15.804c2.495,6.984,3.744,12.085,3.744,15.3   c0,0.768-0.144,1.236-0.432,1.404c-0.288,0.169-0.913,0.252-1.872,0.252H2.376L0,39.096z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写omicron
 */
define("char/data/greek/u-omicron", [], {
    path: "M7.153,44.892C2.384,39.924,0,33.744,0,26.352C0,18.96,2.372,12.72,7.117,7.632C11.862,2.544,17.469,0,23.94,0   c6.518,0,12.148,2.544,16.894,7.632c4.745,5.088,7.118,11.329,7.118,18.72c0,7.441-2.385,13.633-7.154,18.576   c-4.769,4.944-10.364,7.416-16.786,7.416C17.541,52.344,11.922,49.86,7.153,44.892z M7.416,25.416c0,4.513,0.541,8.473,1.624,11.88   c1.083,3.409,2.489,6.012,4.221,7.812c1.731,1.8,3.498,3.132,5.303,3.996c1.805,0.864,3.62,1.296,5.448,1.296   c1.78,0,3.571-0.432,5.376-1.296c1.804-0.864,3.571-2.208,5.304-4.032c1.731-1.824,3.139-4.452,4.222-7.884   c1.082-3.432,1.623-7.404,1.623-11.916c0-4.224-0.541-7.944-1.623-11.16c-1.083-3.215-2.49-5.663-4.222-7.344   c-1.732-1.679-3.5-2.916-5.304-3.708c-1.805-0.792-3.621-1.188-5.447-1.188c-1.828,0-3.645,0.396-5.449,1.188   c-1.804,0.792-3.559,2.041-5.267,3.744c-1.708,1.705-3.103,4.165-4.185,7.38C7.957,17.4,7.416,21.144,7.416,25.416z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 51 0 L 51 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写phi
 */
define("char/data/greek/u-phi", [], {
    path: "M25.418,9.721c11.521,0.864,19.73,7.489,19.73,14.905c0,7.129-7.993,13.969-19.73,14.833v3.96   c0,2.665,0.288,3.528,6.841,3.528h2.304v2.232c-2.521-0.216-9.289-0.216-12.169-0.216c-2.88,0-9.649,0-12.169,0.216v-2.232h2.304   c6.553,0,6.841-0.864,6.841-3.528v-3.96C7.561,38.307,0,31.611,0,24.554c0-6.769,7.201-13.609,19.37-14.833V5.76   c0-2.664-0.288-3.528-6.841-3.528h-2.304V0c2.521,0.216,9.289,0.216,12.169,0.216c2.88,0,9.648,0,12.169-0.216v2.232h-2.304   c-6.553,0-6.841,0.864-6.841,3.528V9.721z M19.37,11.593c-8.569,1.08-12.241,5.833-12.241,13.033   c0,7.777,4.393,12.025,12.241,12.961V11.593z M25.418,37.659c7.777-0.864,12.601-4.896,12.601-13.105   c0-8.929-5.76-12.313-12.601-13.033V37.659z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 47 0 L 47 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写Pi
 */
define("char/data/greek/u-pi", [], {
    path: "M13.825,43.276c0,2.664,0.144,3.456,5.688,3.456h1.656v2.232c-3.24-0.216-7.273-0.216-10.585-0.216   c-3.313,0-7.345,0-10.585,0.216v-2.232h1.656c5.544,0,5.688-0.792,5.688-3.456V5.688c0-2.664-0.144-3.456-5.688-3.456H0V0h49.972   v2.232h-1.656c-5.544,0-5.688,0.792-5.688,3.456v37.587c0,2.664,0.144,3.456,5.688,3.456h1.656v2.232   c-3.24-0.216-7.272-0.216-10.585-0.216c-3.312,0-7.345,0-10.585,0.216v-2.232h1.656c5.544,0,5.688-0.792,5.688-3.456V2.232H13.825   V43.276z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写psi
 */
define("char/data/greek/u-psi", [], {
    path: "M21.386,5.76c0-2.664-0.288-3.528-6.841-3.528h-2.304V0c2.521,0.216,9.289,0.216,12.169,0.216c2.88,0,9.648,0,12.169-0.216   v2.232h-2.304c-6.553,0-6.841,0.864-6.841,3.528v31.683c8.425-1.8,10.513-10.153,10.585-17.066   c0.072-9.648,3.24-11.161,6.769-11.161h2.521c1.152,0,1.944,0,1.944,0.936c0,0.72-0.72,0.792-1.08,0.864   c-4.032,0.576-4.104,6.84-4.104,7.849c-0.072,7.92-2.16,18.865-16.634,20.594v3.96c0,2.665,0.288,3.528,6.841,3.528h2.304v2.232   c-2.521-0.216-9.289-0.216-12.169-0.216c-2.88,0-9.649,0-12.169,0.216v-2.232h2.304c6.553,0,6.841-0.864,6.841-3.528v-3.96   c-5.473-0.72-9.721-2.736-12.817-7.201c-2.808-4.032-3.384-9.577-3.384-11.521c0-2.88-0.072-9.145-3.816-9.721   C0.648,10.945,0,10.873,0,10.153c0-0.936,0.792-0.936,1.944-0.936h2.521c1.368,0,3.6,0,5.185,2.664   c1.44,2.592,1.584,6.265,1.584,7.417c0,3.816,0.072,15.842,10.153,18.146V5.76z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写rho
 */
define("char/data/greek/u-rho", [], {
    path: "M0,49.176v-2.232h1.201c2.494,0,4.13-0.229,4.906-0.687c0.776-0.457,1.165-1.48,1.165-3.07V5.988   c0-1.589-0.4-2.612-1.2-3.07C5.271,2.461,3.624,2.232,1.13,2.232H0V0c6.39,0.144,9.918,0.215,10.586,0.215   c0.767,0,2.088-0.035,3.96-0.107C16.418,0.036,17.954,0,19.153,0h4.968c4.608,0,8.351,0.838,11.231,2.513   c1.968,1.149,3.624,2.669,4.968,4.56c1.343,1.891,2.016,4.009,2.016,6.355c0,3.418-1.557,6.451-4.669,9.098   c-3.112,2.647-7.373,3.97-12.783,3.97H13.896v16.112c0,1.927,0.376,3.132,1.13,3.614c0.752,0.481,2.588,0.722,5.507,0.722h0.635   v2.232L9.04,48.966L0,49.176z M13.68,24.552h8.755c2.679,0,4.892-0.288,6.637-0.866c1.746-0.578,3.013-1.433,3.803-2.565   c0.79-1.132,1.328-2.275,1.614-3.431c0.287-1.156,0.431-2.6,0.431-4.333c0-1.637-0.121-3.022-0.359-4.154   c-0.24-1.132-0.754-2.274-1.543-3.431c-0.79-1.155-2.045-2.034-3.767-2.636c-1.723-0.602-3.923-0.903-6.602-0.903h-3.947   c-2.2,0-3.588,0.181-4.162,0.542c-0.574,0.361-0.861,1.191-0.861,2.492V24.552z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 45 0 L 45 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写Sigma
 */
define("char/data/greek/u-sigma", [], {
    path: "M23.402,23.474c0.504,0.648,0.504,1.008,0.504,1.08c0,0.288,0,0.432-0.72,1.152L4.68,46.084h20.522   c12.097,0,16.489-2.16,17.93-13.969h2.016L43.132,49.18H1.944c-1.152,0-1.944,0-1.944-0.936c0-0.288,0.144-0.432,0.792-1.152   l17.642-19.37L0,1.584C0,0,0.36,0,1.944,0h41.188l2.016,16.201h-2.016C41.691,4.032,36.651,2.232,25.418,2.232H8.353L23.402,23.474   z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 48 0 L 48 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写tau
 */
define("char/data/greek/u-tau", [], {
    path: "M0,16.272L1.315,0h14.555l7.494,0.216L30.858,0h14.483l1.315,16.272h-1.8c-0.483-4.824-1.038-7.984-1.663-9.48   c-1.253-2.653-3.879-4.149-7.878-4.488c-0.675-0.047-1.398-0.072-2.169-0.072h-2.241c-1.638,0-2.771,0.181-3.397,0.542   c-0.627,0.361-0.939,1.24-0.939,2.636v37.057c0,1.782,0.519,2.902,1.558,3.359c1.04,0.458,3.517,0.687,7.432,0.687h1.522v2.232   l-16.066-0.209L9.648,48.744v-2.232h1.522c3.915,0,6.391-0.216,7.431-0.65c1.04-0.433,1.559-1.565,1.559-3.395V5.41   c0-0.385-0.025-0.721-0.073-1.01s-0.12-0.542-0.217-0.759c-0.097-0.216-0.192-0.397-0.289-0.541   c-0.097-0.144-0.253-0.265-0.469-0.361c-0.217-0.097-0.374-0.181-0.47-0.253c-0.097-0.072-0.313-0.121-0.65-0.145   c-0.337-0.024-0.566-0.047-0.686-0.072c-0.122-0.023-0.386-0.036-0.795-0.036c-0.41,0-0.663,0-0.758,0H13.51   c-1.688,0-3.133,0.109-4.338,0.327C7.967,2.775,6.944,3.197,6.101,3.825c-0.844,0.628-1.506,1.23-1.988,1.809   c-0.481,0.578-0.88,1.519-1.192,2.821C2.607,9.758,2.39,10.905,2.27,11.894c-0.121,0.99-0.277,2.449-0.469,4.378H0z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 49 0 L 49 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写theta
 */
define("char/data/greek/u-theta", [], {
    path: "M24.626,52.348C11.233,52.348,0,40.971,0,26.354S11.161,0,24.626,0s24.626,11.665,24.626,26.354   C49.252,40.971,38.019,52.348,24.626,52.348z M42.339,26.354C42.339,8.641,32.403,1.8,24.626,1.8   c-7.705,0-17.713,6.769-17.713,24.554s10.297,24.05,17.713,24.05C32.115,50.404,42.339,44.14,42.339,26.354z M36.147,23.33v-2.448   h2.016v10.441h-2.016v-2.448H13.105v2.448h-2.016V20.881h2.016v2.448H36.147z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写Upsilon
 */
define("char/data/greek/u-upsilon", [], {
    path: "M27.866,45.003c0,2.665,0.288,3.528,6.841,3.528h2.304v2.232c-2.521-0.216-9.433-0.216-12.385-0.216s-9.865,0-12.385,0.216   v-2.232h2.304c6.553,0,6.841-0.864,6.841-3.528V25.562c0-5.4-1.44-20.018-11.809-20.018c-3.384,0-6.913,1.728-7.345,5.472   c-0.072,0.792-0.144,1.296-1.08,1.296C0,12.313,0,11.593,0,11.017C0,6.625,3.096,0,9.649,0c11.593,0,14.329,14.257,14.905,17.497   h0.144C25.274,14.257,28.01,0,39.604,0c6.552,0,9.648,6.552,9.648,11.017c0,0.576,0,1.296-1.152,1.296   c-0.936,0-1.008-0.576-1.08-1.152c-0.432-4.104-4.249-5.616-7.345-5.616c-10.081,0-11.809,13.897-11.809,20.018V45.003z",
    offset: {
        x: 0,
        y: 15
    },
    box: "M 0 0 L 52 0 L 52 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写Xi
 */
define("char/data/greek/u-xi", [], {
    path: "M0,36.651h2.016c0.072,2.088,0.288,5.185,0.936,6.336c0.432,0.648,5.185,0.648,5.833,0.648h25.49   c1.656,0,5.473,0,5.905-0.792c0.648-1.224,0.792-4.393,0.864-6.193h2.016l-0.648,12.097H0.648L0,36.651z M42.628,11.305h-2.016   c-0.072-1.872-0.288-4.824-1.008-5.616c-0.432-0.576-5.256-0.576-5.4-0.576H8.857c-0.792,0-5.112,0-5.473,0.648   c-0.648,0.936-0.792,3.672-0.936,5.544H0.432L1.08,0h40.899L42.628,11.305z M33.843,20.81v-3.672h2.017v12.457h-2.017v-3.672H9.217   v3.672H7.201V17.137h2.016v3.672H33.843z",
    offset: {
        x: 0,
        y: 17
    },
    box: "M 0 0 L 45 0 L 45 86 L 0 86 Z"
});
/**
 * 希腊字符data: 大写zeta
 */
define("char/data/greek/u-zeta", [], {
    path: "M0,47.808c0-0.527,0.384-1.392,1.152-2.592L28.368,2.232h-9.386c-2.648,0-4.778,0.133-6.39,0.398   c-1.613,0.266-3.213,0.857-4.802,1.773c-1.588,0.917-2.792,2.34-3.61,4.271c-0.819,1.931-1.324,4.463-1.517,7.599h-1.8L1.625,0   h31.446c1.678,0,2.519,0.457,2.519,1.369c0.033,0.457-0.129,0.967-0.487,1.533c-0.358,0.567-1.187,1.882-2.489,3.945   c-1.289,2.029-2.388,3.77-3.295,5.219L7.483,46.656h11.174c7.163,0,11.747-2.088,13.753-6.264   c0.907-1.823,1.551-5.328,1.934-10.512h1.8l-1.177,19.296H2.159C0.719,49.176,0,48.72,0,47.808z",
    offset: {
        x: 0,
        y: 16
    },
    box: "M 0 0 L 39 0 L 39 86 L 0 86 Z"
});
/**
 * 希腊字符data: upsilon
 */
define("char/data/greek/upsilon", [], {
    path: "M29.811,24.122c-1.656,2.592-5.977,8.497-12.457,8.497c-5.257,0-11.521-2.016-11.521-9.505c0-2.16,0.576-5.041,3.6-13.033   c0.936-2.52,1.656-4.32,1.656-6.192c0-2.304-1.224-2.304-1.8-2.304c-2.448,0-5.329,2.088-7.272,8.929   c-0.36,1.152-0.432,1.296-1.152,1.296c-0.144,0-0.864,0-0.864-0.72C0,10.441,2.664,0,9.504,0c3.601,0,5.905,2.664,5.905,5.904   c0,1.368-0.432,2.592-0.792,3.384c-2.952,7.921-4.104,11.665-4.104,14.689c0,1.512,0.288,3.672,1.8,5.256   c1.512,1.512,3.888,1.8,5.256,1.8c9.073,0,14.977-14.761,14.977-19.514c0-3.457-1.8-5.329-2.592-6.121   c-0.648-0.576-1.08-1.008-1.08-1.944c0-1.584,1.8-3.456,3.6-3.456c1.224,0,3.168,1.008,3.168,5.041   C35.643,6.192,34.851,16.057,29.811,24.122z",
    offset: {
        x: 0,
        y: 33
    },
    box: "M 0 0 L 39 0 L 39 86 L 0 86 Z"
});
/**
 * 希腊字符data: epsilon变体
 */
define("char/data/greek/varepsilon", [], {
    path: "M1.872,24.698c0,5.113,6.121,6.193,10.513,6.193c8.641,0,10.369-2.665,11.377-4.32c0.144-0.216,0.36-0.504,0.72-0.504   c0.432,0,0.792,0.288,0.792,0.72c0,1.08-4.033,7.417-13.537,7.417C4.104,34.203,0,29.811,0,25.13c0-3.312,2.304-7.345,6.553-9.721   c-0.288-0.216-2.88-2.016-2.88-5.112C3.672,4.824,11.449,0,19.73,0c4.896,0,9.289,2.736,9.289,4.104   c0,1.008-1.008,1.944-1.944,1.944c-0.504,0-0.648-0.144-1.44-0.72c-2.88-2.016-5.473-2.016-6.625-2.016   c-6.48,0-13.537,2.592-13.537,6.985c0,1.944,1.224,3.312,2.88,4.176c2.664-1.224,5.184-1.368,6.696-1.368   c2.736,0,5.256,0.216,5.256,1.944c0,2.232-3.96,2.232-5.833,2.232c-1.728,0-3.816,0-6.192-1.008   C3.889,18.434,1.872,22.25,1.872,24.698z M14.473,15.697c2.736,0,2.88-0.072,3.96-0.576c-1.296-0.36-1.584-0.432-3.384-0.432   c-1.224,0-2.736,0.072-4.392,0.648C12.025,15.697,12.889,15.697,14.473,15.697z",
    offset: {
        x: 0,
        y: 32
    },
    box: "M 0 0 L 32 0 L 32 86 L 0 86 Z"
});
/**
 * 希腊字符data: xi
 */
define("char/data/greek/xi", [], {
    path: "M10.369,27.435c-3.384-1.944-4.68-4.968-4.68-7.633c0-5.544,4.896-11.305,12.601-13.465   c-0.072-0.288-0.504-1.368-0.504-2.809c0-0.216,0-3.528,1.296-3.528c0.504,0,0.864,0.36,0.864,0.936c0,0.144-0.36,1.656-0.36,2.665   c0,1.224,0.144,1.728,0.36,2.376c1.872-0.36,3.6-0.36,4.536-0.36c2.808,0,5.977,0.072,5.977,1.944c0,2.232-4.608,2.232-6.409,2.232   c-1.656,0-3.312,0-4.608-1.584c-5.4,2.664-7.993,8.208-7.993,12.241c0,1.368,0.288,3.745,2.16,5.617   c2.665-0.864,4.752-0.864,6.049-0.864c2.808,0,5.904,0.144,5.904,1.944c0,2.232-4.536,2.232-6.696,2.232   c-1.512,0-3.672,0-6.337-0.937c-6.048,3.024-8.856,9.289-8.856,12.241c0,3.024,2.16,5.112,5.4,6.409l4.32,1.728   c1.512,0.504,2.952,1.08,4.393,1.656c0.936,0.36,3.384,1.296,4.392,1.656c0.792,0.36,3.457,1.656,3.457,5.112   c0,3.528-3.024,7.705-7.489,7.705c-4.032,0-7.849-2.592-7.849-3.456c0-0.288,0.144-0.792,0.72-0.792c0.288,0,0.36,0.072,0.792,0.36   c0.792,0.576,3.168,2.304,6.336,2.304c2.232,0,3.528-2.16,3.528-3.816c0-2.088-1.44-2.592-2.521-3.096l-8.712-3.384   c-5.4-2.016-6.049-2.304-8.353-4.681C1.944,48.172,0,46.156,0,42.7c0-2.592,1.584-9.361,9.433-14.545L10.369,27.435z    M19.082,27.794c3.313,0,4.032-0.288,4.608-0.576c-1.296-0.36-1.584-0.432-4.104-0.432c-0.864,0-2.448,0-4.104,0.432   C16.777,27.794,17.425,27.794,19.082,27.794z M24.122,8.209c3.168,0,3.888-0.36,4.464-0.576c-1.296-0.36-1.584-0.432-4.032-0.432   c-0.792,0-2.304,0-3.457,0.36C21.89,8.209,22.754,8.209,24.122,8.209z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 33 0 L 33 86 L 0 86 Z"
});
/**
 * 希腊字符data: zeta
 */
define("char/data/greek/zeta", [], {
    path: "M3.96,36.147c0,1.368,0,5.472,3.024,8.208c1.728,1.512,2.88,1.872,8.641,3.816c4.249,1.44,5.617,1.872,6.841,3.24   c0.576,0.576,1.944,2.088,1.944,4.824c0,4.104-3.384,8.713-7.849,8.713c-3.816,0-6.913-2.736-6.913-3.456   c0-0.504,0.36-0.792,0.72-0.792c0.288,0,0.36,0.072,0.864,0.504c1.512,1.296,3.456,2.16,5.328,2.16   c2.665,0,4.033-2.808,4.033-4.752c0-3.384-2.953-4.393-4.464-4.896c-2.088-0.72-2.232-0.72-4.393-1.512   C6.552,50.477,0,48.316,0,38.164C0,24.194,11.377,10.945,18.938,7.129c-0.576-1.08-0.792-2.376-0.792-3.601   c0-0.216,0-3.528,1.296-3.528c0.504,0,0.864,0.36,0.864,0.936c0,0.144-0.36,1.656-0.36,2.665c0,1.512,0.144,1.872,0.504,2.736   c1.872-0.72,3.816-0.72,4.608-0.72c2.88,0,5.76,0.144,5.76,1.944c0,2.232-4.608,2.232-6.409,2.232c-1.44,0-3.096,0-4.392-1.296   C12.745,12.385,3.96,24.986,3.96,36.147z M24.482,8.209c3.168,0,3.888-0.36,4.464-0.576c-1.296-0.36-1.584-0.432-3.96-0.432   c-0.936,0-2.232,0-3.312,0.504C22.466,8.209,22.97,8.209,24.482,8.209z",
    offset: {
        x: 0,
        y: 13
    },
    box: "M 0 0 L 34 0 L 34 86 L 0 86 Z"
});
/**
 * 数字data: 0
 */
define("char/data/number/0", [], {
    path: "M26.57,41.476c-2.088,4.176-5.688,7.921-11.953,7.921c-3.744,0-8.712-1.728-11.521-7.201C0.504,37.083,0,31.827,0,24.842   c0-7.777,0.72-12.241,2.736-16.777C5.4,2.088,10.513,0,14.689,0c3.528,0,8.713,1.584,11.665,7.561   c2.592,5.472,2.952,11.305,2.952,17.281C29.307,29.019,29.163,36.075,26.57,41.476z M23.042,38.667   c0.792-4.393,0.792-9.865,0.792-14.689c0-4.896,0-10.585-0.936-14.689C21.53,3.096,17.354,1.44,14.617,1.44   c-3.096,0-6.769,2.232-7.993,7.057c-1.152,4.248-1.152,9.577-1.152,15.481c0,5.041,0,10.513,0.792,14.833   c1.368,7.849,6.048,9.145,8.353,9.145C17.138,47.956,21.674,46.588,23.042,38.667z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 数字data: 1
 */
define("char/data/number/1", [], {
    path: "M14.185,42.34c0,2.592,0.216,3.456,6.553,3.456h2.232v2.088c-1.944-0.144-8.856-0.144-11.233-0.144   c-2.376,0-9.361,0-11.305,0.144v-2.088h2.232c6.336,0,6.553-0.864,6.553-3.456V4.825C5.256,6.697,1.656,6.697,0,6.697V4.608   c7.417,0,11.017-2.664,12.745-4.608c1.44,0,1.44,0.072,1.44,1.729V42.34z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 29 0 L 29 86 L 0 86 Z"
});
/**
 * 数字data: 2
 */
define("char/data/number/2", [], {
    path: "M26.282,47.884H0v-1.728l14.545-16.273c4.104-4.608,7.632-9.937,7.632-16.058c0-6.625-3.744-11.737-9.865-11.737   c-4.68,0-8.569,3.312-9.937,8.208c0.216-0.072,0.36-0.072,1.008-0.072c2.016,0,3.384,1.368,3.384,3.384   c0,2.304-1.872,3.384-3.384,3.384c-0.216,0-3.384,0-3.384-3.672C0,7.129,4.896,0,13.249,0c8.353,0,14.905,5.544,14.905,13.825   c0,7.129-4.032,10.873-14.977,20.954c-1.872,1.728-6.265,6.336-8.209,7.993H18.29c2.16,0,6.265,0,6.769-0.648   c0.72-1.152,1.296-5.112,1.512-6.336h1.584L26.282,47.884z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 34 0 L 34 86 L 0 86 Z"
});
/**
 * 数字data: 3
 */
define("char/data/number/3", [], {
    path: "M12.457,21.818c1.944-0.072,4.393-0.288,6.553-3.456c2.088-3.096,2.304-7.129,2.304-8.497c0-7.056-4.68-8.136-7.057-8.136   c-0.36,0-7.128,0-9.865,4.896c0.216-0.072,0.36-0.072,0.792-0.072c1.584,0,3.313,1.008,3.313,3.312   c0,2.161-1.729,3.241-3.241,3.241c-1.08,0-3.312-0.576-3.312-3.457C1.944,4.393,7.273,0,14.473,0   c6.985,0,12.889,4.176,12.889,9.865c0,5.617-4.032,10.873-10.297,12.673c6.913,1.224,12.241,6.409,12.241,13.033   c0,7.272-6.336,13.825-14.905,13.825C6.409,49.396,0,44.14,0,37.731c0-2.736,1.872-3.744,3.601-3.744   c2.016,0,3.528,1.44,3.528,3.528c0,2.592-2.088,3.889-4.393,3.528c2.088,4.752,7.993,6.409,11.449,6.409   c3.528,0,8.424-2.52,8.424-11.953c0-6.913-2.736-11.953-8.856-11.953h-3.313c-1.296,0-1.656,0-1.656-0.72   c0-0.648,0.288-0.72,1.512-0.792L12.457,21.818z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 数字data: 4
 */
define("char/data/number/4", [], {
    path: "M24.05,34.491h7.273v2.088H24.05v6.552c0,2.665,0.216,3.384,5.4,3.384h1.44v2.088c-1.656-0.144-7.417-0.144-9.433-0.144   s-7.705,0-9.361,0.144v-2.088h1.44c5.256,0,5.4-0.72,5.4-3.384v-6.552H0v-2.088L21.674,0.864C22.25,0,22.466,0,23.042,0   c1.008,0,1.008,0.36,1.008,1.728V34.491z M1.8,34.491h17.498V7.344L1.8,34.491z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 38 0 L 38 86 L 0 86 Z"
});
/**
 * 数字data: 5
 */
define("char/data/number/5", [], {
    path: "M5.688,21.458c1.872-2.016,5.041-3.816,9.145-3.816c7.561,0,13.321,7.128,13.321,15.697   c0,9.145-7.128,15.985-15.265,15.985C4.896,49.324,0,42.339,0,36.219c0-2.809,1.872-3.457,3.168-3.457   c1.8,0,3.168,1.152,3.168,3.168c0,2.448-1.944,3.168-3.168,3.168c-0.36,0-0.792-0.072-1.152-0.216   c1.296,5.256,5.977,8.497,10.729,8.497c3.168,0,5.977-1.8,7.561-4.392c2.016-3.24,2.016-7.345,2.016-10.081   s-0.072-6.265-1.296-9.073c-0.576-1.224-2.448-4.752-6.265-4.752c-3.6,0-6.984,1.728-9.001,4.68   c-0.72,0.864-0.792,0.937-1.152,0.937c-0.864,0-0.864-0.432-0.864-1.729V1.584C3.744,0.432,3.744,0,4.32,0   c0.072,0,0.216,0,0.72,0.216c1.368,0.576,4.752,2.016,9.505,2.016c1.872,0,5.328-0.216,9.361-1.944C24.554,0,24.698,0,24.842,0   c0.432,0,0.576,0.36,0.576,0.648c0,1.008-5.184,6.984-13.321,6.984c-0.792,0-3.313-0.072-6.409-1.08V21.458z",
    offset: {
        x: 3,
        y: 17
    },
    box: "M 0 0 L 34 0 L 34 86 L 0 86 Z"
});
/**
 * 数字data: 6
 */
define("char/data/number/6", [], {
    path: "M5.905,24.771c0.72-2.017,3.096-7.561,9.505-7.561c7.2,0,13.897,6.409,13.897,15.985c0,9.361-6.697,16.202-14.545,16.202   C8.641,49.396,0,44.932,0,25.13C0,9.289,9.505,0,18.578,0c6.265,0,9.001,3.672,9.001,7.417c0,2.088-1.224,3.168-3.024,3.168   c-1.872,0-2.952-1.368-2.952-2.952c0-2.952,2.736-2.952,3.6-2.952c-1.368-2.16-3.96-2.952-6.552-2.952   c-3.889,0-12.745,2.88-12.745,21.098V24.771z M22.034,42.772c1.368-2.736,1.368-5.977,1.368-9.649c0-3.096,0-6.697-1.152-9.361   c-1.08-2.448-3.168-5.112-7.128-5.112c-6.481,0-9.073,7.128-9.073,12.817c0,5.041,0.72,8.569,1.368,10.441   c0.648,1.512,2.808,5.544,7.344,5.544C17.642,47.452,20.234,46.228,22.034,42.772z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 数字data: 7
 */
define("char/data/number/7", [], {
    path: "M19.874,18.938c-3.384,4.825-5.113,13.177-5.113,23.906v3.6c0,0.937,0,3.745-3.024,3.745c-2.953,0-2.953-2.88-2.953-3.672   c0-13.537,7.273-25.346,9.217-28.154l7.633-10.945H10.369c-1.008,0-6.409,0-6.985,0.432c-0.936,0.792-1.584,5.256-1.8,6.553H0   L2.232,0h1.584c0.288,1.368,0.432,2.304,9.145,2.304h17.354V3.96L19.874,18.938z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 数字data: 8
 */
define("char/data/number/8", [], {
    path: "M29.307,35.931c0,7.561-6.697,13.465-14.689,13.465C7.273,49.396,0,44.644,0,37.011c0-5.256,3.601-10.081,10.585-13.321   c-5.041-3.528-5.112-3.6-5.904-4.536c-2.016-2.448-2.736-4.896-2.736-7.345C1.944,5.256,7.561,0,14.689,0   c6.625,0,12.673,4.32,12.673,10.585c0,6.049-5.256,9.361-8.856,11.305C24.122,25.346,29.307,28.586,29.307,35.931z M3.313,37.011   c0,5.977,5.256,10.441,11.377,10.441c5.76,0,11.305-3.744,11.305-9.217c0-4.392-3.312-6.625-5.184-7.849l-8.713-5.688   C7.417,26.858,3.313,31.395,3.313,37.011z M17.065,20.882c4.177-2.304,7.345-5.833,7.345-10.225c0-5.185-4.608-8.929-9.793-8.929   c-4.824,0-9.721,2.952-9.721,7.632c0,3.528,2.88,5.4,3.816,6.049L17.065,20.882z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 35 0 L 35 86 L 0 86 Z"
});
/**
 * 数字data: 9
 */
define("char/data/number/9", [], {
    path: "M23.402,24.554c-1.44,3.672-4.177,7.561-9.505,7.561C6.697,32.115,0,25.634,0,16.129S6.985,0,14.905,0   c6.337,0,14.401,4.825,14.401,24.194c0,15.625-8.713,25.202-17.713,25.202c-6.265,0-9.865-3.024-9.865-7.489   c0-1.872,1.152-3.096,3.024-3.096s2.952,1.368,2.952,2.952c0,2.665-2.592,3.096-3.096,2.952H4.176   c1.8,2.521,5.617,2.736,7.345,2.736c4.32,0,11.881-3.528,11.881-20.521V24.554z M23.258,17.714c0-1.08,0-7.201-1.44-10.729   c-0.72-1.656-2.808-5.256-6.913-5.256c-3.888,0-5.833,2.088-7.128,4.032c-1.872,2.952-1.872,6.409-1.872,10.441   c0,3.24,0,6.696,1.152,9.433c0.648,1.368,2.592,5.041,7.129,5.041C20.522,30.675,23.258,23.762,23.258,17.714z",
    offset: {
        x: 3,
        y: 16
    },
    box: "M 0 0 L 34 0 L 34 86 L 0 86 Z"
});
/**
 * 字符data: :
 */
define("char/data/symbol/colon", [], {
    path: "M1.084,6.516C0.361,5.772,0,4.873,0,3.816c0-1.056,0.361-1.956,1.084-2.7C1.807,0.373,2.682,0,3.708,0   s1.9,0.373,2.624,1.116c0.722,0.745,1.084,1.645,1.084,2.7c0,1.056-0.362,1.956-1.084,2.7C5.608,7.261,4.734,7.632,3.708,7.632   S1.807,7.261,1.084,6.516z M1.084,29.916C0.361,29.172,0,28.272,0,27.216c0-1.055,0.361-1.956,1.084-2.7   C1.807,23.772,2.682,23.4,3.708,23.4s1.9,0.372,2.624,1.116c0.722,0.745,1.084,1.645,1.084,2.7c0,1.056-0.362,1.956-1.084,2.7   c-0.723,0.745-1.598,1.116-2.624,1.116S1.807,30.661,1.084,29.916z",
    offset: {
        x: 5,
        y: 25
    },
    box: "M 0 0 L 17 0 L 17 86 L 0 86 Z"
});
/**
 * 字符data: !
 */
define("char/data/symbol/exclamation", [], {
    path: "M0,3.744c0-1.152,0.377-2.063,1.133-2.736C1.889,0.336,2.762,0,3.754,0s1.862,0.336,2.611,1.008   c0.748,0.673,1.123,1.584,1.123,2.736c0,0.097-0.012,0.229-0.035,0.396c-0.024,0.169-0.035,0.3-0.035,0.396L4.752,36.36   c-0.097,1.104-0.457,1.656-1.08,1.656c-0.529,0-0.84-0.648-0.936-1.944L0.07,4.752c0-0.096-0.013-0.264-0.035-0.504   C0.011,4.008,0,3.84,0,3.744z M0,47.736C0,46.632,0.377,45.72,1.133,45c0.756-0.72,1.629-1.08,2.621-1.08S5.604,44.28,6.329,45   c0.725,0.72,1.087,1.632,1.087,2.736c0,1.056-0.377,1.944-1.131,2.664c-0.753,0.72-1.601,1.08-2.542,1.08   c-1.083,0-1.978-0.372-2.684-1.116C0.353,49.62,0,48.744,0,47.736z",
    offset: {
        x: 8,
        y: 13
    },
    box: "M 0 0 L 23 0 L 23 86 L 0 86 Z"
});
/**
 * 字符data: >
 */
define("char/data/symbol/gt", [], {
    path: "M0,39.456c0-0.288,0.108-0.504,0.324-0.648c0.216-0.144,0.684-0.385,1.404-0.72l35.184-16.111   c1.802-0.871,3.177-1.5,4.126-1.888c-0.96-0.399-2.352-1.048-4.175-1.948L1.892,1.819c-0.13-0.061-0.295-0.137-0.49-0.228   C1.206,1.5,1.043,1.428,0.912,1.376c-0.13-0.052-0.26-0.114-0.39-0.184s-0.25-0.129-0.359-0.18C0.054,0.962,0,0.864,0,0.72   C0,0.241,0.334,0,1.003,0c0.304,0,1.063,0.241,2.28,0.72l40.053,18.216c0.047,0,0.132,0.036,0.252,0.108   c0.119,0.072,0.227,0.144,0.324,0.216c0.096,0.072,0.191,0.144,0.288,0.216c0.096,0.072,0.168,0.156,0.216,0.252   c0.048,0.097,0.072,0.216,0.072,0.36c-0.049,0.432-1.026,0.961-2.933,1.584L2.543,39.456c-0.928,0.479-1.512,0.72-1.751,0.72   C0.263,40.176,0,39.935,0,39.456z",
    offset: {
        x: 5,
        y: 25
    },
    box: "M 0 0 L 54 0 L 54 86 L 0 86 Z"
});
/**
 * 字符data: [
 */
define("char/data/symbol/lbrackets", [], {
    path: "M0,71.928V0h10.872v1.584H5.04v68.76h5.832v1.584H0z",
    offset: {
        x: 5,
        y: 13
    },
    box: "M 0 0 L 18 0 L 18 86 L 0 86 Z"
});
/**
 * 字符data: (
 */
define("char/data/symbol/lparentheses", [], {
    path: "M0,36c0-8.111,1.512-15.432,4.536-21.96C5.832,11.304,7.38,8.784,9.18,6.48c1.8-2.304,3.299-3.96,4.5-4.968   C14.879,0.504,15.647,0,15.984,0c0.479,0,0.72,0.241,0.72,0.72c0,0.241-0.313,0.648-0.936,1.224C8.04,9.817,4.176,21.168,4.176,36   c0,14.88,3.768,26.111,11.304,33.696c0.816,0.816,1.224,1.343,1.224,1.584c0,0.479-0.241,0.72-0.72,0.72   c-0.336,0-1.08-0.48-2.232-1.44c-1.152-0.961-2.617-2.545-4.392-4.752c-1.776-2.208-3.312-4.656-4.608-7.344   C1.584,51.937,0,44.449,0,36z",
    offset: {
        x: 3,
        y: 10
    },
    box: "M 0 0 L 23 0 L 23 86 L 0 86 Z"
});
/**
 * 字符data: <
 */
define("char/data/symbol/lt", [], {
    path: "M0,20.088c0-0.384,0.383-0.767,1.152-1.152L41.109,0.72C41.927,0.241,42.454,0,42.694,0c0.479,0,0.721,0.241,0.721,0.72   c0,0.385-0.553,0.84-1.656,1.368L6.637,18.168c-1.447,0.69-2.844,1.33-4.194,1.92c1.35,0.592,2.747,1.232,4.194,1.92l35.116,16.079   c1.104,0.479,1.656,0.936,1.656,1.368c0,0.479-0.241,0.72-0.72,0.72c-0.241,0-0.768-0.241-1.58-0.72L1.152,21.24   C0.432,20.952,0.047,20.568,0,20.088z",
    offset: {
        x: 5,
        y: 25
    },
    box: "M 0 0 L 54 0 L 54 86 L 0 86 Z"
});
/**
 * 字符data: -
 */
define("char/data/symbol/negative", [], {
    path: "M0,2.25V0h21.219v2.25H0z",
    offset: {
        x: 5,
        y: 42
    },
    box: "M 0 0 L 31 0 L 31 86 L 0 86 Z"
});
/**
 * 字符data: .
 */
define("char/data/symbol/point", [], {
    path: "M1.059,6.408C0.352,5.641,0,4.752,0,3.744c0-1.008,0.352-1.883,1.059-2.628C1.765,0.373,2.659,0,3.743,0   c1.036,0,1.907,0.349,2.613,1.044c0.707,0.696,1.06,1.597,1.06,2.7c0,1.104-0.377,2.016-1.131,2.736   C5.532,7.2,4.685,7.56,3.743,7.56C2.659,7.56,1.765,7.176,1.059,6.408z",
    offset: {
        x: 3,
        y: 60
    },
    box: "M 0 0 L 12 0 L 12 86 L 0 86 Z"
});
/**
 * 字符data: +
 */
define("char/data/symbol/positive", [], {
    path: "M14.063,16.031V0h2.25v16.031h14.063v2.25H16.313v16.031h-2.25V18.281H0v-2.25H14.063z",
    offset: {
        x: 4,
        y: 29
    },
    box: "M 0 0 L 38 0 L 38 86 L 0 86 Z"
});
/**
 * 字符data: '
 */
define("char/data/symbol/quotation", [], {
    path: "M8.438,0c-0.61,1.055-1.289,2.18-2.039,3.375C5.648,4.57,5.098,5.484,4.746,6.117l-2.777,4.852   c-0.399-0.047-0.727-0.07-0.984-0.07c-0.281,0-0.61,0.023-0.984,0.07C1.594,6.586,2.813,2.93,3.656,0   C4.453,0.023,5.25,0.035,6.047,0.035C6.867,0.035,7.664,0.023,8.438,0z",
    offset: {
        x: 4,
        y: 13
    },
    box: "M 0 0 L 17 0 L 17 86 L 0 86 Z"
});
/**
 * 字符data: ]
 */
define("char/data/symbol/rbrackets", [], {
    path: "M0,70.344h5.832V1.584H0V0h10.872v71.928H0V70.344z",
    offset: {
        x: 3,
        y: 13
    },
    box: "M 0 0 L 18 0 L 18 86 L 0 86 Z"
});
/**
 * 字符data: )
 */
define("char/data/symbol/rparentheses", [], {
    path: "M0,71.28c0-0.241,0.312-0.648,0.936-1.224C8.664,62.183,12.528,50.832,12.528,36c0-14.879-3.72-26.087-11.16-33.624   C0.456,1.512,0,0.961,0,0.72C0,0.241,0.24,0,0.72,0C1.055,0,1.8,0.48,2.952,1.44c1.152,0.961,2.615,2.545,4.392,4.752   c1.775,2.208,3.312,4.656,4.608,7.344C15.12,20.064,16.704,27.552,16.704,36c0,8.112-1.512,15.433-4.536,21.96   c-1.296,2.736-2.844,5.256-4.644,7.56c-1.8,2.304-3.301,3.96-4.5,4.968C1.824,71.496,1.055,72,0.72,72C0.24,72,0,71.759,0,71.28z",
    offset: {
        x: 4,
        y: 10
    },
    box: "M 0 0 L 23 0 L 23 86 L 0 86 Z"
});
/**
 * 字符data: /
 */
define("char/data/symbol/slash", [], {
    path: "M0,70.678c0-0.241,0.096-0.569,0.288-0.986l25.416-67.8c0,0.002,0.06-0.157,0.18-0.477c0.12-0.319,0.216-0.563,0.288-0.731   c0.072-0.168,0.18-0.324,0.324-0.468S26.808,0,27,0c0.479,0,0.72,0.288,0.72,0.864c0,0.048-0.072,0.296-0.216,0.744L2.016,69.598   c-0.288,0.815-0.517,1.343-0.684,1.584c-0.169,0.24-0.396,0.36-0.684,0.36C0.216,71.542,0,71.254,0,70.678z",
    offset: {
        x: 3,
        y: 10
    },
    box: "M 0 0 L 33 0 L 33 86 L 0 86 Z"
});
/**
 * 字符data: |
 */
define("char/data/symbol/vertical", [], {
    path: "M0,69.696V2.664C0,0.889,0.479,0,1.44,0c0.959,0,1.44,0.72,1.44,2.16v67.032c0,1.775-0.48,2.664-1.44,2.664   C0.479,71.856,0,71.136,0,69.696z",
    offset: {
        x: 5,
        y: 8
    },
    box: "M 0 0 L 12 0 L 12 86 L 0 86 Z"
});
/**
 * 文本
 */
define("char/text", [ "kity", "char/data", "char/data/number/0", "char/data/number/1", "char/data/number/2", "char/data/number/3", "char/data/number/4", "char/data/number/5", "char/data/number/6", "char/data/number/7", "char/data/number/8", "char/data/number/9", "char/data/character/a", "char/data/character/b", "char/data/character/c", "char/data/character/d", "char/data/character/e", "char/data/character/f", "char/data/character/g", "char/data/character/h", "char/data/character/i", "char/data/character/j", "char/data/character/k", "char/data/character/l", "char/data/character/m", "char/data/character/n", "char/data/character/o", "char/data/character/p", "char/data/character/q", "char/data/character/r", "char/data/character/s", "char/data/character/t", "char/data/character/u", "char/data/character/v", "char/data/character/w", "char/data/character/x", "char/data/character/y", "char/data/character/z", "char/data/character/ua", "char/data/character/ub", "char/data/character/uc", "char/data/character/ud", "char/data/character/ue", "char/data/character/uf", "char/data/character/ug", "char/data/character/uh", "char/data/character/ui", "char/data/character/uj", "char/data/character/uk", "char/data/character/ul", "char/data/character/um", "char/data/character/un", "char/data/character/uo", "char/data/character/up", "char/data/character/uq", "char/data/character/ur", "char/data/character/us", "char/data/character/ut", "char/data/character/uu", "char/data/character/uv", "char/data/character/uw", "char/data/character/ux", "char/data/character/uy", "char/data/character/uz", "char/data/symbol/lparentheses", "char/data/symbol/rparentheses", "char/data/symbol/negative", "char/data/symbol/positive", "char/data/symbol/vertical", "char/data/symbol/slash", "char/data/symbol/exclamation", "char/data/symbol/lbrackets", "char/data/symbol/rbrackets", "char/data/symbol/colon", "char/data/symbol/quotation", "char/data/symbol/lt", "char/data/symbol/gt", "char/data/symbol/point", "char/data/greek/alpha", "char/data/greek/beta", "char/data/greek/gamma", "char/data/greek/delta", "char/data/greek/varepsilon", "char/data/greek/zeta", "char/data/greek/eta", "char/data/greek/theta", "char/data/greek/iota", "char/data/greek/kappa", "char/data/greek/lambda", "char/data/greek/mu", "char/data/greek/nu", "char/data/greek/xi", "char/data/greek/pi", "char/data/greek/rho", "char/data/greek/sigma", "char/data/greek/tau", "char/data/greek/upsilon", "char/data/greek/phi", "char/data/greek/chi", "char/data/greek/psi", "char/data/greek/omega", "char/data/greek/u-alpha", "char/data/greek/u-beta", "char/data/greek/u-gamma", "char/data/greek/u-delta", "char/data/greek/u-epsilon", "char/data/greek/u-zeta", "char/data/greek/u-eta", "char/data/greek/u-theta", "char/data/greek/u-iota", "char/data/greek/u-kappa", "char/data/greek/u-lambda", "char/data/greek/u-mu", "char/data/greek/u-nu", "char/data/greek/u-xi", "char/data/greek/u-omicron", "char/data/greek/u-pi", "char/data/greek/u-rho", "char/data/greek/u-sigma", "char/data/greek/u-tau", "char/data/greek/u-upsilon", "char/data/greek/u-phi", "char/data/greek/u-chi", "char/data/greek/u-psi", "char/data/greek/u-omega", "char/char", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), CHAR_DATA = require("char/data"), Char = require("char/char");
    return kity.createClass("Text", {
        base: require("signgroup"),
        constructor: function(content) {
            this.callBase();
            this.chars = null;
            this.contentText = content || "";
            this.contentShape = new kity.Group();
            initContentShape.call(this);
            this.addShape(this.contentShape);
        },
        getBaseWidth: function() {
            return this.getWidth();
        },
        getBaseHeight: function() {
            var chars = this.contentShape.getItems(), currentChar = null, index = 0, height = 0;
            while (currentChar = chars[index]) {
                height = Math.max(height, currentChar.getBaseHeight());
                index++;
            }
            return height;
        },
        addedCall: function() {
            var offset = 0;
            kity.Utils.each(this.chars, function(charData, index) {
                var charShape = this.contentShape.getItem(index);
                charShape.translate(offset, 0);
                offset += charShape.getBoxWidth();
            }, this);
        }
    });
    function initContentShape() {
        var match = null, content = this.contentText, chars = [];
        while (match = /^([^\\]*)(\\[^\\]+\\)([\s\S]*)/.exec(content)) {
            content = match[3];
            chars = chars.concat(match[1].split(""));
            chars.push(match[2]);
        }
        chars = chars.concat(content.split(""));
        // 字符数组
        this.chars = chars;
        kity.Utils.each(chars, function(charData, index) {
            var charShape = new Char(charData);
            this.contentShape.addShape(charShape);
        }, this);
    }
});
/**
 * 加法表达式
 */
define("expression/compound-exp/binary-exp/addition", [ "kity", "operator/binary-opr/addition", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), AdditionOperator = require("operator/binary-opr/addition");
    return kity.createClass("AdditionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new AdditionOperator());
        }
    });
});
/**
 * 星号表达式
 */
define("expression/compound-exp/binary-exp/asterisk", [ "kity", "operator/binary-opr/asterisk", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), AsteriskOperator = require("operator/binary-opr/asterisk");
    return kity.createClass("AsteriskExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new AsteriskOperator());
        }
    });
});
/**
 * 除法表达式
 */
define("expression/compound-exp/binary-exp/division", [ "kity", "operator/binary-opr/division", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), DivisionOperator = require("operator/binary-opr/division");
    return kity.createClass("DivisionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new DivisionOperator());
        }
    });
});
/**
 * 点积表达式
 */
define("expression/compound-exp/binary-exp/dot", [ "kity", "operator/binary-opr/dot", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), DotOperator = require("operator/binary-opr/dot");
    return kity.createClass("DotExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new DotOperator());
        }
    });
});
/**
 * 等号表达式
 */
define("expression/compound-exp/binary-exp/equal", [ "kity", "operator/binary-opr/equal", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), EqualOperator = require("operator/binary-opr/equal");
    return kity.createClass("EqualExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new EqualOperator());
        }
    });
});
/**
 * 分数表达式
 */
define("expression/compound-exp/binary-exp/fraction", [ "kity", "operator/binary-opr/fraction", "operator/binary-opr/up-down", "expression/compound-exp/binary-exp/up-down", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), FractionOperator = require("operator/binary-opr/fraction");
    return kity.createClass("FractionExpression", {
        base: require("expression/compound-exp/binary-exp/up-down"),
        constructor: function(upOperand, downOperand) {
            this.callBase(upOperand, downOperand);
            this.setOperator(new FractionOperator());
        }
    });
});
/**
 * 左右结合二元表达式
 * @abstract
 */
define("expression/compound-exp/binary-exp/left-right", [ "kity", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("LeftRightExpression", {
        base: require("expression/compound-exp/binary"),
        getLeftOperand: function() {
            return this.getFirstOperand();
        },
        setLeftOperand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getRightOperand: function() {
            return this.getLastOperand();
        },
        setRightOperand: function(operand) {
            return this.setLastOperand(operand);
        }
    });
});
/**
 * 逻辑与（交运算）表达式
 */
define("expression/compound-exp/binary-exp/logical-conjunction", [ "kity", "operator/binary-opr/logical-conjunction", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), LogicalConjunctionOperator = require("operator/binary-opr/logical-conjunction");
    return kity.createClass("LogicalConjunctionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new LogicalConjunctionOperator());
        }
    });
});
/**
 * 逻辑或表达式
 */
define("expression/compound-exp/binary-exp/logical-disjunction", [ "kity", "operator/binary-opr/logical-disjunction", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), LogicalDisjunctionOperator = require("operator/binary-opr/logical-disjunction");
    return kity.createClass("LogicalDisjunctionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new LogicalDisjunctionOperator());
        }
    });
});
/**
 * 负正表达式
 */
define("expression/compound-exp/binary-exp/minus-plus", [ "kity", "operator/binary-opr/minus-plus", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), MinusPlusOperator = require("operator/binary-opr/minus-plus");
    return kity.createClass("MinusPlusExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new MinusPlusOperator());
        }
    });
});
/**
 * 乘法表达式
 */
define("expression/compound-exp/binary-exp/multiplication", [ "kity", "operator/binary-opr/multiplication", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), MultiplicationOperator = require("operator/binary-opr/multiplication");
    return kity.createClass("MultiplicationExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new MultiplicationOperator());
        }
    });
});
/**
 * 正负表达式
 */
define("expression/compound-exp/binary-exp/plus-minus", [ "kity", "operator/binary-opr/plus-minus", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), PlusMinusOperator = require("operator/binary-opr/plus-minus");
    return kity.createClass("PlusMinusExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new PlusMinusOperator());
        }
    });
});
/**
 * 方根表达式
 */
define("expression/compound-exp/binary-exp/radical", [ "kity", "operator/binary-opr/radical", "operator/binary", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity"), RadicalOperator = require("operator/binary-opr/radical");
    return kity.createClass("RadicalExpression", {
        base: require("expression/compound-exp/binary"),
        /**
         * 构造开方表达式
         * @param radicand 被开方数
         * @param exponent 指数
         */
        constructor: function(radicand, exponent) {
            this.callBase(radicand, exponent);
            this.setOperator(new RadicalOperator());
        },
        setRadicand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getRadicand: function() {
            return this.getFirstOperand();
        },
        setExponent: function(operand) {
            return this.setLastOperand(operand);
        },
        getExponent: function() {
            return this.getLastOperand();
        }
    });
});
/**
 * 属于（集合）表达式
 */
define("expression/compound-exp/binary-exp/set/in-set", [ "kity", "operator/binary-opr/set/in-set", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), InSetOperator = require("operator/binary-opr/set/in-set");
    return kity.createClass("InSetExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new InSetOperator());
        }
    });
});
/**
 * 交集表达式
 */
define("expression/compound-exp/binary-exp/set/intersection", [ "kity", "operator/binary-opr/set/intersection", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), IntersectionOperator = require("operator/binary-opr/set/intersection");
    return kity.createClass("IntersectionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new IntersectionOperator());
        }
    });
});
/**
 * 子集表达式
 */
define("expression/compound-exp/binary-exp/set/sub-set", [ "kity", "operator/binary-opr/set/sub-set", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), SubSetOperator = require("operator/binary-opr/set/sub-set");
    return kity.createClass("SubSetExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new SubSetOperator());
        }
    });
});
/**
 * 超集表达式
 */
define("expression/compound-exp/binary-exp/set/super-set", [ "kity", "operator/binary-opr/set/super-set", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), SuperSetOperator = require("operator/binary-opr/set/super-set");
    return kity.createClass("SuperSetExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new SuperSetOperator());
        }
    });
});
/**
 * 并集表达式
 */
define("expression/compound-exp/binary-exp/set/union", [ "kity", "operator/binary-opr/set/union", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), UnionOperator = require("operator/binary-opr/set/union");
    return kity.createClass("UnionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new UnionOperator());
        }
    });
});
/**
 * 下标表达式
 */
define("expression/compound-exp/binary-exp/subscript", [ "kity", "operator/binary-opr/subscript", "operator/binary", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity"), SubscriptExpression = require("operator/binary-opr/subscript");
    return kity.createClass("SubExpression", {
        base: require("expression/compound-exp/binary"),
        constructor: function(operand, subscript) {
            this.callBase(operand, subscript);
            this.setOperator(new SubscriptExpression());
        },
        getBaseHeight: function() {
            return this.getFirstOperand().getBaseHeight();
        },
        getBaseWidth: function() {
            return this.getFirstOperand().getBaseWidth();
        }
    });
});
/**
 * 减法表达式
 */
define("expression/compound-exp/binary-exp/subtraction", [ "kity", "operator/binary-opr/subtraction", "operator/binary-opr/left-right", "expression/compound-exp/binary-exp/left-right", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), SubtractionOperator = require("operator/binary-opr/subtraction");
    return kity.createClass("SubtractionExpression", {
        base: require("expression/compound-exp/binary-exp/left-right"),
        constructor: function(leftOperand, rightOperand) {
            this.callBase(leftOperand, rightOperand);
            this.setOperator(new SubtractionOperator());
        }
    });
});
/**
 * 求和表达式
 * @abstract
 */
define("expression/compound-exp/binary-exp/summation", [ "kity", "operator/binary-opr/summation", "operator/binary-opr/up-down", "expression/compound-exp/binary-exp/up-down", "expression/compound-exp/binary" ], function(require, exports, modules) {
    var kity = require("kity"), SummationOperator = require("operator/binary-opr/summation");
    return kity.createClass("SummationExpression", {
        base: require("expression/compound-exp/binary-exp/up-down"),
        /**
         * 构造求和表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function(upOperand, downOperand) {
            this.callBase(upOperand, downOperand);
            this.setOperator(new SummationOperator());
        }
    });
});
/**
 * 上标表达式
 */
define("expression/compound-exp/binary-exp/superscript", [ "kity", "operator/binary-opr/superscript", "operator/binary", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity"), SuperscriptOperator = require("operator/binary-opr/superscript");
    return kity.createClass("SuperscriptExpression", {
        base: require("expression/compound-exp/binary"),
        constructor: function(operand, superscript) {
            this.callBase(operand, superscript);
            this.setOperator(new SuperscriptOperator());
        },
        getBaseHeight: function() {
            return this.getFirstOperand().getBaseHeight();
        },
        getBaseWidth: function() {
            return this.getFirstOperand().getBaseWidth();
        }
    });
});
/**
 * 上下结合二元表达式
 * @abstract
 */
define("expression/compound-exp/binary-exp/up-down", [ "kity", "expression/compound-exp/binary", "expression/compound" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("UpDownExpression", {
        base: require("expression/compound-exp/binary"),
        getUpOperand: function() {
            return this.getFirstOperand();
        },
        setUpOperand: function(operand) {
            return this.setFirstOperand(operand);
        },
        getDownOperand: function() {
            return this.getLastOperand();
        },
        setDownOperand: function(operand) {
            return this.setLastOperand(operand);
        }
    });
});
/**
 * 二元操作表达式
 * @abstract
 */
define("expression/compound-exp/binary", [ "kity", "expression/compound", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("BinaryExpression", {
        base: require("expression/compound"),
        constructor: function(firstOperand, lastOperand) {
            this.callBase();
            this.setFirstOperand(firstOperand);
            this.setLastOperand(lastOperand);
        },
        setFirstOperand: function(operand) {
            return this.setOperand(operand, 0);
        },
        getFirstOperand: function() {
            return this.getOperand(0);
        },
        setLastOperand: function(operand) {
            return this.setOperand(operand, 1);
        },
        getLastOperand: function() {
            return this.getOperand(1);
        }
    });
});
/**
 * 组合表达式
 * 可以组合多个表达式
 */
define("expression/compound-exp/combination", [ "kity", "operator/combination", "operator/operator", "expression/compound", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), CombinationOperator = require("operator/combination");
    return kity.createClass("CombinationExpression", {
        base: require("expression/compound"),
        constructor: function() {
            this.callBase();
            this.setOperator(new CombinationOperator());
            kity.Utils.each(arguments, function(operand, index) {
                this.setOperand(operand, index);
            }, this);
        }
    });
});
/**
 * 积分表达式
 */
define("expression/compound-exp/integration", [ "kity", "operator/integration", "operator/operator", "expression/compound", "expression/expression" ], function(require, exports, modules) {
    var kity = require("kity"), IntegrationOperator = require("operator/integration"), IntegrationExpression = kity.createClass("IntegrationExpression", {
        base: require("expression/compound"),
        /**
             * 构造积分表达式
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
        constructor: function(integrand, superscript, subscript) {
            this.callBase();
            this.setOperator(new IntegrationOperator());
            this.setIntegrand(integrand);
            this.setSuperscript(superscript);
            this.setSubscript(subscript);
        },
        setIntegrand: function(integrand) {
            return this.setOperand(integrand, 0);
        },
        setType: function(type) {
            this.getOperator().setType(type);
        },
        resetType: function() {
            this.getOperator().resetType();
        },
        getIntegrand: function() {
            return this.getOperand(0);
        },
        setSuperscript: function(superscript) {
            return this.setOperand(superscript, 1);
        },
        getSuperscript: function() {
            return this.getOperand(1);
        },
        setSubscript: function(subscript) {
            return this.setOperand(subscript, 2);
        },
        getSubscript: function() {
            return this.getOperand(2);
        }
    });
    kity.Utils.extend(IntegrationExpression, IntegrationOperator.types);
    return IntegrationExpression;
});
/**
 * 复合表达式
 * @abstract
 */
define("expression/compound", [ "kity", "expression/expression", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), Expression = require("expression/expression");
    return kity.createClass("CompoundExpression", {
        base: require("expression/expression"),
        constructor: function() {
            this.callBase();
            this.operands = [];
            this.operator = null;
        },
        // 操作符存储在第1位置
        setOperator: function(operator) {
            if (operator === undefined) {
                return this;
            }
            if (this.operator) {
                this.operator.remove();
            }
            this.operator = operator;
            this.setChildren(0, this.operator);
            this.operator.setParentExpression(this);
            return this;
        },
        getOperator: function() {
            return this.operator;
        },
        // 操作数存储位置是从1开始
        setOperand: function(operand, index) {
            if (operand === undefined) {
                return this;
            }
            operand = Expression.wrap(operand);
            if (this.operands[index]) {
                this.operands[index].remove();
            }
            this.operands[index] = operand;
            this.setChildren(index + 1, operand);
            return this;
        },
        getOperand: function(index) {
            return this.getChild(index + 1);
        },
        addedCall: function() {
            this.operator.applyOperand.apply(this.operator, this.operands);
            return this;
        }
    });
});
/**
 * 空表达式
 * 该表达式主要用途是用于站位
 */
define("expression/empty", [ "kity", "expression/expression", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), Expression = require("expression/expression"), EmptyExpression = kity.createClass("EmptyExpression", {
        base: Expression,
        getBaseWidth: function() {
            return 0;
        },
        getBaseHeight: function() {
            return 0;
        },
        getWidth: function() {
            return 0;
        },
        getHeight: function() {
            return 0;
        }
    });
    // 注册打包函数
    Expression.registerWrap(function(operand) {
        if (operand === null) {
            return new EmptyExpression();
        }
    });
});
/**
 * 基础表达式， 该类是表达式和操作数的高层抽象
 * @abstract
 */
define("expression/expression", [ "kity", "signgroup" ], function(require, exports, module) {
    var kity = require("kity"), // 打包函数列表
    WRAP_FN = [], Expression = kity.createClass("Expression", {
        base: require("signgroup"),
        getBaseWidth: function() {
            return this.getWidth();
        },
        getBaseHeight: function() {
            return this.getHeight();
        }
    });
    // 表达式自动打包
    kity.Utils.extend(Expression, {
        registerWrap: function(fn) {
            WRAP_FN.push(fn);
        },
        // 打包函数
        wrap: function(operand) {
            var result = undefined;
            kity.Utils.each(WRAP_FN, function(fn) {
                result = fn(operand);
                if (result) {
                    return false;
                }
            });
            return result;
        }
    });
    return Expression;
});
/**
 * Text表达式
 */
define("expression/text", [ "char/text", "kity", "char/data", "char/char", "signgroup", "expression/expression" ], function(require, exports, module) {
    var Text = require("char/text"), kity = require("kity"), Expression = require("expression/expression"), TextExpression = kity.createClass("TextExpression", {
        base: require("expression/expression"),
        constructor: function(content) {
            this.callBase();
            this.content = content + "";
            this.setChildren(0, new Text(this.content));
        }
    });
    // 注册文本表达式的打包函数
    Expression.registerWrap(function(operand) {
        var operandType = typeof operand;
        if (operandType === "number" || operandType === "string") {
            operand = new TextExpression(operand);
        }
        return operand;
    });
    return TextExpression;
});
/**
 * 公式对象，表达式容器
 */
define("formula", [ "kity", "fpaper" ], function(require, exports, module) {
    var kity = require("kity"), EXPRESSION_INTERVAL = 50;
    return kity.createClass("Formula", {
        base: require("fpaper"),
        constructor: function(container) {
            this.callBase(container);
            this.expressions = [];
            this.zoom = 1;
            initZoom.call(this);
        },
        insertExpression: function(expression, index) {
            for (var i = this.expressions.length; i > index; i--) {
                this.expressions[i] = this.expressions[i - 1];
            }
            this.expressions[index] = expression;
            this.addShape(expression);
            notifyExpression.call(this, expression);
            correctOffset.call(this);
        },
        appendExpression: function(expression) {
            this.insertExpression(expression, this.expressions.length);
        }
    });
    function initZoom() {
        var zoomLevel = this.zoom - this.getBaseZoom();
        if (zoomLevel !== 0) {
            this.container.setAnchor(0, 0);
            this.container.scale(Math.pow(2, zoomLevel));
        }
    }
    // 调整表达式之间的偏移
    function correctOffset() {
        var exprOffset = 0;
        kity.Utils.each(this.expressions, function(expr) {
            var box = null;
            if (!expr) {
                return;
            }
            expr.setTransform(new kity.Matrix(1, 0, 0, 1, 0, 0));
            box = expr.getRenderBox();
            expr.translate(0 - box.x, exprOffset);
            exprOffset += box.height + EXPRESSION_INTERVAL;
        });
        return this;
    }
    // 通知表达式已接入到paper
    function notifyExpression(expression) {
        var len = expression.getChildren().length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                notifyExpression(expression.getChild(i));
            }
        }
        expression.addedCall && expression.addedCall();
    }
});
/**
 * 公式专用paper
 */
define("fpaper", [ "kity" ], function(require, exports, module) {
    var kity = require("kity");
    return kity.createClass("FPaper", {
        base: kity.Paper,
        constructor: function(container) {
            this.callBase(container);
            this.container = new kity.Group();
            this.baseZoom = 2;
            this.base("addShape", this.container);
        },
        getBaseZoom: function() {
            return this.baseZoom;
        },
        addShape: function(shape, pos) {
            return this.container.addShape(shape, pos);
        },
        removeShape: function(pos) {
            return this.container.removeShape(pos);
        }
    });
});
/**
 * kity库封包
 */
define("kity", [], function(require, exports, module) {
    if (!window.kity) {
        throw new Error("Missing Kity Graphic Lib");
    }
    return window.kity;
});
/**
 * 加法操作符
 */
define("operator/binary-opr/addition", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("AdditionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Addition");
            // 绘制符号图形
            this.addOperatorShape(new kity.Rect(0, 20, 43, 3, 3).fill("black"));
            this.addOperatorShape(new kity.Rect(20, 0, 3, 43, 3).fill("black"));
        }
    });
});
/**
 * 星号操作符
 */
define("operator/binary-opr/asterisk", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M0,22.248c0-0.815,0.551-1.487,1.656-2.016l10.008-4.752L1.512,10.728C0.504,10.249,0,9.601,0,8.784   c0-0.479,0.191-0.936,0.576-1.368c0.384-0.432,0.839-0.648,1.368-0.648c0.384,0,0.911,0.264,1.584,0.792l8.928,6.48   c-0.72-7.92-1.08-12-1.08-12.24c0-0.479,0.18-0.9,0.54-1.26C12.276,0.18,12.744,0,13.32,0c0.479,0,0.911,0.169,1.296,0.504   C15,0.84,15.192,1.272,15.192,1.8l-1.08,12.24l7.992-5.904c1.248-0.912,2.088-1.368,2.52-1.368c0.527,0,0.983,0.216,1.368,0.648   c0.384,0.432,0.576,0.889,0.576,1.368c0,0.816-0.552,1.488-1.656,2.016l-10.008,4.752l10.152,4.752   c1.008,0.48,1.512,1.128,1.512,1.944c0,0.48-0.192,0.936-0.576,1.368c-0.385,0.432-0.84,0.648-1.368,0.648   c-0.288,0-0.673-0.144-1.152-0.432c-0.097-0.047-0.648-0.443-1.656-1.188c-1.008-0.744-2.293-1.692-3.852-2.844   c-1.561-1.152-2.844-2.088-3.852-2.808c0.72,7.92,1.08,12,1.08,12.24c0,0.48-0.18,0.9-0.54,1.26c-0.36,0.36-0.828,0.54-1.404,0.54   c-0.48,0-0.913-0.168-1.296-0.504c-0.385-0.335-0.576-0.767-0.576-1.296l1.08-12.24l-10.08,7.272c-0.72,0-1.272-0.18-1.656-0.54   c-0.385-0.36-0.601-0.648-0.648-0.864C0.023,22.644,0,22.44,0,22.248z";
    return kity.createClass("AsteriskOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("Dot");
            shape = new kity.Path(pathData).fill("black");
            shape.translate(4, 6);
            this.setBoxSize(53, 63);
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 除法操作符
 */
define("operator/binary-opr/division", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("AdditionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Division");
            this.addOperatorShape(new kity.Rect(0, 20, 43, 3, 3).fill("black"));
            this.addOperatorShape(new kity.Circle(22, 11, 3).fill("black"));
            this.addOperatorShape(new kity.Circle(22, 32, 3).fill("black"));
        }
    });
});
/**
 * 点积操作符
 */
define("operator/binary-opr/dot", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("DotOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Dot");
            // 绘制符号图形
            this.addOperatorShape(new kity.Circle(10, 21.5, 3).fill("black"));
            this.setBoxSize(38, 63);
        }
    });
});
/**
 * 等号操作符
 */
define("operator/binary-opr/equal", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("EqualOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Equal");
            this.addOperatorShape(new kity.Rect(0, 12, 43, 3, 10).fill("black"));
            this.addOperatorShape(new kity.Rect(0, 28, 43, 3, 3).fill("black"));
        }
    });
});
/**
 * 分数操作符
 */
define("operator/binary-opr/fraction", [ "kity", "operator/binary-opr/up-down", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("FractionOperator", {
        base: require("operator/binary-opr/up-down"),
        constructor: function() {
            this.callBase("Fraction");
        },
        applyOperand: function(upOperand, downOperand) {
            var upWidth = upOperand.getWidth(), downWidth = downOperand.getWidth(), upHeight = upOperand.getHeight(), downHeight = downOperand.getHeight(), width = Math.max(upWidth, downWidth), height = Math.max(upHeight, downHeight), operatorShape = generateOperator(width);
            this.addOperatorShape(operatorShape);
            // 重置操作符的偏移， 使得该操作符回归到0,0的位置
            this.operatorShape.translate(-10, -10);
            this.setBoxSize(0, 0);
            upOperand.translate((width - upWidth) / 2, height - upHeight);
            operatorShape.translate(0, height);
            downOperand.translate((width - downWidth) / 2, height + 3);
        }
    });
    function generateOperator(width) {
        return new kity.Rect(0, 0, width, 3).fill("black");
    }
});
/**
 * 左右结合二元操作符
 * @abstract
 */
define("operator/binary-opr/left-right", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("LeftRightOperator", {
        base: require("operator/binary"),
        applyOperand: function(leftOperand, rightOperand) {
            var operator = this, operatorBox = operator.getRenderBox(), // 操作数特殊处理
            leftOperandBox = kity.Utils.extend(leftOperand.getRenderBox(), {
                height: leftOperand.getBaseHeight()
            }), rightOperandBox = kity.Utils.extend(rightOperand.getRenderBox(), {
                height: rightOperand.getBaseHeight()
            }), // 偏移量
            offset = 0, // 操作对象最大高度
            maxHeight = Math.max(leftOperandBox.height, rightOperandBox.height, operatorBox.height);
            // 左操作数
            leftOperand.translate(offset, (maxHeight - leftOperandBox.height) / 2);
            // 操作符
            offset += leftOperandBox.width + leftOperandBox.x;
            operator.translate(offset, (maxHeight - operatorBox.height) / 2);
            // 右操作数
            offset += operatorBox.width + operatorBox.x;
            rightOperand.translate(offset, (maxHeight - rightOperandBox.height) / 2);
        }
    });
});
/**
 * 逻辑与（交运算）操作符
 */
define("operator/binary-opr/logical-conjunction", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M42.556,50.404l-2.88,1.152L22.754,8.425L2.808,51.557L0,50.116L22.97,0L42.556,50.404z";
    return kity.createClass("LogicalConjunctionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("LogicalConjunction");
            shape = new kity.Path(pathData).fill("black");
            this.operatorShape.translate(0, -5);
            // 绘制符号图形
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 逻辑或操作符
 */
define("operator/binary-opr/logical-disjunction", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M42.484,1.368L20.306,53.141L0,1.368l2.88-1.224l17.642,44.572L39.604,0L42.484,1.368z";
    return kity.createClass("LogicalDisjunctionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("LogicalDisjunction");
            shape = new kity.Path(pathData).fill("black");
            this.operatorShape.translate(0, -5);
            // 绘制符号图形
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 负正操作符
 */
define("operator/binary-opr/minus-plus", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("MinusPlusOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Mp");
            // 绘制符号图形
            this.addOperatorShape(new kity.Rect(0, 0, 43, 3, 3).fill("black"));
            this.addOperatorShape(new kity.Rect(0, 20, 43, 3, 3).fill("black"));
            this.addOperatorShape(new kity.Rect(20, 0, 3, 43, 3).fill("black"));
        }
    });
});
/**
 * 乘法操作符
 */
define("operator/binary-opr/multiplication", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("MultiplicationOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var ltr = new kity.Rect(0, 20, 43, 3, 3).fill("black"), rtl = new kity.Rect(20, 0, 3, 43, 3).fill("black");
            this.callBase("Multiplication");
            this.addOperatorShape(ltr.setAnchor(22, 22).rotate(45));
            this.addOperatorShape(rtl.setAnchor(22, 22).rotate(45));
        }
    });
});
/**
 * 正负操作符
 */
define("operator/binary-opr/plus-minus", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("PlusMinusOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Plus-minus");
            // 绘制符号图形
            this.addOperatorShape(new kity.Rect(0, 20, 43, 3, 3).fill("black"));
            this.addOperatorShape(new kity.Rect(20, 0, 3, 43, 3).fill("black"));
            this.addOperatorShape(new kity.Rect(0, 40, 43, 3, 3).fill("black"));
        }
    });
});
/**
 * 开方操作符
 */
define("operator/binary-opr/radical", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity"), // 符号图形属性
    // 线条宽度
    SHAPE_DATA_WIDTH = 2, // 计算公式
    radians = 2 * Math.PI / 360, sin10 = Math.sin(10 * radians), cos10 = Math.cos(10 * radians), sin20 = Math.sin(20 * radians), cos20 = Math.cos(20 * radians), tan20 = Math.tan(20 * radians);
    return kity.createClass("RadicalOperator", {
        base: require("operator/binary"),
        constructor: function() {
            this.callBase("Radical");
            this.clearTransform();
        },
        applyOperand: function(radicand, exponent) {
            generateOperator.call(this, radicand, exponent);
        }
    });
    // 根据给定的操作数生成操作符的pathData
    // radicand 表示被开方数
    // exponent 表示指数
    function generateOperator(radicand, exponent) {
        var decoration = generateDecoration(), vLine = generateVLine(radicand), hLine = generateHLine(radicand);
        this.addOperatorShape(decoration);
        this.addOperatorShape(vLine);
        this.addOperatorShape(hLine);
        adjustmentPosition(mergeShape(decoration, vLine, hLine), this.operatorShape, radicand, exponent);
        adjustmentBox.call(this);
    }
    // 生成根号中的左边装饰部分
    function generateDecoration() {
        var shape = new kity.Path(), // 命名为a以便于精简表达式
        a = SHAPE_DATA_WIDTH, drawer = shape.getDrawer();
        // 根号尾部右上角开始
        drawer.moveTo(cos10 * 7 * a, 0);
        drawer.lineTo(0, sin10 * 7 * a);
        drawer.lineBy(sin20 * a * 2, cos20 * a * 2);
        drawer.lineBy(cos10 * a * 3, -sin10 * a * 3);
        drawer.lineBy(sin20 * a * 14, cos20 * a * 14);
        drawer.lineBy(a * 2, 0);
        drawer.lineBy(0, -a * 2 / sin20);
        drawer.close();
        return shape.fill("black");
    }
    // 根据操作数生成根号的竖直线部分
    function generateVLine(operand) {
        var shape = new kity.Path(), // 命名为a以便于精简表达式
        a = SHAPE_DATA_WIDTH, // 表达式高度
        h = operand.getHeight(), drawer = shape.getDrawer();
        drawer.moveTo(tan20 * h, 0);
        drawer.lineTo(0, h);
        drawer.lineBy(sin20 * a * 3, cos20 * a * 3);
        drawer.lineBy(tan20 * h + sin20 * a * 3, -(h + 3 * a * cos20));
        drawer.close();
        return shape.fill("black");
    }
    // 根据操作数生成根号的水平线部分
    function generateHLine(operand) {
        // 表达式宽度
        var w = operand.getWidth() + 2 * SHAPE_DATA_WIDTH;
        return new kity.Rect(0, 0, w, 2 * SHAPE_DATA_WIDTH).fill("black");
    }
    // 合并根号的各个部分， 并返回根号的关键点位置数据
    function mergeShape(decoration, vLine, hLine) {
        var decoBox = decoration.getRenderBox(), vLineBox = vLine.getRenderBox();
        vLine.translate(decoBox.width - SHAPE_DATA_WIDTH, 0);
        decoration.translate(0, vLineBox.height - decoBox.height);
        vLineBox = vLine.getRenderBox();
        hLine.translate(vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20, 0);
        // 返回关键点数据
        return {
            x: vLineBox.x + vLineBox.width - SHAPE_DATA_WIDTH / cos20,
            y: 0
        };
    }
    // 调整整个根号表达式的各个部分： 位置、操作符、被开方数、指数
    function adjustmentPosition(position, operator, radicand, exponent) {
        var radicandBox = radicand.getRenderBox(), diff = 0, width = 0, exponentBox = null;
        // 调整被开方数和根号的相对位置
        radicand.translate(position.x + SHAPE_DATA_WIDTH - radicandBox.x + 5, position.y + 2 * SHAPE_DATA_WIDTH + 5);
        operator.translate(5, 5);
        if (!exponent) {
            return;
        }
        exponent.setAnchor(0, 0);
        exponent.scale(.5);
        exponentBox = exponent.getRenderBox();
        // width代表适合放置指数的最小宽度
        width = exponentBox.width + exponentBox.height * tan20;
        // 指数宽度超过根号左边部分的宽度， 则移动根号和被开方数
        if (width > position.x) {
            diff = width - position.x;
            operator.translate(diff + 5, 0);
            radicand.translate(diff + 5, 0);
        } else {
            exponent.translate(position.x - width + 5, 0);
        }
    }
    // 调整整个边框的大小
    function adjustmentBox() {
        this.setBoxSize(this.operatorShape.getWidth(), this.operatorShape.getHeight() + 10);
    }
});
/**
 * 属于（集合）操作符: ∊
 */
define("operator/binary-opr/set/in-set", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M32.766,32.168H18.809c-5.25,0-9.281-1.031-12.094-3.094C2.238,25.793,0,21.458,0,16.066c0-2.742,0.691-5.338,2.074-7.787   c1.383-2.449,3.257-4.389,5.625-5.818C10.394,0.821,14.039,0,18.633,0h14.133v3.375H18.211c-4.407,0-7.887,1.008-10.441,3.023   c-2.109,1.665-3.528,4.336-4.254,8.016h29.25v3.445H3.516c0.937,3.704,2.602,6.481,4.992,8.332c2.25,1.735,5.507,2.602,9.773,2.602   h14.484V32.168z";
    return kity.createClass("InSetOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("InSet");
            this.setBoxSize(53, 63);
            this.operatorShape.translate(-1, 6);
            shape = new kity.Path(pathData).fill("black");
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 交集操作符
 */
define("operator/binary-opr/set/intersection", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M39.656,15.469v29.25h-3.375V15.75c0-3.186-1.406-6.047-4.219-8.578s-6.891-3.797-12.234-3.797S10.406,4.641,7.594,7.172   s-4.219,5.673-4.219,9.422v28.125H0V16.594c0-5.247,1.872-9.325,5.625-12.234C9.374,1.455,14.106,0,19.828,0   c5.717,0,10.45,1.455,14.203,4.359C37.78,7.269,39.656,10.969,39.656,15.469z";
    return kity.createClass("IntersectionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("Intersection");
            shape = new kity.Path(pathData).fill("black");
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 子集操作符: ⊆
 */
define("operator/binary-opr/set/sub-set", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M39.434,0v2.754H15.146c-3.907,0-6.934,1.001-9.082,3.003c-2.149,2.002-3.223,4.497-3.223,7.485   c0,2.383,0.737,4.512,2.212,6.387c1.475,1.875,2.934,2.969,4.38,3.281c2.91,0.645,4.785,0.967,5.625,0.967h24.375v2.959H15.85   c-3.008,0-5.43-0.332-7.266-0.996c-2.383-0.879-4.409-2.436-6.079-4.673C0.835,18.931,0,16.348,0,13.418   c0-2.441,0.659-4.741,1.978-6.899C3.296,4.361,5.01,2.735,7.119,1.641C9.229,0.547,12.139,0,15.85,0H39.434z M0.85,32.666h38.584   v2.754H0.85V32.666z";
    return kity.createClass("IntersectionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("SubSet");
            shape = new kity.Path(pathData).fill("black");
            this.setBoxWidth(50);
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 超集操作符: ⊇
 */
define("operator/binary-opr/set/super-set", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M0,32.203v-3.305h29.145c4.664,0,8.291-1.201,10.881-3.604c2.59-2.402,3.885-5.396,3.885-8.982   c0-2.859-0.885-5.408-2.654-7.646c-1.77-2.238-3.51-3.556-5.221-3.955c-3.469-0.773-5.73-1.16-6.785-1.16H0V0h28.301   c3.609,0,6.516,0.399,8.719,1.195c2.859,1.055,5.291,2.924,7.295,5.607c2.004,2.684,3.006,5.783,3.006,9.299   c0,2.93-0.791,5.69-2.373,8.279c-1.582,2.59-3.639,4.541-6.17,5.854c-2.531,1.313-6.024,1.969-10.477,1.969H0z M0,39.199h46.23   v3.305H0V39.199z";
    return kity.createClass("SuperSetOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("SubSet");
            this.setBoxSize(67, 63);
            shape = new kity.Path(pathData).fill("black");
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 并集操作符
 */
define("operator/binary-opr/set/union", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity"), pathData = "M0,28.688V0h3.375v28.406c0,3.19,1.406,6.047,4.219,8.578s6.794,3.797,11.953,3.797c5.155,0,9.141-1.266,11.953-3.797   s4.219-5.669,4.219-9.422V0h3.375v27.563c0,5.251-1.876,9.33-5.625,12.234c-3.753,2.909-8.394,4.359-13.922,4.359   c-5.533,0-10.173-1.45-13.922-4.359C1.872,36.892,0,33.188,0,28.688z";
    return kity.createClass("UnionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            var shape = null;
            this.callBase("Union");
            shape = new kity.Path(pathData).fill("black");
            this.addOperatorShape(shape);
        }
    });
});
/**
 * 下标操作符
 */
define("operator/binary-opr/subscript", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SubscriptOperator", {
        base: require("operator/binary"),
        constructor: function() {
            this.callBase("Subscript");
            this.setBoxSize(0, 0);
        },
        applyOperand: function(operand, subscript) {
            var operandBox = operand.getRenderBox(), subBox = subscript.getRenderBox();
            subscript.setAnchor(0, subBox.y + subBox.height);
            subscript.scale(.5);
            subscript.translate(operandBox.x + operandBox.width, 0);
        }
    });
});
/**
 * 减法操作符
 */
define("operator/binary-opr/subtraction", [ "kity", "operator/binary-opr/left-right", "operator/binary" ], function(require, exports, module) {
    var kity = require("kity");
    return kity.createClass("SubtractionOperator", {
        base: require("operator/binary-opr/left-right"),
        constructor: function() {
            this.callBase("Subtraction");
            this.addOperatorShape(new kity.Rect(0, 20, 43, 3, 3).fill("black"));
        }
    });
});
/**
 * 求和操作符：∑
 */
define("operator/binary-opr/summation", [ "kity", "operator/binary-opr/up-down", "operator/binary" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SummationOperator", {
        base: require("operator/binary-opr/up-down"),
        constructor: function() {
            this.callBase("Summation");
            this.clearTransform();
        },
        applyOperand: function(upOperand, downOperand) {
            upOperand.setAnchor(0, 0).scale(.5);
            downOperand.setAnchor(0, 0).scale(.5);
            var upWidth = upOperand.getWidth(), upHeight = upOperand.getHeight(), downWidth = downOperand.getWidth(), downHeight = downOperand.getHeight(), operandWidth = Math.max(upWidth, downWidth), operandHeight = Math.max(upHeight, downHeight), operatorShape = generateOperator();
            this.addOperatorShape(operatorShape);
            var operatorWidth = operatorShape.getWidth(), operatorHeight = operatorShape.getHeight();
            this.addOperatorShape(generateBox(operandWidth, operandHeight * 2 + operatorHeight));
            upOperand.translate((operandWidth - upWidth) / 2, 0);
            operatorShape.translate((operandWidth - operatorWidth) / 2, operandHeight);
            downOperand.translate((operandWidth - downWidth) / 2, operandHeight + operatorHeight);
        }
    });
    function generateOperator() {
        var operator = new kity.Path("M53.343,70.586c8.804,0.344,15.067-4.427,18.797-14.321h2.54l-4.573,21.994H0l39.118-38.362L0.509,0h68.582l6.097,17.903  l-2.54,0.51C66.884,7.849,59.948,2.733,51.82,3.069h-36.07l33.02,33.248L13.208,70.586H53.343z").fill("black"), operatorShape = new kity.Group();
        return operatorShape.addShape(operator);
    }
    function generateBox(width, height) {
        return new kity.Rect(0, 0, width, height).fill("transparent");
    }
});
/**
 * 上标操作符
 */
define("operator/binary-opr/superscript", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("SuperscriptOperator", {
        base: require("operator/binary"),
        constructor: function() {
            this.callBase("Superscript");
            this.setBoxSize(0, 0);
        },
        applyOperand: function(operand, superscript) {
            var operandBox = operand.getRenderBox();
            superscript.setAnchor(0, 0);
            superscript.scale(.5);
            superscript.translate(operandBox.x + operandBox.width, 0);
        }
    });
});
/**
 * 上下结合二元操作符
 * @abstract
 */
define("operator/binary-opr/up-down", [ "kity", "operator/binary", "operator/operator" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("UpDownOperator", {
        base: require("operator/binary"),
        applyOperand: function(upOperand, downOperand) {
            throw new Error("applyOperand is abstract");
        }
    });
});
/**
 * 二元操作符抽象类
 * @abstract
 */
define("operator/binary", [ "kity", "operator/operator", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("BinaryOperator", {
        base: require("operator/operator"),
        constructor: function(operatorName) {
            this.callBase(operatorName);
            // box
            this.setBoxSize(67, 63);
            this.operatorShape.translate(10, 10);
        },
        // 清理操作符的偏移
        clearTransform: function() {
            this.operatorShape.setTransform(new kity.Matrix(1, 0, 0, 1, 0, 0));
        }
    });
});
/**
 * 组合操作符
 * 操作多个表达式组合在一起
 */
define("operator/combination", [ "kity", "operator/operator", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("BinaryOperator", {
        base: require("operator/operator"),
        constructor: function() {
            this.callBase("Combination");
        },
        applyOperand: function() {
            // 偏移量
            var offset = 0, // 操作数
            operands = arguments, // 操作对象最大高度
            maxHeight = 0, cached = [];
            kity.Utils.each(operands, function(operand) {
                var box = operand.getRenderBox();
                cached.push(box);
                maxHeight = Math.max(box.height, maxHeight);
            });
            kity.Utils.each(operands, function(operand, index) {
                var box = cached[index];
                operand.translate(offset - box.x, (maxHeight - (box.y + box.height)) / 2);
                offset += box.width - box.x;
            });
        }
    });
});
/**
 * 积分操作符：∫
 */
define("operator/integration", [ "kity", "operator/operator", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity"), // 积分类型常量
    types = {
        // 单重积分
        TYPE_SINGLE: "TYPE_SINGLE",
        // 二重积分
        TYPE_DOUBLE: "TYPE_DOUBLE",
        // 三重积分
        TYPE_TRIPLE: "TYPE_TRIPLE"
    }, IntegrationOperator = kity.createClass("IntegrationOperator", {
        base: require("operator/operator"),
        constructor: function(type) {
            this.callBase("Integration");
            // 默认是普通单重积分
            this.type = type || types.TYPE_SINGLE;
        },
        setType: function(type) {
            if (types[type]) {
                this.type = type;
            }
        },
        // 重置类型
        resetType: function() {
            this.type = types.TYPE_SINGLE;
        },
        /*
             * 积分操作符应用操作数
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
        applyOperand: function(integrand, supOperand, subOperand) {
            generateOperator.call(this);
            adjustmentPosition.call(this, this.operatorShape, integrand, supOperand, subOperand);
        }
    });
    // 附加类型常量
    IntegrationOperator.types = types;
    /* 返回操作符对象 */
    return IntegrationOperator;
    function generateOperator() {
        var path = "M21.689,98.771l12.627-59.922C39.864,12.537,46.389-0.406,53.881,0.01c1.741,0.817,2.646,2.694,2.731,5.641   c-0.835,2.774-1.867,4.047-3.08,3.82c-0.916-0.171-1.698-1.05-2.346-2.636c-0.351-1.532-0.674-2.327-0.976-2.381   c-2.478-1.93-6.407,9.792-11.781,35.166l-12.758,60.628c-8.028,39.533-15.718,57.879-23.068,55.039   c-2.354-0.932-3.111-2.78-2.275-5.554c0.443-2.368,1.42-3.397,2.948-3.113c0.915,0.171,1.54,1.021,1.891,2.552   c0.43,1.054,0.799,1.615,1.105,1.672c1.522,0.285,3.337-3.532,5.452-11.437C13.875,132.961,17.19,119.432,21.689,98.771z", group = new kity.Group();
        this.addOperatorShape(group);
        switch (this.type) {
          case types.TYPE_SINGLE:
            group.addShape(new kity.Path(path).fill("black"));
            break;

          case types.TYPE_DOUBLE:
            var symbol = new kity.Path(path).fill("black"), useShape = new kity.Use(symbol);
            group.addShape(symbol);
            useShape.translate(symbol.getWidth() / 2, 0);
            group.addShape(useShape);
            break;

          case types.TYPE_TRIPLE:
            var symbol = new kity.Path(path).fill("black"), useShape = new kity.Use(symbol);
            group.addShape(symbol);
            useShape.translate(symbol.getWidth() / 2, 0);
            group.addShape(useShape);
            useShape = new kity.Use(symbol);
            useShape.translate(symbol.getWidth(), 0);
            group.addShape(useShape);
            break;
        }
        return group;
    }
    function adjustmentPosition(operatorShape, integrand, supOperand, subOperand) {
        var operatorBox = operatorShape.getRenderBox(), integrandBox = integrand.getRenderBox(), supBox = null, subBox = null, expBox = null, // 被积函数的偏移
        offset = {
            x: operatorBox.width,
            y: 0
        }, maxHeight = 0;
        if (supOperand) {
            supOperand.setAnchor(0, 0).scale(.7);
            subOperand.setAnchor(0, 0).scale(.7);
            supBox = supOperand.getRenderBox();
            subBox = subOperand.getRenderBox();
            // 上限偏移
            offset.x += 5;
            supOperand.translate(offset.x, 5);
            // 符号偏移
            offset.y += supBox.height / 2;
            offset.x += supBox.width;
            operatorShape.translate(0, offset.y);
            // 下限偏移
            subOperand.translate(operatorBox.width - 30, offset.y + operatorBox.height - subBox.height + 12);
        }
        /* 被积函数和操作符及上下限的偏移 */
        // 被积函数偏移
        maxHeight = Math.max(operatorBox.height, integrandBox.height);
        integrand.translate(offset.x + 10, (maxHeight - integrandBox.height) / 2 + offset.y - integrandBox.y);
        // 操作符偏移
        maxHeight = (maxHeight - operatorBox.height) / 2;
        operatorShape.translate(0, maxHeight);
        supOperand.translate(0, maxHeight);
        subOperand.translate(0, maxHeight);
        /* 操作符边框的调整， 包裹住所有内容 */
        // 获取整个表达式经过调整后的大小
        expBox = this.parentExpression.getRenderBox();
        // 要保证符号上下的空间是相同的
        var diff = expBox.height - offset.y - operatorBox.height;
        this.box.setWidth(expBox.width);
        // 下部空间大于上部空间， 调整整个空间
        if (diff > offset.y) {
            diff = diff - offset.y;
            // 移动整个空间中的内容
            this.box.setHeight(expBox.height + diff);
            supOperand.translate(0, diff);
            subOperand.translate(0, diff);
            operatorShape.translate(0, diff);
            integrand.translate(0, diff);
        } else {
            // 仅调整边框大小
            this.box.setHeight(expBox.height + offset.y - diff);
        }
    }
});
/**
 * 操作符抽象类
 * @abstract
 */
define("operator/operator", [ "kity", "signgroup" ], function(require, exports, modules) {
    var kity = require("kity");
    return kity.createClass("Operator", {
        base: require("signgroup"),
        constructor: function(operatorName) {
            this.callBase();
            // 该操作符所属的表达式
            this.parentExpression = null;
            // 操作符名称
            this.operatorName = operatorName;
            // 操作符图形
            this.operatorShape = new kity.Group();
            // 操作符边框, 根据具体的操作符， 可调用setBoxSize接口自定义大小
            this.box = new kity.Rect(0, 0, 0, 0).fill("transparent");
            this.addShape(this.box);
            this.addShape(this.operatorShape);
        },
        applyOperand: function() {
            throw new Error("applyOperand is abstract");
        },
        setParentExpression: function(exp) {
            this.parentExpression = exp;
        },
        clearParentExpression: function() {
            this.parentExpression = null;
        },
        setBoxSize: function(w, h) {
            return this.box.setSize(w, h);
        },
        setBoxWidth: function(w) {
            return this.box.setWidth(w);
        },
        setBoxHeight: function(h) {
            return this.box.setHeight(h);
        },
        // 提供给具体实现类附加其绘制的操作符图形的接口
        addOperatorShape: function(shpae) {
            return this.operatorShape.addShape(shpae);
        }
    });
});
/**
 * Created by hn on 13-12-3.
 */
define("signgroup", [ "kity" ], function(require, exports, module) {
    var kity = require("kity");
    return kity.createClass("SignGroup", {
        base: kity.Group,
        constructor: function() {
            this.callBase();
            this.children = [];
            this.zoom = 1;
        },
        getChildren: function() {
            return this.children;
        },
        getChild: function(index) {
            return this.children[index] || null;
        },
        setZoom: function(zoom) {
            this.zoom = zoom;
        },
        getZoom: function() {
            return this.zoom;
        },
        setChildren: function(index, exp) {
            // 首先清理掉之前的表达式
            if (this.children[index]) {
                this.children[index].remove();
            }
            this.children[index] = exp;
            this.addShape(exp);
        },
        addedCall: function() {}
    });
});

/**
 * 模块暴露
 */

( function ( global ) {

    define( 'kf.start', function ( require ) {

        global.kf = {

            // base
            Formula: require( "formula" ),

            // expression
            TextExpression: require( "expression/text" ),
            EmptyExpression: require( "expression/empty" ),
            CombinationExpression: require( "expression/compound-exp/combination" ),

            AdditionExpression: require( "expression/compound-exp/binary-exp/addition" ),
            AsteriskExpression: require( "expression/compound-exp/binary-exp/asterisk" ),
            DivisionExpression: require( "expression/compound-exp/binary-exp/division" ),
            DotExpression: require( "expression/compound-exp/binary-exp/dot" ),
            EqualExpression: require( "expression/compound-exp/binary-exp/equal" ),
            FractionExpression: require( "expression/compound-exp/binary-exp/fraction" ),
            IntegrationExpression: require( "expression/compound-exp/integration" ),
            LogicalConjunctionExpression: require( "expression/compound-exp/binary-exp/logical-conjunction" ),
            LogicalDisjunctionExpression: require( "expression/compound-exp/binary-exp/logical-disjunction" ),
            MultiplicationExpression: require( "expression/compound-exp/binary-exp/multiplication" ),
            RadicalExpression: require( "expression/compound-exp/binary-exp/radical" ),
            SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
            SubscriptExpression: require( "expression/compound-exp/binary-exp/subscript" ),
            SubtractionExpression: require( "expression/compound-exp/binary-exp/subtraction" ),
            SummationExpression: require( "expression/compound-exp/binary-exp/summation" ),
            PlusMinusExpression: require( "expression/compound-exp/binary-exp/plus-minus" ),
            MinusPlusExpression: require( "expression/compound-exp/binary-exp/minus-plus"),

            // set expression
            IntersectionExpression: require( "expression/compound-exp/binary-exp/set/intersection" ),
            UnionExpression: require( "expression/compound-exp/binary-exp/set/union" ),
            SubSetExpression: require( "expression/compound-exp/binary-exp/set/sub-set" ),
            SuperSetExpression: require( "expression/compound-exp/binary-exp/set/super-set" ),
            InSetExpression: require( "expression/compound-exp/binary-exp/set/in-set" )

        };

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
})();
