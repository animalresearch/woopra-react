import { Component } from 'react';

export default class WoopraTracker extends Component {
    componentDidMount() {
        (function () {
            var t, i, e, n = window,
                o = document,
                a = arguments,
                s = "script",
                r = ["config", "track", "identify", "visit", "push", "call", "trackForm", "trackClick"],
                c = function () {
                    var t, i = this;
                    // eslint-disable-next-line no-sequences
                    for (i._e = [], t = 0; r.length > t; t++)(function (t) { i[t] = function () { return i._e.push([t].concat(Array.prototype.slice.call(arguments, 0))), i } })(r[t])
                // eslint-disable-next-line new-parens
                }; for (n._w = n._w || {}, t = 0; a.length > t; t++)n._w[a[t]] = n[a[t]] = n[a[t]] || new c;
                i = o.createElement(s);
                i.async = 1;
                i.src = "//static.woopra.com/js/w.js";
                e = o.getElementsByTagName(s)[0];
                e.parentNode.insertBefore(i, e);
        })("woopra");

        const woopra = window.woopra;

        woopra.config(this.props.config);

        woopra.track();
    }

    render () {
        return [];
    }
}