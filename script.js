require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-86.784, 36.165],
          zoom: 14
        });

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
   /*
        var featureLayer = new FeatureLayer({
           portalItem: {
            id: "bbdd49e10a2847a8b8018a7035bc92c7"    
          }
        });
        map.add(featureLayer);
   
   */
   var featureLayer1 = new FeatureLayer({
     url:"https://tiles.arcgis.com/tiles/HdTo6HJqh92wn4D8/arcgis/rest/services/Evening_Areawide_Predictions_Heat_Index/MapServer"
   })
        map.add(featureLayer1);
   var featureLayer2 = new FeatureLayer({
     url:"https://services2.arcgis.com/HdTo6HJqh92wn4D8/arcgis/rest/services/School_Board_Districts_(Current)/FeatureServer"
   })
        map.add(featureLayer2);
 });
