!function(Jt, te) {
    "object" == typeof exports && typeof module < "u" ? module.exports = te() : "function" == typeof define && define.amd ? define(te) : (Jt = typeof globalThis < "u" ? globalThis : Jt || self).bootstrap = te()
}(this, function() {
    "use strict";
    const Oe = "transitionend"
      , dn = n=>{
        let t = n.getAttribute("data-bs-target");
        if (!t || "#" === t) {
            let e = n.getAttribute("href");
            if (!e || !e.includes("#") && !e.startsWith("."))
                return null;
            e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
            t = e && "#" !== e ? e.trim() : null
        }
        return t
    }
      , pn = n=>{
        const t = dn(n);
        return t && document.querySelector(t) ? t : null
    }
      , z = n=>{
        const t = dn(n);
        return t ? document.querySelector(t) : null
    }
      , _n = n=>{
        n.dispatchEvent(new Event(Oe))
    }
      , G = n=>!(!n || "object" != typeof n) && (typeof n.jquery < "u" && (n = n[0]),
    typeof n.nodeType < "u")
      , tt = n=>G(n) ? n.jquery ? n[0] : n : "string" == typeof n && n.length > 0 ? document.querySelector(n) : null
      , Tt = n=>{
        if (!G(n) || 0 === n.getClientRects().length)
            return !1;
        const t = "visible" === getComputedStyle(n).getPropertyValue("visibility")
          , e = n.closest("details:not([open])");
        if (!e)
            return t;
        if (e !== n) {
            const s = n.closest("summary");
            if (s && s.parentNode !== e || null === s)
                return !1
        }
        return t
    }
      , et = n=>!(n && n.nodeType === Node.ELEMENT_NODE && !n.classList.contains("disabled")) || (typeof n.disabled < "u" ? n.disabled : n.hasAttribute("disabled") && "false" !== n.getAttribute("disabled"))
      , mn = n=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof n.getRootNode) {
            const t = n.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return n instanceof ShadowRoot ? n : n.parentNode ? mn(n.parentNode) : null
    }
      , ee = ()=>{}
      , gn = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , Ce = []
      , R = ()=>"rtl" === document.documentElement.dir
      , k = n=>{
        (n=>{
            "loading" === document.readyState ? (Ce.length || document.addEventListener("DOMContentLoaded", ()=>{
                for (const t of Ce)
                    t()
            }
            ),
            Ce.push(n)) : n()
        }
        )(()=>{
            const t = gn();
            if (t) {
                const e = n.NAME
                  , s = t.fn[e];
                t.fn[e] = n.jQueryInterface,
                t.fn[e].Constructor = n,
                t.fn[e].noConflict = ()=>(t.fn[e] = s,
                n.jQueryInterface)
            }
        }
        )
    }
      , q = n=>{
        "function" == typeof n && n()
    }
      , En = (n,t,e=!0)=>{
        if (!e)
            return void q(n);
        const i = (n=>{
            if (!n)
                return 0;
            let {transitionDuration: t, transitionDelay: e} = window.getComputedStyle(n);
            const s = Number.parseFloat(t)
              , i = Number.parseFloat(e);
            return s || i ? (t = t.split(",")[0],
            e = e.split(",")[0],
            1e3 * (Number.parseFloat(t) + Number.parseFloat(e))) : 0
        }
        )(t) + 5;
        let r = !1;
        const o = ({target: a})=>{
            a === t && (r = !0,
            t.removeEventListener(Oe, o),
            q(n))
        }
        ;
        t.addEventListener(Oe, o),
        setTimeout(()=>{
            r || _n(t)
        }
        , i)
    }
      , Ne = (n,t,e,s)=>{
        const i = n.length;
        let r = n.indexOf(t);
        return -1 === r ? !e && s ? n[i - 1] : n[0] : (r += e ? 1 : -1,
        s && (r = (r + i) % i),
        n[Math.max(0, Math.min(r, i - 1))])
    }
      , ai = /[^.]*(?=\..*)\.|.*/
      , ci = /\..*/
      , li = /::\d+$/
      , Se = {};
    let vn = 1;
    const bn = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , ui = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function An(n, t) {
        return t && `${t}::${vn++}` || n.uidEvent || vn++
    }
    function Tn(n) {
        const t = An(n);
        return n.uidEvent = t,
        Se[t] = Se[t] || {},
        Se[t]
    }
    function yn(n, t, e=null) {
        return Object.values(n).find(s=>s.callable === t && s.delegationSelector === e)
    }
    function wn(n, t, e) {
        const s = "string" == typeof t
          , i = s ? e : t || e;
        let r = Cn(n);
        return ui.has(r) || (r = n),
        [s, i, r]
    }
    function On(n, t, e, s, i) {
        if ("string" != typeof t || !n)
            return;
        let[r,o,a] = wn(t, e, s);
        var A;
        t in bn && (A = o,
        o = function(_) {
            if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget))
                return A.call(this, _)
        }
        );
        const l = Tn(n)
          , h = l[a] || (l[a] = {})
          , u = yn(h, o, r ? e : null);
        if (u)
            return void (u.oneOff = u.oneOff && i);
        const d = An(o, t.replace(ai, ""))
          , m = r ? function fi(n, t, e) {
            return function s(i) {
                const r = n.querySelectorAll(t);
                for (let {target: o} = i; o && o !== this; o = o.parentNode)
                    for (const a of r)
                        if (a === o)
                            return $e(i, {
                                delegateTarget: o
                            }),
                            s.oneOff && c.off(n, i.type, t, e),
                            e.apply(o, [i])
            }
        }(n, e, o) : function hi(n, t) {
            return function e(s) {
                return $e(s, {
                    delegateTarget: n
                }),
                e.oneOff && c.off(n, s.type, t),
                t.apply(n, [s])
            }
        }(n, o);
        m.delegationSelector = r ? e : null,
        m.callable = o,
        m.oneOff = i,
        m.uidEvent = d,
        h[d] = m,
        n.addEventListener(a, m, r)
    }
    function De(n, t, e, s, i) {
        const r = yn(t[e], s, i);
        !r || (n.removeEventListener(e, r, Boolean(i)),
        delete t[e][r.uidEvent])
    }
    function di(n, t, e, s) {
        const i = t[e] || {};
        for (const r of Object.keys(i))
            if (r.includes(s)) {
                const o = i[r];
                De(n, t, e, o.callable, o.delegationSelector)
            }
    }
    function Cn(n) {
        return n = n.replace(ci, ""),
        bn[n] || n
    }
    const c = {
        on(n, t, e, s) {
            On(n, t, e, s, !1)
        },
        one(n, t, e, s) {
            On(n, t, e, s, !0)
        },
        off(n, t, e, s) {
            if ("string" != typeof t || !n)
                return;
            const [i,r,o] = wn(t, e, s)
              , a = o !== t
              , l = Tn(n)
              , h = l[o] || {}
              , u = t.startsWith(".");
            if (typeof r < "u") {
                if (!Object.keys(h).length)
                    return;
                De(n, l, o, r, i ? e : null)
            } else {
                if (u)
                    for (const d of Object.keys(l))
                        di(n, l, d, t.slice(1));
                for (const d of Object.keys(h)) {
                    const m = d.replace(li, "");
                    if (!a || t.includes(m)) {
                        const f = h[d];
                        De(n, l, o, f.callable, f.delegationSelector)
                    }
                }
            }
        },
        trigger(n, t, e) {
            if ("string" != typeof t || !n)
                return null;
            const s = gn();
            let o = null
              , a = !0
              , l = !0
              , h = !1;
            t !== Cn(t) && s && (o = s.Event(t, e),
            s(n).trigger(o),
            a = !o.isPropagationStopped(),
            l = !o.isImmediatePropagationStopped(),
            h = o.isDefaultPrevented());
            let u = new Event(t,{
                bubbles: a,
                cancelable: !0
            });
            return u = $e(u, e),
            h && u.preventDefault(),
            l && n.dispatchEvent(u),
            u.defaultPrevented && o && o.preventDefault(),
            u
        }
    };
    function $e(n, t) {
        for (const [e,s] of Object.entries(t || {}))
            try {
                n[e] = s
            } catch {
                Object.defineProperty(n, e, {
                    configurable: !0,
                    get: ()=>s
                })
            }
        return n
    }
    const nt = new Map
      , Le = {
        set(n, t, e) {
            nt.has(n) || nt.set(n, new Map);
            const s = nt.get(n);
            s.has(t) || 0 === s.size ? s.set(t, e) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (n,t)=>nt.has(n) && nt.get(n).get(t) || null,
        remove(n, t) {
            if (!nt.has(n))
                return;
            const e = nt.get(n);
            e.delete(t),
            0 === e.size && nt.delete(n)
        }
    };
    function Nn(n) {
        if ("true" === n)
            return !0;
        if ("false" === n)
            return !1;
        if (n === Number(n).toString())
            return Number(n);
        if ("" === n || "null" === n)
            return null;
        if ("string" != typeof n)
            return n;
        try {
            return JSON.parse(decodeURIComponent(n))
        } catch {
            return n
        }
    }
    function Ie(n) {
        return n.replace(/[A-Z]/g, t=>`-${t.toLowerCase()}`)
    }
    const X = {
        setDataAttribute(n, t, e) {
            n.setAttribute(`data-bs-${Ie(t)}`, e)
        },
        removeDataAttribute(n, t) {
            n.removeAttribute(`data-bs-${Ie(t)}`)
        },
        getDataAttributes(n) {
            if (!n)
                return {};
            const t = {}
              , e = Object.keys(n.dataset).filter(s=>s.startsWith("bs") && !s.startsWith("bsConfig"));
            for (const s of e) {
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                t[i] = Nn(n.dataset[s])
            }
            return t
        },
        getDataAttribute: (n,t)=>Nn(n.getAttribute(`data-bs-${Ie(t)}`))
    };
    class Wt {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const s = G(e) ? X.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof s ? s : {},
                ...G(e) ? X.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const s of Object.keys(e)) {
                const i = e[s]
                  , r = t[s]
                  , o = G(r) ? "element" : null == (n = r) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(i).test(o))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)
            }
            var n
        }
    }
    class W extends Wt {
        constructor(t, e) {
            super(),
            (t = tt(t)) && (this._element = t,
            this._config = this._getConfig(e),
            Le.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            Le.remove(this._element, this.constructor.DATA_KEY),
            c.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, s=!0) {
            En(t, e, s)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return Le.get(tt(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const ne = (n,t="hide")=>{
        const s = n.NAME;
        c.on(document, `click.dismiss ${n.EVENT_KEY}`, `[data-bs-dismiss="${s}"]`, function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            et(this))
                return;
            const r = z(this) || this.closest(`.${s}`);
            n.getOrCreateInstance(r)[t]()
        })
    }
      , Sn = ".bs.alert"
      , mi = `close ${Sn}`
      , gi = `closed ${Sn}`;
    class Kt extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (c.trigger(this._element, mi).defaultPrevented)
                return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, e)
        }
        _destroyElement() {
            this._element.remove(),
            c.trigger(this._element, gi),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Kt.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    ne(Kt, "close"),
    k(Kt);
    const Dn = '[data-bs-toggle="button"]';
    class Bt extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Bt.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }
    c.on(document, "click.bs.button.data-api", Dn, n=>{
        n.preventDefault();
        const t = n.target.closest(Dn);
        Bt.getOrCreateInstance(t).toggle()
    }
    ),
    k(Bt);
    const p = {
        find: (n,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t, n)),
        findOne: (n,t=document.documentElement)=>Element.prototype.querySelector.call(t, n),
        children: (n,t)=>[].concat(...n.children).filter(e=>e.matches(t)),
        parents(n, t) {
            const e = [];
            let s = n.parentNode.closest(t);
            for (; s; )
                e.push(s),
                s = s.parentNode.closest(t);
            return e
        },
        prev(n, t) {
            let e = n.previousElementSibling;
            for (; e; ) {
                if (e.matches(t))
                    return [e];
                e = e.previousElementSibling
            }
            return []
        },
        next(n, t) {
            let e = n.nextElementSibling;
            for (; e; ) {
                if (e.matches(t))
                    return [e];
                e = e.nextElementSibling
            }
            return []
        },
        focusableChildren(n) {
            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");
            return this.find(t, n).filter(e=>!et(e) && Tt(e))
        }
    }
      , yt = ".bs.swipe"
      , Ci = `touchstart ${yt}`
      , Ni = `touchmove ${yt}`
      , Si = `touchend ${yt}`
      , Di = `pointerdown ${yt}`
      , $i = `pointerup ${yt}`
      , xi = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , Ri = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class se extends Wt {
        constructor(t, e) {
            super(),
            this._element = t,
            t && se.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return xi
        }
        static get DefaultType() {
            return Ri
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            c.off(this._element, yt)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            q(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && q(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (c.on(this._element, Di, t=>this._start(t)),
            c.on(this._element, $i, t=>this._end(t)),
            this._element.classList.add("pointer-event")) : (c.on(this._element, Ci, t=>this._start(t)),
            c.on(this._element, Ni, t=>this._move(t)),
            c.on(this._element, Si, t=>this._end(t)))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const st = ".bs.carousel"
      , $n = ".data-api"
      , jt = "next"
      , wt = "prev"
      , Ot = "left"
      , ie = "right"
      , Ki = `slide ${st}`
      , Me = `slid ${st}`
      , Bi = `keydown ${st}`
      , ji = `mouseenter ${st}`
      , Yi = `mouseleave ${st}`
      , Fi = `dragstart ${st}`
      , Ui = `load ${st}${$n}`
      , zi = `click ${st}${$n}`
      , Ln = "carousel"
      , re = "active"
      , ir = {
        ArrowLeft: ie,
        ArrowRight: Ot
    }
      , rr = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , or = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Ct extends W {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = p.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === Ln && this.cycle()
        }
        static get Default() {
            return rr
        }
        static get DefaultType() {
            return or
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(jt)
        }
        nextWhenVisible() {
            !document.hidden && Tt(this._element) && this.next()
        }
        prev() {
            this._slide(wt)
        }
        pause() {
            this._isSliding && _n(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            if (this._config.ride) {
                if (this._isSliding)
                    return void c.one(this._element, Me, ()=>this.cycle());
                this.cycle()
            }
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void c.one(this._element, Me, ()=>this.to(t));
            const s = this._getItemIndex(this._getActive());
            s !== t && this._slide(t > s ? jt : wt, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && c.on(this._element, Bi, t=>this._keydown(t)),
            "hover" === this._config.pause && (c.on(this._element, ji, ()=>this.pause()),
            c.on(this._element, Yi, ()=>this._maybeEnableCycle())),
            this._config.touch && se.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const s of p.find(".carousel-item img", this._element))
                c.on(s, Fi, i=>i.preventDefault());
            this._swipeHelper = new se(this._element,{
                leftCallback: ()=>this._slide(this._directionToOrder(Ot)),
                rightCallback: ()=>this._slide(this._directionToOrder(ie)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval))
                }
            })
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = ir[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = p.findOne(".active", this._indicatorsElement);
            e.classList.remove(re),
            e.removeAttribute("aria-current");
            const s = p.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            s && (s.classList.add(re),
            s.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const s = this._getActive()
              , i = t === jt
              , r = e || Ne(this._getItems(), s, i, this._config.wrap);
            if (r === s)
                return;
            const o = this._getItemIndex(r)
              , a = f=>c.trigger(this._element, f, {
                relatedTarget: r,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(s),
                to: o
            });
            if (a(Ki).defaultPrevented || !s || !r)
                return;
            const h = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(o),
            this._activeElement = r;
            const u = i ? "carousel-item-start" : "carousel-item-end"
              , d = i ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(d),
            s.classList.add(u),
            r.classList.add(u),
            this._queueCallback(()=>{
                r.classList.remove(u, d),
                r.classList.add(re),
                s.classList.remove(re, d, u),
                this._isSliding = !1,
                a(Me)
            }
            , s, this._isAnimated()),
            h && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return p.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return p.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return R() ? t === Ot ? wt : jt : t === Ot ? jt : wt
        }
        _orderToDirection(t) {
            return R() ? t === wt ? Ot : ie : t === wt ? ie : Ot
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Ct.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            })
        }
    }
    c.on(document, zi, "[data-bs-slide], [data-bs-slide-to]", function(n) {
        const t = z(this);
        if (!t || !t.classList.contains(Ln))
            return;
        n.preventDefault();
        const e = Ct.getOrCreateInstance(t)
          , s = this.getAttribute("data-bs-slide-to");
        return s ? (e.to(s),
        void e._maybeEnableCycle()) : "next" === X.getDataAttribute(this, "slide") ? (e.next(),
        void e._maybeEnableCycle()) : (e.prev(),
        void e._maybeEnableCycle())
    }),
    c.on(window, Ui, ()=>{
        const n = p.find('[data-bs-ride="carousel"]');
        for (const t of n)
            Ct.getOrCreateInstance(t)
    }
    ),
    k(Ct);
    const Yt = ".bs.collapse"
      , lr = `show ${Yt}`
      , ur = `shown ${Yt}`
      , hr = `hide ${Yt}`
      , fr = `hidden ${Yt}`
      , dr = `click ${Yt}.data-api`
      , Pe = "show"
      , Nt = "collapse"
      , oe = "collapsing"
      , _r = `:scope .${Nt} .${Nt}`
      , xe = '[data-bs-toggle="collapse"]'
      , br = {
        parent: null,
        toggle: !0
    }
      , Ar = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class St extends W {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const s = p.find(xe);
            for (const i of s) {
                const r = pn(i)
                  , o = p.find(r).filter(a=>a === this._element);
                null !== r && o.length && this._triggerArray.push(i)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return br
        }
        static get DefaultType() {
            return Ar
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(a=>a !== this._element).map(a=>St.getOrCreateInstance(a, {
                toggle: !1
            }))),
            t.length && t[0]._isTransitioning || c.trigger(this._element, lr).defaultPrevented)
                return;
            for (const a of t)
                a.hide();
            const s = this._getDimension();
            this._element.classList.remove(Nt),
            this._element.classList.add(oe),
            this._element.style[s] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const o = `scroll ${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(oe),
                this._element.classList.add(Nt, Pe),
                this._element.style[s] = "",
                c.trigger(this._element, ur)
            }
            , this._element, !0),
            this._element.style[s] = `${this._element[o]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || c.trigger(this._element, hr).defaultPrevented)
                return;
            const e = this._getDimension();
            this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`,
            this._element.classList.add(oe),
            this._element.classList.remove(Nt, Pe);
            for (const i of this._triggerArray) {
                const r = z(i);
                r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1)
            }
            this._isTransitioning = !0,
            this._element.style[e] = "",
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(oe),
                this._element.classList.add(Nt),
                c.trigger(this._element, fr)
            }
            , this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(Pe)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = tt(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(xe);
            for (const e of t) {
                const s = z(e);
                s && this._addAriaAndCollapsedClass([e], this._isShown(s))
            }
        }
        _getFirstLevelChildren(t) {
            const e = p.find(_r, this._config.parent);
            return p.find(t, this._config.parent).filter(s=>!e.includes(s))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const s of t)
                    s.classList.toggle("collapsed", !e),
                    s.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function() {
                const s = St.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (typeof s[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    s[t]()
                }
            })
        }
    }
    c.on(document, dr, xe, function(n) {
        ("A" === n.target.tagName || n.delegateTarget && "A" === n.delegateTarget.tagName) && n.preventDefault();
        const t = pn(this)
          , e = p.find(t);
        for (const s of e)
            St.getOrCreateInstance(s, {
                toggle: !1
            }).toggle()
    }),
    k(St);
    var $ = "top"
      , M = "bottom"
      , P = "right"
      , L = "left"
      , ae = "auto"
      , Dt = [$, M, P, L]
      , at = "start"
      , $t = "end"
      , Pn = "clippingParents"
      , Re = "viewport"
      , Lt = "popper"
      , xn = "reference"
      , ke = Dt.reduce(function(n, t) {
        return n.concat([t + "-" + at, t + "-" + $t])
    }, [])
      , Ve = [].concat(Dt, [ae]).reduce(function(n, t) {
        return n.concat([t, t + "-" + at, t + "-" + $t])
    }, [])
      , Rn = "beforeRead"
      , Vn = "afterRead"
      , Hn = "beforeMain"
      , Kn = "afterMain"
      , Bn = "beforeWrite"
      , Yn = "afterWrite"
      , Fn = [Rn, "read", Vn, Hn, "main", Kn, Bn, "write", Yn];
    function F(n) {
        return n ? (n.nodeName || "").toLowerCase() : null
    }
    function V(n) {
        if (null == n)
            return window;
        if ("[object Window]" !== n.toString()) {
            var t = n.ownerDocument;
            return t && t.defaultView || window
        }
        return n
    }
    function ct(n) {
        return n instanceof V(n).Element || n instanceof Element
    }
    function H(n) {
        return n instanceof V(n).HTMLElement || n instanceof HTMLElement
    }
    function He(n) {
        return !(typeof ShadowRoot > "u") && (n instanceof V(n).ShadowRoot || n instanceof ShadowRoot)
    }
    const We = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function Tr(n) {
            var t = n.state;
            Object.keys(t.elements).forEach(function(e) {
                var s = t.styles[e] || {}
                  , i = t.attributes[e] || {}
                  , r = t.elements[e];
                !H(r) || !F(r) || (Object.assign(r.style, s),
                Object.keys(i).forEach(function(o) {
                    var a = i[o];
                    !1 === a ? r.removeAttribute(o) : r.setAttribute(o, !0 === a ? "" : a)
                }))
            })
        },
        effect: function yr(n) {
            var t = n.state
              , e = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(t.elements.popper.style, e.popper),
            t.styles = e,
            t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow),
            function() {
                Object.keys(t.elements).forEach(function(s) {
                    var i = t.elements[s]
                      , r = t.attributes[s] || {}
                      , a = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : e[s]).reduce(function(l, h) {
                        return l[h] = "",
                        l
                    }, {});
                    !H(i) || !F(i) || (Object.assign(i.style, a),
                    Object.keys(r).forEach(function(l) {
                        i.removeAttribute(l)
                    }))
                })
            }
        },
        requires: ["computeStyles"]
    };
    function U(n) {
        return n.split("-")[0]
    }
    var lt = Math.max
      , ce = Math.min
      , It = Math.round;
    function Ke() {
        var n = navigator.userAgentData;
        return null != n && n.brands ? n.brands.map(function(t) {
            return t.brand + "/" + t.version
        }).join(" ") : navigator.userAgent
    }
    function Un() {
        return !/^((?!chrome|android).)*safari/i.test(Ke())
    }
    function Mt(n, t, e) {
        void 0 === t && (t = !1),
        void 0 === e && (e = !1);
        var s = n.getBoundingClientRect()
          , i = 1
          , r = 1;
        t && H(n) && (i = n.offsetWidth > 0 && It(s.width) / n.offsetWidth || 1,
        r = n.offsetHeight > 0 && It(s.height) / n.offsetHeight || 1);
        var a = (ct(n) ? V(n) : window).visualViewport
          , l = !Un() && e
          , h = (s.left + (l && a ? a.offsetLeft : 0)) / i
          , u = (s.top + (l && a ? a.offsetTop : 0)) / r
          , d = s.width / i
          , m = s.height / r;
        return {
            width: d,
            height: m,
            top: u,
            right: h + d,
            bottom: u + m,
            left: h,
            x: h,
            y: u
        }
    }
    function Be(n) {
        var t = Mt(n)
          , e = n.offsetWidth
          , s = n.offsetHeight;
        return Math.abs(t.width - e) <= 1 && (e = t.width),
        Math.abs(t.height - s) <= 1 && (s = t.height),
        {
            x: n.offsetLeft,
            y: n.offsetTop,
            width: e,
            height: s
        }
    }
    function zn(n, t) {
        var e = t.getRootNode && t.getRootNode();
        if (n.contains(t))
            return !0;
        if (e && He(e)) {
            var s = t;
            do {
                if (s && n.isSameNode(s))
                    return !0;
                s = s.parentNode || s.host
            } while (s)
        }
        return !1
    }
    function Q(n) {
        return V(n).getComputedStyle(n)
    }
    function wr(n) {
        return ["table", "td", "th"].indexOf(F(n)) >= 0
    }
    function it(n) {
        return ((ct(n) ? n.ownerDocument : n.document) || window.document).documentElement
    }
    function le(n) {
        return "html" === F(n) ? n : n.assignedSlot || n.parentNode || (He(n) ? n.host : null) || it(n)
    }
    function Gn(n) {
        return H(n) && "fixed" !== Q(n).position ? n.offsetParent : null
    }
    function Ft(n) {
        for (var t = V(n), e = Gn(n); e && wr(e) && "static" === Q(e).position; )
            e = Gn(e);
        return e && ("html" === F(e) || "body" === F(e) && "static" === Q(e).position) ? t : e || function Or(n) {
            var t = /firefox/i.test(Ke());
            if (/Trident/i.test(Ke()) && H(n) && "fixed" === Q(n).position)
                return null;
            var i = le(n);
            for (He(i) && (i = i.host); H(i) && ["html", "body"].indexOf(F(i)) < 0; ) {
                var r = Q(i);
                if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                    return i;
                i = i.parentNode
            }
            return null
        }(n) || t
    }
    function je(n) {
        return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y"
    }
    function Ut(n, t, e) {
        return lt(n, ce(t, e))
    }
    function Xn(n) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, n)
    }
    function Qn(n, t) {
        return t.reduce(function(e, s) {
            return e[s] = n,
            e
        }, {})
    }
    const Zn = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function Sr(n) {
            var t, e = n.state, s = n.name, i = n.options, r = e.elements.arrow, o = e.modifiersData.popperOffsets, a = U(e.placement), l = je(a), u = [L, P].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var d = function(t, e) {
                    return Xn("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : Qn(t, Dt))
                }(i.padding, e)
                  , m = Be(r)
                  , f = "y" === l ? $ : L
                  , A = "y" === l ? M : P
                  , _ = e.rects.reference[u] + e.rects.reference[l] - o[l] - e.rects.popper[u]
                  , E = o[l] - e.rects.reference[l]
                  , T = Ft(r)
                  , w = T ? "y" === l ? T.clientHeight || 0 : T.clientWidth || 0 : 0
                  , b = w / 2 - m[u] / 2 + (_ / 2 - E / 2)
                  , y = Ut(d[f], b, w - m[u] - d[A]);
                e.modifiersData[s] = ((t = {})[l] = y,
                t.centerOffset = y - b,
                t)
            }
        },
        effect: function Dr(n) {
            var t = n.state
              , s = n.options.element
              , i = void 0 === s ? "[data-popper-arrow]" : s;
            null != i && ("string" == typeof i && !(i = t.elements.popper.querySelector(i)) || !zn(t.elements.popper, i) || (t.elements.arrow = i))
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function Pt(n) {
        return n.split("-")[1]
    }
    var $r = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function Jn(n) {
        var t, e = n.popper, s = n.popperRect, i = n.placement, r = n.variation, o = n.offsets, a = n.position, l = n.gpuAcceleration, h = n.adaptive, u = n.roundOffsets, d = n.isFixed, m = o.x, f = void 0 === m ? 0 : m, A = o.y, _ = void 0 === A ? 0 : A, E = "function" == typeof u ? u({
            x: f,
            y: _
        }) : {
            x: f,
            y: _
        };
        f = E.x,
        _ = E.y;
        var T = o.hasOwnProperty("x")
          , w = o.hasOwnProperty("y")
          , O = L
          , g = $
          , v = window;
        if (h) {
            var b = Ft(e)
              , y = "clientHeight"
              , S = "clientWidth";
            b === V(e) && "static" !== Q(b = it(e)).position && "absolute" === a && (y = "scrollHeight",
            S = "scrollWidth"),
            (i === $ || (i === L || i === P) && r === $t) && (g = M,
            _ -= (d && b === v && v.visualViewport ? v.visualViewport.height : b[y]) - s.height,
            _ *= l ? 1 : -1),
            i !== L && (i !== $ && i !== M || r !== $t) || (O = P,
            f -= (d && b === v && v.visualViewport ? v.visualViewport.width : b[S]) - s.width,
            f *= l ? 1 : -1)
        }
        var I, D = Object.assign({
            position: a
        }, h && $r), j = !0 === u ? function Lr(n) {
            var e = n.y
              , i = window.devicePixelRatio || 1;
            return {
                x: It(n.x * i) / i || 0,
                y: It(e * i) / i || 0
            }
        }({
            x: f,
            y: _
        }) : {
            x: f,
            y: _
        };
        return f = j.x,
        _ = j.y,
        Object.assign({}, D, l ? ((I = {})[g] = w ? "0" : "",
        I[O] = T ? "0" : "",
        I.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + _ + "px)" : "translate3d(" + f + "px, " + _ + "px, 0)",
        I) : ((t = {})[g] = w ? _ + "px" : "",
        t[O] = T ? f + "px" : "",
        t.transform = "",
        t))
    }
    const Ye = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function Ir(n) {
            var t = n.state
              , e = n.options
              , s = e.gpuAcceleration
              , i = void 0 === s || s
              , r = e.adaptive
              , o = void 0 === r || r
              , a = e.roundOffsets
              , l = void 0 === a || a
              , h = {
                placement: U(t.placement),
                variation: Pt(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i,
                isFixed: "fixed" === t.options.strategy
            };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Jn(Object.assign({}, h, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: o,
                roundOffsets: l
            })))),
            null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Jn(Object.assign({}, h, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    };
    var ue = {
        passive: !0
    };
    const Fe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function Mr(n) {
            var t = n.state
              , e = n.instance
              , s = n.options
              , i = s.scroll
              , r = void 0 === i || i
              , o = s.resize
              , a = void 0 === o || o
              , l = V(t.elements.popper)
              , h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return r && h.forEach(function(u) {
                u.addEventListener("scroll", e.update, ue)
            }),
            a && l.addEventListener("resize", e.update, ue),
            function() {
                r && h.forEach(function(u) {
                    u.removeEventListener("scroll", e.update, ue)
                }),
                a && l.removeEventListener("resize", e.update, ue)
            }
        },
        data: {}
    };
    var Pr = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function he(n) {
        return n.replace(/left|right|bottom|top/g, function(t) {
            return Pr[t]
        })
    }
    var xr = {
        start: "end",
        end: "start"
    };
    function ts(n) {
        return n.replace(/start|end/g, function(t) {
            return xr[t]
        })
    }
    function Ue(n) {
        var t = V(n);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }
    function ze(n) {
        return Mt(it(n)).left + Ue(n).scrollLeft
    }
    function Ge(n) {
        var t = Q(n);
        return /auto|scroll|overlay|hidden/.test(t.overflow + t.overflowY + t.overflowX)
    }
    function es(n) {
        return ["html", "body", "#document"].indexOf(F(n)) >= 0 ? n.ownerDocument.body : H(n) && Ge(n) ? n : es(le(n))
    }
    function zt(n, t) {
        var e;
        void 0 === t && (t = []);
        var s = es(n)
          , i = s === (null == (e = n.ownerDocument) ? void 0 : e.body)
          , r = V(s)
          , o = i ? [r].concat(r.visualViewport || [], Ge(s) ? s : []) : s
          , a = t.concat(o);
        return i ? a : a.concat(zt(le(o)))
    }
    function qe(n) {
        return Object.assign({}, n, {
            left: n.x,
            top: n.y,
            right: n.x + n.width,
            bottom: n.y + n.height
        })
    }
    function ns(n, t, e) {
        return t === Re ? qe(function Rr(n, t) {
            var e = V(n)
              , s = it(n)
              , i = e.visualViewport
              , r = s.clientWidth
              , o = s.clientHeight
              , a = 0
              , l = 0;
            if (i) {
                r = i.width,
                o = i.height;
                var h = Un();
                (h || !h && "fixed" === t) && (a = i.offsetLeft,
                l = i.offsetTop)
            }
            return {
                width: r,
                height: o,
                x: a + ze(n),
                y: l
            }
        }(n, e)) : ct(t) ? function Vr(n, t) {
            var e = Mt(n, !1, "fixed" === t);
            return e.top = e.top + n.clientTop,
            e.left = e.left + n.clientLeft,
            e.bottom = e.top + n.clientHeight,
            e.right = e.left + n.clientWidth,
            e.width = n.clientWidth,
            e.height = n.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(t, e) : qe(function kr(n) {
            var t, e = it(n), s = Ue(n), i = null == (t = n.ownerDocument) ? void 0 : t.body, r = lt(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = lt(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -s.scrollLeft + ze(n), l = -s.scrollTop;
            return "rtl" === Q(i || e).direction && (a += lt(e.clientWidth, i ? i.clientWidth : 0) - r),
            {
                width: r,
                height: o,
                x: a,
                y: l
            }
        }(it(n)))
    }
    function ss(n) {
        var l, t = n.reference, e = n.element, s = n.placement, i = s ? U(s) : null, r = s ? Pt(s) : null, o = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2;
        switch (i) {
        case $:
            l = {
                x: o,
                y: t.y - e.height
            };
            break;
        case M:
            l = {
                x: o,
                y: t.y + t.height
            };
            break;
        case P:
            l = {
                x: t.x + t.width,
                y: a
            };
            break;
        case L:
            l = {
                x: t.x - e.width,
                y: a
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
        }
        var h = i ? je(i) : null;
        if (null != h) {
            var u = "y" === h ? "height" : "width";
            switch (r) {
            case at:
                l[h] = l[h] - (t[u] / 2 - e[u] / 2);
                break;
            case $t:
                l[h] = l[h] + (t[u] / 2 - e[u] / 2)
            }
        }
        return l
    }
    function xt(n, t) {
        void 0 === t && (t = {});
        var s = t.placement
          , i = void 0 === s ? n.placement : s
          , r = t.strategy
          , o = void 0 === r ? n.strategy : r
          , a = t.boundary
          , l = void 0 === a ? Pn : a
          , h = t.rootBoundary
          , u = void 0 === h ? Re : h
          , d = t.elementContext
          , m = void 0 === d ? Lt : d
          , f = t.altBoundary
          , A = void 0 !== f && f
          , _ = t.padding
          , E = void 0 === _ ? 0 : _
          , T = Xn("number" != typeof E ? E : Qn(E, Dt))
          , O = n.rects.popper
          , g = n.elements[A ? m === Lt ? xn : Lt : m]
          , v = function Wr(n, t, e, s) {
            var i = "clippingParents" === t ? function Hr(n) {
                var t = zt(le(n))
                  , s = ["absolute", "fixed"].indexOf(Q(n).position) >= 0 && H(n) ? Ft(n) : n;
                return ct(s) ? t.filter(function(i) {
                    return ct(i) && zn(i, s) && "body" !== F(i)
                }) : []
            }(n) : [].concat(t)
              , r = [].concat(i, [e])
              , a = r.reduce(function(l, h) {
                var u = ns(n, h, s);
                return l.top = lt(u.top, l.top),
                l.right = ce(u.right, l.right),
                l.bottom = ce(u.bottom, l.bottom),
                l.left = lt(u.left, l.left),
                l
            }, ns(n, r[0], s));
            return a.width = a.right - a.left,
            a.height = a.bottom - a.top,
            a.x = a.left,
            a.y = a.top,
            a
        }(ct(g) ? g : g.contextElement || it(n.elements.popper), l, u, o)
          , b = Mt(n.elements.reference)
          , y = ss({
            reference: b,
            element: O,
            strategy: "absolute",
            placement: i
        })
          , S = qe(Object.assign({}, O, y))
          , N = m === Lt ? S : b
          , C = {
            top: v.top - N.top + T.top,
            bottom: N.bottom - v.bottom + T.bottom,
            left: v.left - N.left + T.left,
            right: N.right - v.right + T.right
        }
          , D = n.modifiersData.offset;
        if (m === Lt && D) {
            var j = D[i];
            Object.keys(C).forEach(function(I) {
                var gt = [P, M].indexOf(I) >= 0 ? 1 : -1
                  , Et = [$, M].indexOf(I) >= 0 ? "y" : "x";
                C[I] += j[Et] * gt
            })
        }
        return C
    }
    const is = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function jr(n) {
            var t = n.state
              , e = n.options
              , s = n.name;
            if (!t.modifiersData[s]._skip) {
                for (var i = e.mainAxis, r = void 0 === i || i, o = e.altAxis, a = void 0 === o || o, l = e.fallbackPlacements, h = e.padding, u = e.boundary, d = e.rootBoundary, m = e.altBoundary, f = e.flipVariations, A = void 0 === f || f, _ = e.allowedAutoPlacements, E = t.options.placement, T = U(E), O = l || (T !== E && A ? function Br(n) {
                    if (U(n) === ae)
                        return [];
                    var t = he(n);
                    return [ts(n), t, ts(t)]
                }(E) : [he(E)]), g = [E].concat(O).reduce(function(Vt, ot) {
                    return Vt.concat(U(ot) === ae ? function Kr(n, t) {
                        void 0 === t && (t = {});
                        var i = t.boundary
                          , r = t.rootBoundary
                          , o = t.padding
                          , a = t.flipVariations
                          , l = t.allowedAutoPlacements
                          , h = void 0 === l ? Ve : l
                          , u = Pt(t.placement)
                          , d = u ? a ? ke : ke.filter(function(A) {
                            return Pt(A) === u
                        }) : Dt
                          , m = d.filter(function(A) {
                            return h.indexOf(A) >= 0
                        });
                        0 === m.length && (m = d);
                        var f = m.reduce(function(A, _) {
                            return A[_] = xt(n, {
                                placement: _,
                                boundary: i,
                                rootBoundary: r,
                                padding: o
                            })[U(_)],
                            A
                        }, {});
                        return Object.keys(f).sort(function(A, _) {
                            return f[A] - f[_]
                        })
                    }(t, {
                        placement: ot,
                        boundary: u,
                        rootBoundary: d,
                        padding: h,
                        flipVariations: A,
                        allowedAutoPlacements: _
                    }) : ot)
                }, []), v = t.rects.reference, b = t.rects.popper, y = new Map, S = !0, N = g[0], C = 0; C < g.length; C++) {
                    var D = g[C]
                      , j = U(D)
                      , I = Pt(D) === at
                      , gt = [$, M].indexOf(j) >= 0
                      , Et = gt ? "width" : "height"
                      , x = xt(t, {
                        placement: D,
                        boundary: u,
                        rootBoundary: d,
                        altBoundary: m,
                        padding: h
                    })
                      , Y = gt ? I ? P : L : I ? M : $;
                    v[Et] > b[Et] && (Y = he(Y));
                    var be = he(Y)
                      , vt = [];
                    if (r && vt.push(x[j] <= 0),
                    a && vt.push(x[Y] <= 0, x[be] <= 0),
                    vt.every(function(Vt) {
                        return Vt
                    })) {
                        N = D,
                        S = !1;
                        break
                    }
                    y.set(D, vt)
                }
                if (S)
                    for (var ln = function(ot) {
                        var Zt = g.find(function(ye) {
                            var bt = y.get(ye);
                            if (bt)
                                return bt.slice(0, ot).every(function(un) {
                                    return un
                                })
                        });
                        if (Zt)
                            return N = Zt,
                            "break"
                    }, Qt = A ? 3 : 1; Qt > 0 && "break" !== ln(Qt); Qt--)
                        ;
                t.placement !== N && (t.modifiersData[s]._skip = !0,
                t.placement = N,
                t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function rs(n, t, e) {
        return void 0 === e && (e = {
            x: 0,
            y: 0
        }),
        {
            top: n.top - t.height - e.y,
            right: n.right - t.width + e.x,
            bottom: n.bottom - t.height + e.y,
            left: n.left - t.width - e.x
        }
    }
    function os(n) {
        return [$, P, M, L].some(function(t) {
            return n[t] >= 0
        })
    }
    const as = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function Yr(n) {
            var t = n.state
              , e = n.name
              , s = t.rects.reference
              , i = t.rects.popper
              , r = t.modifiersData.preventOverflow
              , o = xt(t, {
                elementContext: "reference"
            })
              , a = xt(t, {
                altBoundary: !0
            })
              , l = rs(o, s)
              , h = rs(a, i, r)
              , u = os(l)
              , d = os(h);
            t.modifiersData[e] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: h,
                isReferenceHidden: u,
                hasPopperEscaped: d
            },
            t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": d
            })
        }
    }
      , cs = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function Ur(n) {
            var t = n.state
              , s = n.name
              , i = n.options.offset
              , r = void 0 === i ? [0, 0] : i
              , o = Ve.reduce(function(u, d) {
                return u[d] = function Fr(n, t, e) {
                    var s = U(n)
                      , i = [L, $].indexOf(s) >= 0 ? -1 : 1
                      , r = "function" == typeof e ? e(Object.assign({}, t, {
                        placement: n
                    })) : e
                      , o = r[0]
                      , a = r[1];
                    return o = o || 0,
                    a = (a || 0) * i,
                    [L, P].indexOf(s) >= 0 ? {
                        x: a,
                        y: o
                    } : {
                        x: o,
                        y: a
                    }
                }(d, t.rects, r),
                u
            }, {})
              , a = o[t.placement]
              , h = a.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += a.x,
            t.modifiersData.popperOffsets.y += h),
            t.modifiersData[s] = o
        }
    }
      , Xe = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function zr(n) {
            var t = n.state;
            t.modifiersData[n.name] = ss({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
            })
        },
        data: {}
    }
      , ls = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function qr(n) {
            var t = n.state
              , e = n.options
              , s = n.name
              , i = e.mainAxis
              , r = void 0 === i || i
              , o = e.altAxis
              , a = void 0 !== o && o
              , m = e.tether
              , f = void 0 === m || m
              , A = e.tetherOffset
              , _ = void 0 === A ? 0 : A
              , E = xt(t, {
                boundary: e.boundary,
                rootBoundary: e.rootBoundary,
                padding: e.padding,
                altBoundary: e.altBoundary
            })
              , T = U(t.placement)
              , w = Pt(t.placement)
              , O = !w
              , g = je(T)
              , v = function Gr(n) {
                return "x" === n ? "y" : "x"
            }(g)
              , b = t.modifiersData.popperOffsets
              , y = t.rects.reference
              , S = t.rects.popper
              , N = "function" == typeof _ ? _(Object.assign({}, t.rects, {
                placement: t.placement
            })) : _
              , C = "number" == typeof N ? {
                mainAxis: N,
                altAxis: N
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, N)
              , D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null
              , j = {
                x: 0,
                y: 0
            };
            if (b) {
                if (r) {
                    var I, gt = "y" === g ? $ : L, Et = "y" === g ? M : P, x = "y" === g ? "height" : "width", Y = b[g], be = Y + E[gt], vt = Y - E[Et], Ae = f ? -S[x] / 2 : 0, ln = w === at ? y[x] : S[x], Qt = w === at ? -S[x] : -y[x], Te = t.elements.arrow, Vt = f && Te ? Be(Te) : {
                        width: 0,
                        height: 0
                    }, ot = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, Zt = ot[gt], ye = ot[Et], bt = Ut(0, y[x], Vt[x]), un = O ? y[x] / 2 - Ae - bt - Zt - C.mainAxis : ln - bt - Zt - C.mainAxis, Fc = O ? -y[x] / 2 + Ae + bt + ye + C.mainAxis : Qt + bt + ye + C.mainAxis, hn = t.elements.arrow && Ft(t.elements.arrow), Gs = null != (I = D?.[g]) ? I : 0, Gc = Y + Fc - Gs, qs = Ut(f ? ce(be, Y + un - Gs - (hn ? "y" === g ? hn.clientTop || 0 : hn.clientLeft || 0 : 0)) : be, Y, f ? lt(vt, Gc) : vt);
                    b[g] = qs,
                    j[g] = qs - Y
                }
                if (a) {
                    var Xs, At = b[v], we = "y" === v ? "height" : "width", Qs = At + E["x" === g ? $ : L], Zs = At - E["x" === g ? M : P], fn = -1 !== [$, L].indexOf(T), Js = null != (Xs = D?.[v]) ? Xs : 0, ti = fn ? Qs : At - y[we] - S[we] - Js + C.altAxis, ei = fn ? At + y[we] + S[we] - Js - C.altAxis : Zs, ni = f && fn ? function Cr(n, t, e) {
                        var s = Ut(n, t, e);
                        return s > e ? e : s
                    }(ti, At, ei) : Ut(f ? ti : Qs, At, f ? ei : Zs);
                    b[v] = ni,
                    j[v] = ni - At
                }
                t.modifiersData[s] = j
            }
        },
        requiresIfExists: ["offset"]
    };
    function Jr(n, t, e) {
        void 0 === e && (e = !1);
        var s = H(t)
          , i = H(t) && function Zr(n) {
            var t = n.getBoundingClientRect()
              , e = It(t.width) / n.offsetWidth || 1
              , s = It(t.height) / n.offsetHeight || 1;
            return 1 !== e || 1 !== s
        }(t)
          , r = it(t)
          , o = Mt(n, i, e)
          , a = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , l = {
            x: 0,
            y: 0
        };
        return (s || !s && !e) && (("body" !== F(t) || Ge(r)) && (a = function Qr(n) {
            return n !== V(n) && H(n) ? function Xr(n) {
                return {
                    scrollLeft: n.scrollLeft,
                    scrollTop: n.scrollTop
                }
            }(n) : Ue(n)
        }(t)),
        H(t) ? ((l = Mt(t, !0)).x += t.clientLeft,
        l.y += t.clientTop) : r && (l.x = ze(r))),
        {
            x: o.left + a.scrollLeft - l.x,
            y: o.top + a.scrollTop - l.y,
            width: o.width,
            height: o.height
        }
    }
    function to(n) {
        var t = new Map
          , e = new Set
          , s = [];
        function i(r) {
            e.add(r.name),
            [].concat(r.requires || [], r.requiresIfExists || []).forEach(function(a) {
                if (!e.has(a)) {
                    var l = t.get(a);
                    l && i(l)
                }
            }),
            s.push(r)
        }
        return n.forEach(function(r) {
            t.set(r.name, r)
        }),
        n.forEach(function(r) {
            e.has(r.name) || i(r)
        }),
        s
    }
    function no(n) {
        var t;
        return function() {
            return t || (t = new Promise(function(e) {
                Promise.resolve().then(function() {
                    t = void 0,
                    e(n())
                })
            }
            )),
            t
        }
    }
    var us = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function hs() {
        for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
            t[e] = arguments[e];
        return !t.some(function(s) {
            return !(s && "function" == typeof s.getBoundingClientRect)
        })
    }
    function fe(n) {
        void 0 === n && (n = {});
        var e = n.defaultModifiers
          , s = void 0 === e ? [] : e
          , i = n.defaultOptions
          , r = void 0 === i ? us : i;
        return function(a, l, h) {
            void 0 === h && (h = r);
            var u = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, us, r),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: l
                },
                attributes: {},
                styles: {}
            }
              , d = []
              , m = !1
              , f = {
                state: u,
                setOptions: function(T) {
                    var w = "function" == typeof T ? T(u.options) : T;
                    _(),
                    u.options = Object.assign({}, r, u.options, w),
                    u.scrollParents = {
                        reference: ct(a) ? zt(a) : a.contextElement ? zt(a.contextElement) : [],
                        popper: zt(l)
                    };
                    var O = function eo(n) {
                        var t = to(n);
                        return Fn.reduce(function(e, s) {
                            return e.concat(t.filter(function(i) {
                                return i.phase === s
                            }))
                        }, [])
                    }(function so(n) {
                        var t = n.reduce(function(e, s) {
                            var i = e[s.name];
                            return e[s.name] = i ? Object.assign({}, i, s, {
                                options: Object.assign({}, i.options, s.options),
                                data: Object.assign({}, i.data, s.data)
                            }) : s,
                            e
                        }, {});
                        return Object.keys(t).map(function(e) {
                            return t[e]
                        })
                    }([].concat(s, u.options.modifiers)));
                    return u.orderedModifiers = O.filter(function(g) {
                        return g.enabled
                    }),
                    function A() {
                        u.orderedModifiers.forEach(function(E) {
                            var w = E.options
                              , g = E.effect;
                            if ("function" == typeof g) {
                                var v = g({
                                    state: u,
                                    name: E.name,
                                    instance: f,
                                    options: void 0 === w ? {} : w
                                });
                                d.push(v || function() {}
                                )
                            }
                        })
                    }(),
                    f.update()
                },
                forceUpdate: function() {
                    if (!m) {
                        var T = u.elements
                          , w = T.reference
                          , O = T.popper;
                        if (hs(w, O)) {
                            u.rects = {
                                reference: Jr(w, Ft(O), "fixed" === u.options.strategy),
                                popper: Be(O)
                            },
                            u.reset = !1,
                            u.placement = u.options.placement,
                            u.orderedModifiers.forEach(function(C) {
                                return u.modifiersData[C.name] = Object.assign({}, C.data)
                            });
                            for (var g = 0; g < u.orderedModifiers.length; g++)
                                if (!0 !== u.reset) {
                                    var v = u.orderedModifiers[g]
                                      , b = v.fn
                                      , y = v.options;
                                    "function" == typeof b && (u = b({
                                        state: u,
                                        options: void 0 === y ? {} : y,
                                        name: v.name,
                                        instance: f
                                    }) || u)
                                } else
                                    u.reset = !1,
                                    g = -1
                        }
                    }
                },
                update: no(function() {
                    return new Promise(function(E) {
                        f.forceUpdate(),
                        E(u)
                    }
                    )
                }),
                destroy: function() {
                    _(),
                    m = !0
                }
            };
            if (!hs(a, l))
                return f;
            function _() {
                d.forEach(function(E) {
                    return E()
                }),
                d = []
            }
            return f.setOptions(h).then(function(E) {
                !m && h.onFirstUpdate && h.onFirstUpdate(E)
            }),
            f
        }
    }
    var io = fe()
      , oo = fe({
        defaultModifiers: [Fe, Xe, Ye, We]
    })
      , Qe = fe({
        defaultModifiers: [Fe, Xe, Ye, We, cs, is, ls, Zn, as]
    });
    const fs = Object.freeze(Object.defineProperty({
        __proto__: null,
        popperGenerator: fe,
        detectOverflow: xt,
        createPopperBase: io,
        createPopper: Qe,
        createPopperLite: oo,
        top: $,
        bottom: M,
        right: P,
        left: L,
        auto: ae,
        basePlacements: Dt,
        start: at,
        end: $t,
        clippingParents: Pn,
        viewport: Re,
        popper: Lt,
        reference: xn,
        variationPlacements: ke,
        placements: Ve,
        beforeRead: Rn,
        read: "read",
        afterRead: Vn,
        beforeMain: Hn,
        main: "main",
        afterMain: Kn,
        beforeWrite: Bn,
        write: "write",
        afterWrite: Yn,
        modifierPhases: Fn,
        applyStyles: We,
        arrow: Zn,
        computeStyles: Ye,
        eventListeners: Fe,
        flip: is,
        hide: as,
        offset: cs,
        popperOffsets: Xe,
        preventOverflow: ls
    }, Symbol.toStringTag, {
        value: "Module"
    }))
      , ds = "dropdown"
      , ut = ".bs.dropdown"
      , Ze = ".data-api"
      , lo = "ArrowUp"
      , _s = "ArrowDown"
      , ho = `hide ${ut}`
      , fo = `hidden ${ut}`
      , po = `show ${ut}`
      , _o = `shown ${ut}`
      , ms = `click ${ut}${Ze}`
      , gs = `keydown ${ut}${Ze}`
      , mo = `keyup ${ut}${Ze}`
      , Rt = "show"
      , ht = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , To = `${ht}.show`
      , de = ".dropdown-menu"
      , Co = R() ? "top-end" : "top-start"
      , No = R() ? "top-start" : "top-end"
      , So = R() ? "bottom-end" : "bottom-start"
      , Do = R() ? "bottom-start" : "bottom-end"
      , $o = R() ? "left-start" : "right-start"
      , Lo = R() ? "right-start" : "left-start"
      , Po = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , xo = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class K extends W {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = p.next(this._element, de)[0] || p.prev(this._element, de)[0] || p.findOne(de, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Po
        }
        static get DefaultType() {
            return xo
        }
        static get NAME() {
            return ds
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (et(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!c.trigger(this._element, po, t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const s of [].concat(...document.body.children))
                        c.on(s, "mouseover", ee);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Rt),
                this._element.classList.add(Rt),
                c.trigger(this._element, _o, t)
            }
        }
        hide() {
            !et(this._element) && this._isShown() && this._completeHide({
                relatedTarget: this._element
            })
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!c.trigger(this._element, ho, t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const s of [].concat(...document.body.children))
                        c.off(s, "mouseover", ee);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Rt),
                this._element.classList.remove(Rt),
                this._element.setAttribute("aria-expanded", "false"),
                X.removeDataAttribute(this._menu, "popper"),
                c.trigger(this._element, fo, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !G(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${ds.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (typeof fs > "u")
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : G(this._config.reference) ? t = tt(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Qe(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(Rt)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return $o;
            if (t.classList.contains("dropstart"))
                return Lo;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? No : Co : e ? Do : So
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (X.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const s = p.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(i=>Tt(i));
            !s.length || Ne(s, e, t === _s, !s.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = K.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (typeof e[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = p.find(To);
            for (const s of e) {
                const i = K.getInstance(s);
                if (!i || !1 === i._config.autoClose)
                    continue;
                const r = t.composedPath()
                  , o = r.includes(i._menu);
                if (r.includes(i._element) || "inside" === i._config.autoClose && !o || "outside" === i._config.autoClose && o || i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const a = {
                    relatedTarget: i._element
                };
                "click" === t.type && (a.clickEvent = t),
                i._completeHide(a)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , s = "Escape" === t.key
              , i = [lo, _s].includes(t.key);
            if (!i && !s || e && !s)
                return;
            t.preventDefault();
            const r = this.matches(ht) ? this : p.prev(this, ht)[0] || p.next(this, ht)[0] || p.findOne(ht, t.delegateTarget.parentNode)
              , o = K.getOrCreateInstance(r);
            if (i)
                return t.stopPropagation(),
                o.show(),
                void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(),
            o.hide(),
            r.focus())
        }
    }
    c.on(document, gs, ht, K.dataApiKeydownHandler),
    c.on(document, gs, de, K.dataApiKeydownHandler),
    c.on(document, ms, K.clearMenus),
    c.on(document, mo, K.clearMenus),
    c.on(document, ms, ht, function(n) {
        n.preventDefault(),
        K.getOrCreateInstance(this).toggle()
    }),
    k(K);
    const Es = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , vs = ".sticky-top"
      , pe = "padding-right"
      , bs = "margin-right";
    class Je {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, pe, e=>e + t),
            this._setElementAttributes(Es, pe, e=>e + t),
            this._setElementAttributes(vs, bs, e=>e - t)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, pe),
            this._resetElementAttributes(Es, pe),
            this._resetElementAttributes(vs, bs)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, o=>{
                if (o !== this._element && window.innerWidth > o.clientWidth + i)
                    return;
                this._saveInitialAttribute(o, e);
                const a = window.getComputedStyle(o).getPropertyValue(e);
                o.style.setProperty(e, `${s(Number.parseFloat(a))}px`)
            }
            )
        }
        _saveInitialAttribute(t, e) {
            const s = t.style.getPropertyValue(e);
            s && X.setDataAttribute(t, e, s)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, i=>{
                const r = X.getDataAttribute(i, e);
                null !== r ? (X.removeDataAttribute(i, e),
                i.style.setProperty(e, r)) : i.style.removeProperty(e)
            }
            )
        }
        _applyManipulationCallback(t, e) {
            if (G(t))
                e(t);
            else
                for (const s of p.find(t, this._element))
                    e(s)
        }
    }
    const As = "backdrop"
      , ys = `mousedown.bs.${As}`
      , ko = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , Vo = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class ws extends Wt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return ko
        }
        static get DefaultType() {
            return Vo
        }
        static get NAME() {
            return As
        }
        show(t) {
            if (!this._config.isVisible)
                return void q(t);
            this._append();
            this._getElement().classList.add("show"),
            this._emulateAnimation(()=>{
                q(t)
            }
            )
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation(()=>{
                this.dispose(),
                q(t)
            }
            )) : q(t)
        }
        dispose() {
            !this._isAppended || (c.off(this._element, ys),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = tt(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            c.on(t, ys, ()=>{
                q(this._config.clickCallback)
            }
            ),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            En(t, this._getElement(), this._config.isAnimated)
        }
    }
    const _e = ".bs.focustrap"
      , Wo = `focusin ${_e}`
      , Ko = `keydown.tab ${_e}`
      , Os = "backward"
      , Yo = {
        autofocus: !0,
        trapElement: null
    }
      , Fo = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Cs extends Wt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return Yo
        }
        static get DefaultType() {
            return Fo
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            c.off(document, _e),
            c.on(document, Wo, t=>this._handleFocusin(t)),
            c.on(document, Ko, t=>this._handleKeydown(t)),
            this._isActive = !0)
        }
        deactivate() {
            !this._isActive || (this._isActive = !1,
            c.off(document, _e))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const s = p.focusableChildren(e);
            0 === s.length ? e.focus() : this._lastTabNavDirection === Os ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Os : "forward")
        }
    }
    const B = ".bs.modal"
      , qo = `hide ${B}`
      , Xo = `hidePrevented ${B}`
      , Ns = `hidden ${B}`
      , Ss = `show ${B}`
      , Qo = `shown ${B}`
      , Zo = `resize ${B}`
      , Jo = `click.dismiss ${B}`
      , ta = `mousedown.dismiss ${B}`
      , ea = `keydown.dismiss ${B}`
      , na = `click ${B}.data-api`
      , Ds = "modal-open"
      , tn = "modal-static"
      , ca = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , la = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class ft extends W {
        constructor(t, e) {
            super(t, e),
            this._dialog = p.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Je,
            this._addEventListeners()
        }
        static get Default() {
            return ca
        }
        static get DefaultType() {
            return la
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || c.trigger(this._element, Ss, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(Ds),
            this._adjustDialog(),
            this._backdrop.show(()=>this._showElement(t)))
        }
        hide() {
            !this._isShown || this._isTransitioning || c.trigger(this._element, qo).defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove("show"),
            this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated()))
        }
        dispose() {
            for (const t of [window, this._dialog])
                c.off(t, B);
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new ws({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Cs({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = p.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            this._element.classList.add("show"),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                c.trigger(this._element, Qo, {
                    relatedTarget: t
                })
            }
            , this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            c.on(this._element, ea, t=>{
                if ("Escape" === t.key) {
                    if (this._config.keyboard)
                        return t.preventDefault(),
                        void this.hide();
                    this._triggerBackdropTransition()
                }
            }
            ),
            c.on(window, Zo, ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            ),
            c.on(this._element, ta, t=>{
                c.one(this._element, Jo, e=>{
                    if (this._element === t.target && this._element === e.target) {
                        if ("static" === this._config.backdrop)
                            return void this._triggerBackdropTransition();
                        this._config.backdrop && this.hide()
                    }
                }
                )
            }
            )
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(Ds),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                c.trigger(this._element, Ns)
            }
            )
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (c.trigger(this._element, Xo).defaultPrevented)
                return;
            const e = this._element.scrollHeight > document.documentElement.clientHeight
              , s = this._element.style.overflowY;
            "hidden" === s || this._element.classList.contains(tn) || (e || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(tn),
            this._queueCallback(()=>{
                this._element.classList.remove(tn),
                this._queueCallback(()=>{
                    this._element.style.overflowY = s
                }
                , this._dialog)
            }
            , this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , s = e > 0;
            if (s && !t) {
                const i = R() ? "paddingLeft" : "paddingRight";
                this._element.style[i] = `${e}px`
            }
            if (!s && t) {
                const i = R() ? "paddingRight" : "paddingLeft";
                this._element.style[i] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const s = ft.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (typeof s[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            })
        }
    }
    c.on(document, na, '[data-bs-toggle="modal"]', function(n) {
        const t = z(this);
        ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        c.one(t, Ss, i=>{
            i.defaultPrevented || c.one(t, Ns, ()=>{
                Tt(this) && this.focus()
            }
            )
        }
        );
        const e = p.findOne(".modal.show");
        e && ft.getInstance(e).hide(),
        ft.getOrCreateInstance(t).toggle(this)
    }),
    ne(ft),
    k(ft);
    const Z = ".bs.offcanvas"
      , Ls = ".data-api"
      , ha = `load ${Z}${Ls}`
      , Ms = "showing"
      , xs = ".offcanvas.show"
      , pa = `show ${Z}`
      , _a = `shown ${Z}`
      , ma = `hide ${Z}`
      , Rs = `hidePrevented ${Z}`
      , ks = `hidden ${Z}`
      , ga = `resize ${Z}`
      , Ea = `click ${Z}${Ls}`
      , va = `keydown.dismiss ${Z}`
      , Aa = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Ta = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class J extends W {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return Aa
        }
        static get DefaultType() {
            return Ta
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || c.trigger(this._element, pa, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Je).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Ms),
            this._queueCallback(()=>{
                (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
                this._element.classList.add("show"),
                this._element.classList.remove(Ms),
                c.trigger(this._element, _a, {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && !c.trigger(this._element, ma).defaultPrevented && (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add("hiding"),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.classList.remove("show", "hiding"),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Je).reset(),
                c.trigger(this._element, ks)
            }
            , this._element, !0))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const e = Boolean(this._config.backdrop);
            return new ws({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : c.trigger(this._element, Rs)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Cs({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            c.on(this._element, va, t=>{
                if ("Escape" === t.key) {
                    if (!this._config.keyboard)
                        return void c.trigger(this._element, Rs);
                    this.hide()
                }
            }
            )
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = J.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    c.on(document, Ea, '[data-bs-toggle="offcanvas"]', function(n) {
        const t = z(this);
        if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        et(this))
            return;
        c.one(t, ks, ()=>{
            Tt(this) && this.focus()
        }
        );
        const e = p.findOne(xs);
        e && e !== t && J.getInstance(e).hide(),
        J.getOrCreateInstance(t).toggle(this)
    }),
    c.on(window, ha, ()=>{
        for (const n of p.find(xs))
            J.getOrCreateInstance(n).show()
    }
    ),
    c.on(window, ga, ()=>{
        for (const n of p.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(n).position && J.getOrCreateInstance(n).hide()
    }
    ),
    ne(J),
    k(J);
    const ya = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Oa = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , Ca = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Na = (n,t)=>{
        const e = n.nodeName.toLowerCase();
        return t.includes(e) ? !ya.has(e) || Boolean(Oa.test(n.nodeValue) || Ca.test(n.nodeValue)) : t.filter(s=>s instanceof RegExp).some(s=>s.test(e))
    }
      , Vs = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , $a = {
        allowList: Vs,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , La = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , Ia = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Ma extends Wt {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return $a
        }
        static get DefaultType() {
            return La
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [i,r] of Object.entries(this._config.content))
                this._setContent(t, r, i);
            const e = t.children[0]
              , s = this._resolvePossibleFunction(this._config.extraClass);
            return s && e.classList.add(...s.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,s] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: s
                }, Ia)
        }
        _setContent(t, e, s) {
            const i = p.findOne(s, t);
            if (i) {
                if (!(e = this._resolvePossibleFunction(e)))
                    return void i.remove();
                if (G(e))
                    return void this._putElementInTemplate(tt(e), i);
                if (this._config.html)
                    return void (i.innerHTML = this._maybeSanitize(e));
                i.textContent = e
            }
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function Sa(n, t, e) {
                if (!n.length)
                    return n;
                if (e && "function" == typeof e)
                    return e(n);
                const i = (new window.DOMParser).parseFromString(n, "text/html")
                  , r = [].concat(...i.body.querySelectorAll("*"));
                for (const o of r) {
                    const a = o.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(a)) {
                        o.remove();
                        continue
                    }
                    const l = [].concat(...o.attributes)
                      , h = [].concat(t["*"] || [], t[a] || []);
                    for (const u of l)
                        Na(u, h) || o.removeAttribute(u.nodeName)
                }
                return i.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const xa = new Set(["sanitize", "allowList", "sanitizeFn"])
      , en = "fade"
      , me = "show"
      , Ws = "hide.bs.modal"
      , Gt = "hover"
      , nn = "focus"
      , Xa = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: R() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: R() ? "right" : "left"
    }
      , Qa = {
        allowList: Vs,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , Za = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class dt extends W {
        constructor(t, e) {
            if (typeof fs > "u")
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return Qa
        }
        static get DefaultType() {
            return Za
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            if (this._isEnabled) {
                if (this._activeTrigger.click = !this._activeTrigger.click,
                this._isShown())
                    return void this._leave();
                this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout),
            c.off(this._element.closest(".modal"), Ws, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = c.trigger(this._element, this.constructor.eventName("show"))
              , s = (mn(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !s)
                return;
            this.tip && (this.tip.remove(),
            this.tip = null);
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: r} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i),
            c.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper ? this._popper.update() : this._popper = this._createPopper(i),
            i.classList.add(me),
            "ontouchstart"in document.documentElement)
                for (const a of [].concat(...document.body.children))
                    c.on(a, "mouseover", ee);
            this._queueCallback(()=>{
                c.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            , this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown() || c.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented)
                return;
            const e = this._getTipElement();
            if (e.classList.remove(me),
            "ontouchstart"in document.documentElement)
                for (const i of [].concat(...document.body.children))
                    c.off(i, "mouseover", ee);
            this._activeTrigger.click = !1,
            this._activeTrigger[nn] = !1,
            this._activeTrigger[Gt] = !1,
            this._isHovered = null,
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._isHovered || e.remove(),
                this._element.removeAttribute("aria-describedby"),
                c.trigger(this._element, this.constructor.eventName("hidden")),
                this._disposePopper())
            }
            , this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(en, me),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = (n=>{
                do {
                    n += Math.floor(1e6 * Math.random())
                } while (document.getElementById(n));
                return n
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", s),
            this._isAnimated() && e.classList.add(en),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ma({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(en)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(me)
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement
              , s = Xa[e.toUpperCase()];
            return Qe(this._element, t, this._getPopperConfig(s))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(e=>Number.parseInt(e, 10)) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: s=>{
                        this._getTipElement().setAttribute("data-popper-placement", s.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    c.on(this._element, this.constructor.eventName("click"), this._config.selector, s=>{
                        this._initializeOnDelegatedTarget(s).toggle()
                    }
                    );
                else if ("manual" !== e) {
                    const s = this.constructor.eventName(e === Gt ? "mouseenter" : "focusin")
                      , i = this.constructor.eventName(e === Gt ? "mouseleave" : "focusout");
                    c.on(this._element, s, this._config.selector, r=>{
                        const o = this._initializeOnDelegatedTarget(r);
                        o._activeTrigger["focusin" === r.type ? nn : Gt] = !0,
                        o._enter()
                    }
                    ),
                    c.on(this._element, i, this._config.selector, r=>{
                        const o = this._initializeOnDelegatedTarget(r);
                        o._activeTrigger["focusout" === r.type ? nn : Gt] = o._element.contains(r.relatedTarget),
                        o._leave()
                    }
                    )
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            c.on(this._element.closest(".modal"), Ws, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            !t || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout(()=>{
                this._isHovered && this.show()
            }
            , this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout(()=>{
                this._isHovered || this.hide()
            }
            , this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = X.getDataAttributes(this._element);
            for (const s of Object.keys(e))
                xa.has(s) && delete e[s];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : tt(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = dt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (typeof e[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    k(dt);
    const nc = {
        ...dt.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , sc = {
        ...dt.DefaultType,
        content: "(null|string|element|function)"
    };
    class ge extends dt {
        static get Default() {
            return nc
        }
        static get DefaultType() {
            return sc
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = ge.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (typeof e[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    k(ge);
    const sn = ".bs.scrollspy"
      , oc = `activate ${sn}`
      , Ks = `click ${sn}`
      , ac = `load ${sn}.data-api`
      , kt = "active"
      , rn = "[href]"
      , Bs = ".nav-link"
      , hc = `${Bs}, .nav-item > ${Bs}, .list-group-item`
      , pc = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , _c = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class qt extends W {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return pc
        }
        static get DefaultType() {
            return _c
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = tt(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(e=>Number.parseFloat(e))),
            t
        }
        _maybeEnableSmoothScroll() {
            !this._config.smoothScroll || (c.off(this._config.target, Ks),
            c.on(this._config.target, Ks, rn, t=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const s = this._rootElement || window
                      , i = e.offsetTop - this._element.offsetTop;
                    if (s.scrollTo)
                        return void s.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                    s.scrollTop = i
                }
            }
            ))
        }
        _getNewObserver() {
            return new IntersectionObserver(e=>this._observerCallback(e),{
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            })
        }
        _observerCallback(t) {
            const e = o=>this._targetLinks.get(`#${o.target.id}`)
              , s = o=>{
                this._previousScrollData.visibleEntryTop = o.target.offsetTop,
                this._process(e(o))
            }
              , i = (this._rootElement || document.documentElement).scrollTop
              , r = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(o));
                    continue
                }
                const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (r && a) {
                    if (s(o),
                    !i)
                        return
                } else
                    !r && !a && s(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = p.find(rn, this._config.target);
            for (const e of t) {
                if (!e.hash || et(e))
                    continue;
                const s = p.findOne(e.hash, this._element);
                Tt(s) && (this._targetLinks.set(e.hash, e),
                this._observableSections.set(e.hash, s))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(kt),
            this._activateParents(t),
            c.trigger(this._element, oc, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                p.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(kt);
            else
                for (const e of p.parents(t, ".nav, .list-group"))
                    for (const s of p.prev(e, hc))
                        s.classList.add(kt)
        }
        _clearActiveClass(t) {
            t.classList.remove(kt);
            const e = p.find(`${rn}.${kt}`, t);
            for (const s of e)
                s.classList.remove(kt)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = qt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    c.on(window, ac, ()=>{
        for (const n of p.find('[data-bs-spy="scroll"]'))
            qt.getOrCreateInstance(n)
    }
    ),
    k(qt);
    const pt = ".bs.tab"
      , gc = `hide ${pt}`
      , Ec = `hidden ${pt}`
      , vc = `show ${pt}`
      , bc = `shown ${pt}`
      , Ac = `click ${pt}`
      , Tc = `keydown ${pt}`
      , yc = `load ${pt}`
      , wc = "ArrowLeft"
      , js = "ArrowRight"
      , Oc = "ArrowUp"
      , Ys = "ArrowDown"
      , _t = "active"
      , on = "show"
      , an = ":not(.dropdown-toggle)"
      , Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , cn = `.nav-link ${an}, .list-group-item ${an}, [role="tab"]${an}, ${Us}`
      , Ic = `.${_t}[data-bs-toggle="tab"], .${_t}[data-bs-toggle="pill"], .${_t}[data-bs-toggle="list"]`;
    class mt extends W {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            c.on(this._element, Tc, e=>this._keydown(e)))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , s = e ? c.trigger(e, gc, {
                relatedTarget: t
            }) : null;
            c.trigger(t, vc, {
                relatedTarget: e
            }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(_t),
            this._activate(z(t)),
            this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                c.trigger(t, bc, {
                    relatedTarget: e
                })) : t.classList.add(on)
            }
            , t, t.classList.contains("fade")))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(_t),
            t.blur(),
            this._deactivate(z(t)),
            this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                c.trigger(t, Ec, {
                    relatedTarget: e
                })) : t.classList.remove(on)
            }
            , t, t.classList.contains("fade")))
        }
        _keydown(t) {
            if (![wc, js, Oc, Ys].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = [js, Ys].includes(t.key)
              , s = Ne(this._getChildren().filter(i=>!et(i)), t.target, e, !0);
            s && (s.focus({
                preventScroll: !0
            }),
            mt.getOrCreateInstance(s).show())
        }
        _getChildren() {
            return p.find(cn, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(t=>this._elemIsActive(t)) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const s of e)
                this._setInitialAttributesOnChild(s)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , s = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z(t);
            !e || (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains("dropdown"))
                return;
            const i = (r,o)=>{
                const a = p.findOne(r, s);
                a && a.classList.toggle(o, e)
            }
            ;
            i(".dropdown-toggle", _t),
            i(".dropdown-menu", on),
            s.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, s) {
            t.hasAttribute(e) || t.setAttribute(e, s)
        }
        _elemIsActive(t) {
            return t.classList.contains(_t)
        }
        _getInnerElement(t) {
            return t.matches(cn) ? t : p.findOne(cn, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = mt.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    c.on(document, Ac, Us, function(n) {
        ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
        !et(this) && mt.getOrCreateInstance(this).show()
    }),
    c.on(window, yc, ()=>{
        for (const n of p.find(Ic))
            mt.getOrCreateInstance(n)
    }
    ),
    k(mt);
    const rt = ".bs.toast"
      , Pc = `mouseover ${rt}`
      , xc = `mouseout ${rt}`
      , Rc = `focusin ${rt}`
      , kc = `focusout ${rt}`
      , Vc = `hide ${rt}`
      , Hc = `hidden ${rt}`
      , Wc = `show ${rt}`
      , Kc = `shown ${rt}`
      , Ee = "show"
      , ve = "showing"
      , jc = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Yc = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Xt extends W {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return Yc
        }
        static get DefaultType() {
            return jc
        }
        static get NAME() {
            return "toast"
        }
        show() {
            c.trigger(this._element, Wc).defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            this._element.classList.add(Ee, ve),
            this._queueCallback(()=>{
                this._element.classList.remove(ve),
                c.trigger(this._element, Kc),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this.isShown() && !c.trigger(this._element, Vc).defaultPrevented && (this._element.classList.add(ve),
            this._queueCallback(()=>{
                this._element.classList.add("hide"),
                this._element.classList.remove(ve, Ee),
                c.trigger(this._element, Hc)
            }
            , this._element, this._config.animation))
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Ee),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Ee)
        }
        _maybeScheduleHide() {
            !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            c.on(this._element, Pc, t=>this._onInteraction(t, !0)),
            c.on(this._element, xc, t=>this._onInteraction(t, !1)),
            c.on(this._element, Rc, t=>this._onInteraction(t, !0)),
            c.on(this._element, kc, t=>this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Xt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (typeof e[t] > "u")
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    return ne(Xt),
    k(Xt),
    {
        Alert: Kt,
        Button: Bt,
        Carousel: Ct,
        Collapse: St,
        Dropdown: K,
        Modal: ft,
        Offcanvas: J,
        Popover: ge,
        ScrollSpy: qt,
        Tab: mt,
        Toast: Xt,
        Tooltip: dt
    }
});
