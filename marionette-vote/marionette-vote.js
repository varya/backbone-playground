/* Model */
var AngryCat = Backbone.Model.extend({
    defaults: {
        votes: 0
    },

    addVote: function(){
        this.set('votes', this.get('votes') + 1);
    },

    rankUp: function() {
        this.set({rank: this.get('rank') - 1});
    },

    rankDown: function() {
        this.set({rank: this.get('rank') + 1});
    }
});

var AngryCats = Backbone.Collection.extend({
  model: AngryCat
});

/* View */
var AngryCatView = Backbone.Marionette.ItemView.extend({
    template: "#angry_cat-template",
    tagName: 'tr',
    className: 'angry_cat'
});

var AngryCatsView = Backbone.Marionette.CompositeView.extend({
    tagName: "table",
    id: "angry_cats",
    className: "table-striped table-bordered",
    template: "#angry_cats-template",
    itemView: AngryCatView,

    initialize: function() {
        this.listenTo(this.collection, "sort", this.renderCollection);
    },

    appendHtml: function(collectionView, itemView){
        collectionView.$("tbody").append(itemView.el);
    }
});

/* Application */
var MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

MyApp.addInitializer(function(options){
    var angryCatsView = new AngryCatsView({
        collection: options.cats
    });
    MyApp.mainRegion.show(angryCatsView);
});

/* Running the App */
$(document).ready(function(){

    var cats = new AngryCats([
        { name: 'Wet Cat' },
        { name: 'Bitey Cat' },
        { name: 'Surprised Cat' }
    ]);

    MyApp.start({cats: cats});
});

