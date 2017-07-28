var sourceDirectory = 'UI/';
var sharedSourceDirectory = sourceDirectory + 'sass/shared/';

module.exports = {
    css: {
        sourceDir: sourceDirectory,
        sources: sourceDirectory + 'sass/master.sass',
        distributive: sourceDirectory + 'css/',
        sharedSources: sharedSourceDirectory,
        printSources: sourceDirectory + 'sass/master-pdf.sass'
    }
};