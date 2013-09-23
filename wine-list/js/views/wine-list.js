window.WineList = Backbone.View.extend({

    tagname: 'ul',

    initialize: function() {
        var self = this;

        this.model.bind('reset', this.render, this);

        this.model.bind('add', function(){
             self.$el.append(new WineListItemView({model:wine}).render());
        });
    },

    render: function() {

        _.each(this.model.models, function(wine) {
             this.$el.append(new WineListItemView({model:wine}).render());
        }, this);

        return this.el;

    }

})

window.WineListItemView = Backbone.View.extend({

    tagName: 'li',

    initialize: function() {
        this.template = _.template( $('#wine-list-item-template').html() );

        this.model.bind('change', this.render, this);
        this.model.bind('destroy', this.close, this);
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON()));

        return this.el;
    }

});
