Backbone.View.prototype.close = function(){

    console.log('Closing a view ' + this);

    this.beforeClose && this.beforeClose();

    this.remove();
    this.unbind();

}


tpl.loadTemplates(['header', 'wine-details', 'wine-list-item', 'start'], function () {
    // Run App
});
