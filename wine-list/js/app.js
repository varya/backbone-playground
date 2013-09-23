window.Wines = Backbone.Model.extend({

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
