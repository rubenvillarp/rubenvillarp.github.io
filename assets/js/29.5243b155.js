(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{310:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"engadir-un-evento-a-un-componente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#engadir-un-evento-a-un-componente"}},[a._v("#")]),a._v(" Engadir un evento a un compoñente")]),a._v(" "),t("p",[a._v("Neste apartado vaise exemplificar como engadir un novo evento ao compoñente\npersonalizado creado.")]),a._v(" "),t("p",[a._v("Hai que recordar que o compoñente, como extende de JPanel, xa herda todos os seus\neventos.")]),a._v(" "),t("p",[a._v("O evento que se quere personalizar é aquel que se produce ao arrastrar o rato polo panel. É dicir, capturarase o evento que se produza cando se pulsa co rato sobre un punto do panel e, co botón presionado, se despraza o rato e se solta o botón noutro punto do panel. Vaise mostrar como facer a implementación para que o panel personalizado responda ao evento de deslizar o rato sobre o mesmo.")]),a._v(" "),t("p",[a._v("Cando se reutilice este compoñente noutra aplicación, a persoa programadora decidirá o\ncódigo a executar cando se produza o evento.")]),a._v(" "),t("p",[a._v("Para iso crearase a seguinte interface. A persoa programadora personalizará a\nimplementación do método "),t("strong",[a._v("arrastreListener.arrastre()")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrastreListener")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrastre")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Para")]),a._v(" programar a lóxica de xestión "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" evento"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" engadirase un "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Listener")]),a._v(" ao compoñente e\nmanexaranse os eventos pulsar e soltar botón "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("rato"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v(" Comprobarase")]),a._v(" se houbo un\ndesprazamento "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" rato dende que se pulsou ata que se soltou o botó"),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v(" Se")]),a._v(" é así"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" execútase\no método arrastreListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrastre")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Este")]),a._v(" é o método que a persoa programadora\npersonalizará"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JPanelImaxe")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JPanel")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Serializable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ImaxeFondo")]),a._v(" imaxeFondo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" ratonPresionado "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Point")]),a._v(" puntoPresion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrastreListener")]),a._v(" arrastreListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JPanelImaxe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addMouseListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MouseAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mouseReleased")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MouseEvent")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ratonPresionado"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Point")]),a._v(" posicionActual "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("abs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("puntoPresion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" posicionActual"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arrastreListener "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                        arrastreListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrastre")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                ratonPresionado "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mousePressed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MouseEvent")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                ratonPresionado "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n                puntoPresion "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getPoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addArrastreListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrastreListener")]),a._v(" arrastreListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("arrastreListener "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" arrastreListener"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeArrastreListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("arrastreListener "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Falta o código dos getters e setters de imaxeFondo e paintComponent")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("A persoa programadora debe proporcionar unha implementación da interface ArrastreListener e decidir o código a executar cando se procuza o evento.")]),a._v(" "),t("p",[a._v("Por exemplo, na aplicación de proba, despois de inicializar os compoñentes gráficos:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PantallaPrincipal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("initComponents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    jPanelImaxe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addArrastreListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrastreListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("arrastre")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arrastre"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);