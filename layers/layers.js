ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([676178.030588, 9177122.036088, 703987.289784, 9189580.381221]);
var wms_layers = [];

var format_Lapisan_0 = new ol.format.GeoJSON();
var features_Lapisan_0 = format_Lapisan_0.readFeatures(json_Lapisan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapisan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan_0.addFeatures(features_Lapisan_0);
var lyr_Lapisan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lapisan_0, 
                style: style_Lapisan_0,
                interactive: true,
                title: 'Lapisan'
            });
var format_Lapisan_1 = new ol.format.GeoJSON();
var features_Lapisan_1 = format_Lapisan_1.readFeatures(json_Lapisan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapisan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan_1.addFeatures(features_Lapisan_1);
var lyr_Lapisan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lapisan_1, 
                style: style_Lapisan_1,
                interactive: true,
                title: 'Lapisan'
            });
var format_Lapisan_2 = new ol.format.GeoJSON();
var features_Lapisan_2 = format_Lapisan_2.readFeatures(json_Lapisan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapisan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan_2.addFeatures(features_Lapisan_2);
var lyr_Lapisan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lapisan_2, 
                style: style_Lapisan_2,
                interactive: true,
                title: 'Lapisan'
            });
var format_Lapisan_3 = new ol.format.GeoJSON();
var features_Lapisan_3 = format_Lapisan_3.readFeatures(json_Lapisan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Lapisan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapisan_3.addFeatures(features_Lapisan_3);
var lyr_Lapisan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lapisan_3, 
                style: style_Lapisan_3,
                interactive: true,
                title: 'Lapisan'
            });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });

        var lyr_GoogleSatellite_5 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pemukiman_6 = new ol.format.GeoJSON();
var features_Pemukiman_6 = format_Pemukiman_6.readFeatures(json_Pemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Pemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_6.addFeatures(features_Pemukiman_6);
var lyr_Pemukiman_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_6, 
                style: style_Pemukiman_6,
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_6.png" /> Pemukiman'
            });
var format_sawah23_7 = new ol.format.GeoJSON();
var features_sawah23_7 = format_sawah23_7.readFeatures(json_sawah23_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_sawah23_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah23_7.addFeatures(features_sawah23_7);
var lyr_sawah23_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sawah23_7, 
                style: style_sawah23_7,
                interactive: true,
                title: '<img src="styles/legend/sawah23_7.png" /> sawah 23'
            });
var format_PABRIK_8 = new ol.format.GeoJSON();
var features_PABRIK_8 = format_PABRIK_8.readFeatures(json_PABRIK_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PABRIK_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PABRIK_8.addFeatures(features_PABRIK_8);
var lyr_PABRIK_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PABRIK_8, 
                style: style_PABRIK_8,
                interactive: true,
                title: '<img src="styles/legend/PABRIK_8.png" /> PABRIK'
            });
var format_polygon_9 = new ol.format.GeoJSON();
var features_polygon_9 = format_polygon_9.readFeatures(json_polygon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_polygon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon_9.addFeatures(features_polygon_9);
var lyr_polygon_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polygon_9, 
                style: style_polygon_9,
                interactive: true,
    title: 'polygon<br />\
    <img src="styles/legend/polygon_9_0.png" /> 1<br />\
    <img src="styles/legend/polygon_9_1.png" /> 2<br />\
    <img src="styles/legend/polygon_9_2.png" /> <br />'
        });
var group_hoohiyoh = new ol.layer.Group({
                                layers: [lyr_Lapisan_3,lyr_Clipped_4,],
                                title: "hooh iyoh"});
var group_LapisanTitikSukodono = new ol.layer.Group({
                                layers: [lyr_Lapisan_2,],
                                title: "Lapisan Titik Sukodono"});
var group_LapisanTitikWaru = new ol.layer.Group({
                                layers: [lyr_Lapisan_1,],
                                title: "Lapisan Titik Waru"});
var group_TitikLetakTaman = new ol.layer.Group({
                                layers: [lyr_Lapisan_0,],
                                title: "Titik Letak Taman"});

lyr_Lapisan_0.setVisible(true);lyr_Lapisan_1.setVisible(true);lyr_Lapisan_2.setVisible(true);lyr_Lapisan_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_GoogleSatellite_5.setVisible(true);lyr_Pemukiman_6.setVisible(true);lyr_sawah23_7.setVisible(true);lyr_PABRIK_8.setVisible(true);lyr_polygon_9.setVisible(true);
var layersList = [group_TitikLetakTaman,group_LapisanTitikWaru,group_LapisanTitikSukodono,group_hoohiyoh,lyr_GoogleSatellite_5,lyr_Pemukiman_6,lyr_sawah23_7,lyr_PABRIK_8,lyr_polygon_9];
lyr_Lapisan_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lapisan_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lapisan_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lapisan_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Clipped_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pemukiman_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_sawah23_7.set('fieldAliases', {'id': 'id', });
lyr_PABRIK_8.set('fieldAliases', {'id': 'id', });
lyr_polygon_9.set('fieldAliases', {'id': 'id', 'Polygonn': 'Polygonn', });
lyr_Lapisan_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lapisan_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lapisan_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Lapisan_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Clipped_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Pemukiman_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_sawah23_7.set('fieldImages', {'id': 'TextEdit', });
lyr_PABRIK_8.set('fieldImages', {'id': 'TextEdit', });
lyr_polygon_9.set('fieldImages', {'id': 'TextEdit', 'Polygonn': 'TextEdit', });
lyr_Lapisan_0.set('fieldLabels', {});
lyr_Lapisan_1.set('fieldLabels', {});
lyr_Lapisan_2.set('fieldLabels', {});
lyr_Lapisan_3.set('fieldLabels', {});
lyr_Clipped_4.set('fieldLabels', {});
lyr_Pemukiman_6.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_sawah23_7.set('fieldLabels', {'id': 'no label', });
lyr_PABRIK_8.set('fieldLabels', {'id': 'no label', });
lyr_polygon_9.set('fieldLabels', {'id': 'no label', 'Polygonn': 'no label', });
lyr_polygon_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});