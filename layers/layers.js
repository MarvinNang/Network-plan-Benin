var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_beninnewscores_1 = new ol.format.GeoJSON();
var features_beninnewscores_1 = format_beninnewscores_1.readFeatures(json_beninnewscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beninnewscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beninnewscores_1.addFeatures(features_beninnewscores_1);
var lyr_beninnewscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beninnewscores_1, 
                style: style_beninnewscores_1,
                popuplayertitle: 'benin-new-scores',
                interactive: false,
    title: 'benin-new-scores<br />\
    <img src="styles/legend/beninnewscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/beninnewscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/beninnewscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/beninnewscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/beninnewscores_1_4.png" /> 4 - 5<br />' });
var format_departmentboundaries_2 = new ol.format.GeoJSON();
var features_departmentboundaries_2 = format_departmentboundaries_2.readFeatures(json_departmentboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departmentboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departmentboundaries_2.addFeatures(features_departmentboundaries_2);
var lyr_departmentboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departmentboundaries_2, 
                style: style_departmentboundaries_2,
                popuplayertitle: 'department-boundaries',
                interactive: true,
                title: '<img src="styles/legend/departmentboundaries_2.png" /> department-boundaries'
            });
var format_Activesites_16062026_3 = new ol.format.GeoJSON();
var features_Activesites_16062026_3 = format_Activesites_16062026_3.readFeatures(json_Activesites_16062026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_16062026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_16062026_3.addFeatures(features_Activesites_16062026_3);
var lyr_Activesites_16062026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_16062026_3, 
                style: style_Activesites_16062026_3,
                popuplayertitle: 'Active sites_16.06.2026',
                interactive: true,
                title: '<img src="styles/legend/Activesites_16062026_3.png" /> Active sites_16.06.2026'
            });
var format_Plannedsites_network_plan_16062026_4 = new ol.format.GeoJSON();
var features_Plannedsites_network_plan_16062026_4 = format_Plannedsites_network_plan_16062026_4.readFeatures(json_Plannedsites_network_plan_16062026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plannedsites_network_plan_16062026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plannedsites_network_plan_16062026_4.addFeatures(features_Plannedsites_network_plan_16062026_4);
var lyr_Plannedsites_network_plan_16062026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plannedsites_network_plan_16062026_4, 
                style: style_Plannedsites_network_plan_16062026_4,
                popuplayertitle: 'Planned sites_network_plan_16.06.2026',
                interactive: true,
    title: 'Planned sites_network_plan_16.06.2026<br />\
    <img src="styles/legend/Plannedsites_network_plan_16062026_4_0.png" /> GRID SITE<br />\
    <img src="styles/legend/Plannedsites_network_plan_16062026_4_1.png" /> SOLAR SITE<br />\
    <img src="styles/legend/Plannedsites_network_plan_16062026_4_2.png" /> TRANSITION SITE<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_beninnewscores_1.setVisible(true);lyr_departmentboundaries_2.setVisible(true);lyr_Activesites_16062026_3.setVisible(true);lyr_Plannedsites_network_plan_16062026_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_beninnewscores_1,lyr_departmentboundaries_2,lyr_Activesites_16062026_3,lyr_Plannedsites_network_plan_16062026_4];
lyr_beninnewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_departmentboundaries_2.set('fieldAliases', {'fid': 'fid', 'adm1_name': 'adm1_name', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Activesites_16062026_3.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', });
lyr_Plannedsites_network_plan_16062026_4.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Type': 'Type', 'Sites vis�': 'Sites vis�', 'Espace vis': 'Espace vis', '0bservatio': '0bservatio', 'surface au': 'surface au', 'surface de': 'surface de', 'Lat': 'Lat', 'Long': 'Long', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'layer': 'layer', 'path': 'path', });
lyr_beninnewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_departmentboundaries_2.set('fieldImages', {'fid': 'TextEdit', 'adm1_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Activesites_16062026_3.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Plannedsites_network_plan_16062026_4.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Type': 'TextEdit', 'Sites vis�': 'TextEdit', 'Espace vis': 'TextEdit', '0bservatio': 'TextEdit', 'surface au': 'TextEdit', 'surface de': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_beninnewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_departmentboundaries_2.set('fieldLabels', {'fid': 'no label', 'adm1_name': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Activesites_16062026_3.set('fieldLabels', {'fid': 'no label', 'Sno.': 'no label', 'SS ID': 'no label', 'SS name': 'inline label - always visible', 'District/s': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'inline label - always visible', 'Comments': 'no label', });
lyr_Plannedsites_network_plan_16062026_4.set('fieldLabels', {'fid': 'no label', 'Sno.': 'no label', 'SS ID': 'no label', 'SS name': 'no label', 'District/s': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'no label', 'Comments': 'no label', 'id': 'no label', 'Type': 'inline label - always visible', 'Sites vis�': 'no label', 'Espace vis': 'no label', '0bservatio': 'no label', 'surface au': 'no label', 'surface de': 'no label', 'Lat': 'no label', 'Long': 'no label', 'X': 'no label', 'Y': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Plannedsites_network_plan_16062026_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});