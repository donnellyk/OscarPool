Template.header.rendered = function(){
    if (!this.rendered) {
        $("#save-glyph").hide();
        this.rendered = true;
    }
};