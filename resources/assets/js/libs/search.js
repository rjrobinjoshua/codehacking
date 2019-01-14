var client = algoliasearch(algoliaAppId, algoliaSearchKey);
var posts = client.initIndex('posts');

if (typeof posts !== 'undefined') {

    autocomplete('#aa-search-input', {}, [
        {
            source: autocomplete.sources.hits(posts, {hitsPerPage: 5}),
            displayKey: 'title',
            templates: {
                header: '<div class="aa-suggestions-category"><b>Title</b></div>',
                footer: '<div class="branding">Powered by <img height="30" src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" /></div>',
                suggestion: function (suggestion) {
                    return '<span>' + '<a href="' + postUri + '/' + suggestion.slug + '">' +
                        suggestion._highlightResult.title.value + '</a>' + '</span><span>';

                }
            }
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset, context) {
        // Do nothing on click, as the browser will already do it
        if (context.selectionMethod === 'click') {
            return;
        }
        // Change the page, for example, on other events
        window.location.assign(postUri + '/' + suggestion.slug);
    });
}