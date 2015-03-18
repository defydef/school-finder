var app;
app = app || {};

(function () {

  // CartoDB configuration
  app.db = {
    points: 'dec_schools', //table
    polygons: 'catchments', //table
    user: 'cesensw'
  };

  // Map configuration variables
  app.geo = {
    tiles: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    //dark: https://dnv9my2eseobd.cloudfront.net/v3/cartodb.map-4xtxp73f/{z}/{x}/{y}.png'
    attribution: 'Mapbox <a href="https://mapbox.com/about/maps" target="_blank">Terms &amp; Feedback</a>',
    // CartoCSS for various map layers
    backgroundCSS: '{polygon-fill: #F0F0F0; polygon-opacity: 0; line-color: #7E599D; line-width: 0.3; line-opacity: 1; line-dasharray: 10,4;}',
    catchmentCSS: '{polygon-fill: #d72d6c; polygon-opacity: 0.15; line-color: #3e3e3e; line-width: 1; line-opacity: 1;}',
  };

  app.config = {
    maxRuralTravel: "105000" // maximum meters someone would travel to a rural school; used to find schools w/o catchments
  };
  app.showHomeHelpPopup = true;

}());
