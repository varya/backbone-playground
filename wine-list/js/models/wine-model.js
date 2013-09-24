window.Wine = Backbone.Model.extend({

    defaults: {
        "id": null,
        "name": "",
        "grapes": "",
        "country": "USA",
        "region": "Wisconsin",
        "year": "",
        "description": "",
        "picture": ""
    },

    urlROOT: "wines/"

});

window.WineCollection = Backbone.Collection.extend({

    model: Wine,

    url: "wines/"

});
