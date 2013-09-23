window.WineView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('wine-details'));

        this.model.bind('change', this.render, this);
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()));

        return this.el;
    },

    events: {

        'click .save': 'saveWimne',
        'click .delete': 'deleteWine'

    },

    saveWine: function() {
        this.model.set({
            name: $('#name').val(),
            grapes: $('#grapes').val(),
            country: $('#country').val(),
            region: $('#region').val(),
            year: $('#year').val(),
            description: $('#description').val()
        });

        if(this.model.isNew()) {
            var self = this;

            app.wineList.create(this.model, {

                'success' : function() {
                    app.navigate( 'wines/' + self.model.id, false);
                }

            });
        } else {
            this.model.save();
        }
    },

    deleteWine: function() {
      this.model.destroy({
            success: function() {
                alert('Wine was deleted successfully');
                window.history.back();
            }
        });

        return false;
    }

});
