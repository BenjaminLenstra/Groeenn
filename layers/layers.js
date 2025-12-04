var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Groenbeheer_1 = new ol.format.GeoJSON();
var features_Groenbeheer_1 = format_Groenbeheer_1.readFeatures(json_Groenbeheer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Groenbeheer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Groenbeheer_1.addFeatures(features_Groenbeheer_1);
var lyr_Groenbeheer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Groenbeheer_1, 
                style: style_Groenbeheer_1,
                popuplayertitle: 'Groenbeheer',
                interactive: true,
    title: 'Groenbeheer<br />\
    <img src="styles/legend/Groenbeheer_1_0.png" /> Bodembedekkers<br />\
    <img src="styles/legend/Groenbeheer_1_1.png" /> Bosplantsoen<br />\
    <img src="styles/legend/Groenbeheer_1_2.png" /> Gras- en kruidachtigen<br />\
    <img src="styles/legend/Groenbeheer_1_3.png" /> Haag<br />\
    <img src="styles/legend/Groenbeheer_1_4.png" /> Heesters<br />' });
var format_Bomen_2 = new ol.format.GeoJSON();
var features_Bomen_2 = format_Bomen_2.readFeatures(json_Bomen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bomen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bomen_2.addFeatures(features_Bomen_2);
var lyr_Bomen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bomen_2, 
                style: style_Bomen_2,
                popuplayertitle: 'Bomen',
                interactive: true,
                title: '<img src="styles/legend/Bomen_2.png" /> Bomen'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_Groenbeheer_1.setVisible(true);lyr_Bomen_2.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_Groenbeheer_1,lyr_Bomen_2];
lyr_Groenbeheer_1.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'onderverdeling': 'onderverdeling', 'imgeo_id': 'imgeo_id', 'woonplaats': 'woonplaats', 'ligging': 'ligging', 'wijk': 'wijk', 'buurt': 'buurt', 'openbareruimte': 'openbareruimte', 'objecttype': 'objecttype', 'type': 'type', 'type_detail': 'type_detail', 'type_extra_detail': 'type_extra_detail', 'gebruiksfunctie': 'gebruiksfunctie', 'jaarvanaanleg': 'jaarvanaanleg', 'ecologischbeheer': 'ecologischbeheer', 'bollen': 'bollen', 'oppervlakte': 'oppervlakte', 'omtrek': 'omtrek', });
lyr_Bomen_2.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'straat': 'straat', 'boomtype': 'boomtype', 'latboomsoort': 'latboomsoort', 'nedboomsoort': 'nedboomsoort', 'plantjaar': 'plantjaar', 'boomhoogte': 'boomhoogte', 'boomhoogte2': 'boomhoogte2', 'x': 'x', 'y': 'y', 'Kwaliteit': 'Kwaliteit', 'Maatregel2': 'Maatregel2', 'KL_AANWEZIGHEID_OPSLAG_EN_SCHEUTEN-insp': 'KL_AANWEZIGHEID_OPSLAG_EN_SCHEUTEN-insp', 'KL_BESCHADIGING_BEPLANTING-insp': 'KL_BESCHADIGING_BEPLANTING-insp', 'KL_KAAL_OPPERVLAKTE_BEPLANTING-insp': 'KL_KAAL_OPPERVLAKTE_BEPLANTING-insp', 'KL_AANWEZIGHEID_WOEKERONKRUIDEN-insp': 'KL_AANWEZIGHEID_WOEKERONKRUIDEN-insp', });
lyr_Groenbeheer_1.set('fieldImages', {'FID': 'TextEdit', 'id': 'Range', 'onderverdeling': 'TextEdit', 'imgeo_id': 'TextEdit', 'woonplaats': 'TextEdit', 'ligging': 'TextEdit', 'wijk': 'TextEdit', 'buurt': 'TextEdit', 'openbareruimte': 'TextEdit', 'objecttype': 'TextEdit', 'type': 'TextEdit', 'type_detail': 'TextEdit', 'type_extra_detail': 'TextEdit', 'gebruiksfunctie': 'TextEdit', 'jaarvanaanleg': 'Range', 'ecologischbeheer': 'TextEdit', 'bollen': 'TextEdit', 'oppervlakte': 'TextEdit', 'omtrek': 'TextEdit', });
lyr_Bomen_2.set('fieldImages', {'FID': 'TextEdit', 'id': 'TextEdit', 'straat': 'TextEdit', 'boomtype': 'TextEdit', 'latboomsoort': 'TextEdit', 'nedboomsoort': 'TextEdit', 'plantjaar': 'TextEdit', 'boomhoogte': 'TextEdit', 'boomhoogte2': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Kwaliteit': 'TextEdit', 'Maatregel2': 'TextEdit', 'KL_AANWEZIGHEID_OPSLAG_EN_SCHEUTEN-insp': 'TextEdit', 'KL_BESCHADIGING_BEPLANTING-insp': 'TextEdit', 'KL_KAAL_OPPERVLAKTE_BEPLANTING-insp': 'TextEdit', 'KL_AANWEZIGHEID_WOEKERONKRUIDEN-insp': 'TextEdit', });
lyr_Groenbeheer_1.set('fieldLabels', {'FID': 'hidden field', 'id': 'hidden field', 'onderverdeling': 'hidden field', 'imgeo_id': 'hidden field', 'woonplaats': 'hidden field', 'ligging': 'hidden field', 'wijk': 'hidden field', 'buurt': 'hidden field', 'openbareruimte': 'hidden field', 'objecttype': 'hidden field', 'type': 'inline label - visible with data', 'type_detail': 'hidden field', 'type_extra_detail': 'hidden field', 'gebruiksfunctie': 'hidden field', 'jaarvanaanleg': 'hidden field', 'ecologischbeheer': 'hidden field', 'bollen': 'hidden field', 'oppervlakte': 'hidden field', 'omtrek': 'hidden field', });
lyr_Bomen_2.set('fieldLabels', {'FID': 'hidden field', 'id': 'inline label - visible with data', 'straat': 'hidden field', 'boomtype': 'inline label - visible with data', 'latboomsoort': 'inline label - visible with data', 'nedboomsoort': 'inline label - visible with data', 'plantjaar': 'inline label - visible with data', 'boomhoogte': 'inline label - visible with data', 'boomhoogte2': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'Kwaliteit': 'hidden field', 'Maatregel2': 'hidden field', 'KL_AANWEZIGHEID_OPSLAG_EN_SCHEUTEN-insp': 'hidden field', 'KL_BESCHADIGING_BEPLANTING-insp': 'hidden field', 'KL_KAAL_OPPERVLAKTE_BEPLANTING-insp': 'hidden field', 'KL_AANWEZIGHEID_WOEKERONKRUIDEN-insp': 'hidden field', });
lyr_Bomen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});