'use strict';
(function(d) {
    "object" == typeof exports && "object" == typeof module ? d(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], d) : d(CodeMirror)
})(function(d) {
    function g(a) {
        for (var b = 0; b < a.state.activeLines.length; b++) a.removeLineClass(a.state.activeLines[b], "wrap", "CodeMirror-activeline"), a.removeLineClass(a.state.activeLines[b], "background", "CodeMirror-activeline-background"), a.removeLineClass(a.state.activeLines[b], "gutter", "CodeMirror-activeline-gutter")
    }

    function k(a, b) {
        if (a.length != b.length) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] != b[c]) return !1;
        return !0
    }

    function f(a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = a.getOption("styleActiveLine");
            if ("object" == typeof f && f.nonEmpty ? e.anchor.line == e.head.line : e.empty()) e = a.getLineHandleVisualStart(e.head.line), c[c.length - 1] != e && c.push(e)
        }
        k(a.state.activeLines, c) || a.operation(function() {
            g(a);
            for (var b = 0; b < c.length; b++) a.addLineClass(c[b], "wrap", "CodeMirror-activeline"), a.addLineClass(c[b], "background",
                "CodeMirror-activeline-background"), a.addLineClass(c[b], "gutter", "CodeMirror-activeline-gutter");
            a.state.activeLines = c
        })
    }

    function h(a, b) {
        f(a, b.ranges)
    }
    d.defineOption("styleActiveLine", !1, function(a, b, c) {
        c = c == d.Init ? !1 : c;
        b != c && (c && (a.off("beforeSelectionChange", h), g(a), delete a.state.activeLines), b && (a.state.activeLines = [], f(a, a.listSelections()), a.on("beforeSelectionChange", h)))
    })
});