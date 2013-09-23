Backbone.View.prototype.close = function(){

    console.log('Closing a view ' + this);

    this.beforeClose && this.beforeClose();

    this.remove();
    this.unbind();

}
