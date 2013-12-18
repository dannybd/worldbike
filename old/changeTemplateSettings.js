$(function () {

    // Set underscore template to work with .net variables
    _.templateSettings = {
        evaluate: /{%([\s\S]+?)%}/g,
        interpolate: /{%=([\s\S]+?)%}/g,
        escape: /{%-([\s\S]+?)%}/g
    };

});
        