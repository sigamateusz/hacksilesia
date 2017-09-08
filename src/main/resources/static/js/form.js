// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// $(document).ready(function () {

var autocomplete_start;
var autocomplete_end;
function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete_start = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('start')),
        {types: ['geocode']});
    autocomplete_end = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('end')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete_start.setComponentRestrictions(
        {'country': ['pl']}
    );
    autocomplete_end.setComponentRestrictions(
        {'country': ['pl']}
    );
    autocomplete_start.addListener('place_changed');
    autocomplete_end.addListener('place_changed');
}