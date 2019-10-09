{
    "byToday": {
    "map": "function(doc) {\n    var d = new Date(); \n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today) {\n         emit(doc.idComanda, doc);\n    };\n}"
},
    "byStareInLucru": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.stareComanda === \"in lucru\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byStareProgramata": {
    "map": "function(doc) {\n\n    if (doc.stareComanda === \"programata\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byStareGata": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.stareComanda === \"gata de livrare\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byStareRidicata": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.stareComanda === \"ridicata\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byStareLivrata": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.stareComanda === \"livrata\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byFaraLivrator": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.livrator === \"fara livrator\") {\n        emit(doc.idComanda,{\n        idComanda: doc.idComanda,\n        numeClient: doc.numeClient,\n        adresaLivrare: doc.adresaLivrare,\n        numar: doc.numar,\n        livrator: doc.livrator,\n        oraComanda: doc.oraComanda,\n        oraLimita: doc.oraLimita,\n        stareComanda: doc.stareComanda,\n        decontat: doc.decontat,\n        oraLivrare: doc.oraLivrare,\n        plataCash: doc.plataCash,\n        valoareComanda: doc.valoareComanda,\n        tarifare: doc.tarifare,\n        strada: doc.strada,\n        nr: doc.nr,\n        sc: doc.sc,\n        et: doc.et,\n        ap: doc.ap\n    })\n    };\n}"
},
    "byNedecontate": {
    "map": "function(doc) {\n\n    if (doc.decontat === \"false\") {\n        emit(doc.idComanda, doc)\n    };\n}"
},
    "byIdComanda": {
    "map": "function(doc) {\n         emit(doc.idComanda, doc);\n}"
},
    "byStareInLivrare": {
    "map": "function(doc) {\n    var d = new Date();\n    var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;\n    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();\n    var today = d.getFullYear() + '-' + month + '-' + day;\n    if (doc.dataComanda === today & doc.stareComanda === \"in livrare\") {\n        emit(doc.idComanda, doc)\n    };\n}"
}
}