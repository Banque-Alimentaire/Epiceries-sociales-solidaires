var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Partdesjeunes1529ansEPCIen_1 = new ol.format.GeoJSON();
var features_Partdesjeunes1529ansEPCIen_1 = format_Partdesjeunes1529ansEPCIen_1.readFeatures(json_Partdesjeunes1529ansEPCIen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partdesjeunes1529ansEPCIen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partdesjeunes1529ansEPCIen_1.addFeatures(features_Partdesjeunes1529ansEPCIen_1);
var lyr_Partdesjeunes1529ansEPCIen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partdesjeunes1529ansEPCIen_1, 
                style: style_Partdesjeunes1529ansEPCIen_1,
                interactive: true,
    title: ' Part des jeunes 15-29 ans / EPCI (en %)<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_1_0.png" /> 8,9 - 12,2<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_1_1.png" /> 12,2 - 13,5<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_1_2.png" /> 13,5 - 14,6<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_1_3.png" /> 14,6 - 15,9<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_1_4.png" /> 15,9 - 36,2<br />'
        });
var format_Jeunes25etdelapopulationtotale_2 = new ol.format.GeoJSON();
var features_Jeunes25etdelapopulationtotale_2 = format_Jeunes25etdelapopulationtotale_2.readFeatures(json_Jeunes25etdelapopulationtotale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jeunes25etdelapopulationtotale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jeunes25etdelapopulationtotale_2.addFeatures(features_Jeunes25etdelapopulationtotale_2);
var lyr_Jeunes25etdelapopulationtotale_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jeunes25etdelapopulationtotale_2, 
                style: style_Jeunes25etdelapopulationtotale_2,
                interactive: true,
                title: '<img src="styles/legend/Jeunes25etdelapopulationtotale_2.png" /> Jeunes  = 25% et + de la population totale'
            });
var format_ESANDES_3 = new ol.format.GeoJSON();
var features_ESANDES_3 = format_ESANDES_3.readFeatures(json_ESANDES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESANDES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESANDES_3.addFeatures(features_ESANDES_3);
var lyr_ESANDES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESANDES_3, 
                style: style_ESANDES_3,
                interactive: true,
                title: '<img src="styles/legend/ESANDES_3.png" /> ES ANDES'
            });
var format_ESUGESS_4 = new ol.format.GeoJSON();
var features_ESUGESS_4 = format_ESUGESS_4.readFeatures(json_ESUGESS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESUGESS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESUGESS_4.addFeatures(features_ESUGESS_4);
var lyr_ESUGESS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESUGESS_4, 
                style: style_ESUGESS_4,
                interactive: true,
                title: '<img src="styles/legend/ESUGESS_4.png" /> ES UGESS'
            });
var format_ESpartenairesBA_5 = new ol.format.GeoJSON();
var features_ESpartenairesBA_5 = format_ESpartenairesBA_5.readFeatures(json_ESpartenairesBA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESpartenairesBA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESpartenairesBA_5.addFeatures(features_ESpartenairesBA_5);
var lyr_ESpartenairesBA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESpartenairesBA_5, 
                style: style_ESpartenairesBA_5,
                interactive: true,
                title: '<img src="styles/legend/ESpartenairesBA_5.png" /> ES partenaires BA'
            });
var format_EStudiantespartenairesBA_6 = new ol.format.GeoJSON();
var features_EStudiantespartenairesBA_6 = format_EStudiantespartenairesBA_6.readFeatures(json_EStudiantespartenairesBA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EStudiantespartenairesBA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EStudiantespartenairesBA_6.addFeatures(features_EStudiantespartenairesBA_6);
var lyr_EStudiantespartenairesBA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EStudiantespartenairesBA_6, 
                style: style_EStudiantespartenairesBA_6,
                interactive: true,
    title: 'ES étudiantes partenaires BA<br />\
    <img src="styles/legend/EStudiantespartenairesBA_6_0.png" /> ESOPE<br />\
    <img src="styles/legend/EStudiantespartenairesBA_6_1.png" /> AGORAE<br />\
    <img src="styles/legend/EStudiantespartenairesBA_6_2.png" /> Autre ES<br />'
        });
var format_Rgions_7 = new ol.format.GeoJSON();
var features_Rgions_7 = format_Rgions_7.readFeatures(json_Rgions_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgions_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_7.addFeatures(features_Rgions_7);
var lyr_Rgions_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgions_7, 
                style: style_Rgions_7,
                interactive: false,
                title: '<img src="styles/legend/Rgions_7.png" /> Régions'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Partdesjeunes1529ansEPCIen_1.setVisible(false);lyr_Jeunes25etdelapopulationtotale_2.setVisible(false);lyr_ESANDES_3.setVisible(true);lyr_ESUGESS_4.setVisible(true);lyr_ESpartenairesBA_5.setVisible(true);lyr_EStudiantespartenairesBA_6.setVisible(true);lyr_Rgions_7.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Partdesjeunes1529ansEPCIen_1,lyr_Jeunes25etdelapopulationtotale_2,lyr_ESANDES_3,lyr_ESUGESS_4,lyr_ESpartenairesBA_5,lyr_EStudiantespartenairesBA_6,lyr_Rgions_7];
lyr_Partdesjeunes1529ansEPCIen_1.set('fieldAliases', {'NOM_DEPT': 'DEPARTMENT', 'NOM_REGION': 'REGION', 'POPULATION': 'POPULATION', 'SIREN': 'SIREN', 'SOCIALE': 'EPCI', 'Part des 1': 'PART 15-29 ANS (2020)', });
lyr_Jeunes25etdelapopulationtotale_2.set('fieldAliases', {'NOM_DEPT': 'DEPARTMENT', 'NOM_REGION': 'REGION', 'POPULATION': 'POPULATION', 'SIREN': 'SIREN', 'SOCIALE': 'EPCI', 'Part des 1': 'PART 15-29 ANS (2020)', });
lyr_ESANDES_3.set('fieldAliases', {'address': 'Adresse', 'store': 'Nom', 'thumb': 'thumb', 'id': 'id', 'distance': 'distance', 'permalink': 'Site', 'address2': 'address2', 'city': 'Ville', 'state': 'state', 'zip': 'CP', 'country': 'country', 'lat': 'lat', 'lng': 'lng', 'phone': 'phone', 'fax': 'fax', 'email': 'email', 'hours': 'hours', 'url': 'url', });
lyr_ESUGESS_4.set('fieldAliases', {'Associatio': 'Association', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ESpartenairesBA_5.set('fieldAliases', {'CODE': 'CODE', 'BA': 'BA', 'ANTENNES': 'ANTENNES', 'Nom Associ': 'Association', 'Adresse 1': 'Adresse 1', 'Adresse 2': 'Adresse', 'Code posta': 'CP', 'Ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Téléphon': 'Tel', 'E-mail': 'E-mail', 'N associat': 'N associat', 'Volumes di': 'Volume distribué', 'Dont CE': 'Dont CE', 'Dont Etat': 'Dont Etat', 'Année 202': 'Personnes accueillies', 'Année 2_1': 'Nombre de foyers', 'Année 2_2': 'Passages', 'Année 2_3': '0-3 ans', 'Année 2_4': '4-14 ans', 'Année 2_5': '15-25 ans', 'Année 2_6': '26-64 ans', 'Année 2_7': '65 ou plus', 'Année 2_8': 'Hommes accueillis', 'Année 2_9': 'Femmes accueillies', 'Colis': 'Colis', 'Repas': 'Repas', 'Epiceries': 'Epiceries', 'ANDES': 'ANDES', 'Siret': 'Siret', 'DISPOETU': 'DISPOETU', 'UGESS-AC': 'UGESS-AC', 'UGESS-SC': 'UGESS-SC', });
lyr_EStudiantespartenairesBA_6.set('fieldAliases', {'Code': 'Code', 'BA': 'BA', 'Volume': 'Volume', 'Année 202': 'Année 202', 'N Bénéfi': 'Nombre de bénéficiaires', 'Famille d\'': 'Famille d\'', 'Raison soc': 'Nom', 'Type': 'Type', 'Adresse 1': 'Adresse 1', 'Adresse 2': 'Adresse', 'Code posta': 'CP', 'Ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Téléphon': 'Tel', 'E-mail': 'E-mail', 'Colis': 'Colis', 'Repas': 'Repas', 'Epiceries': 'Epiceries', 'Autre': 'Autre', 'ANDES': 'Partenaire ANDES (1 = oui / 0 = non)', 'Passerelle': 'Passerelle', 'DISPOETU': 'DISPOETU', });
lyr_Rgions_7.set('fieldAliases', {'id': 'id', 'reg': 'reg', 'libgeo': 'libgeo', });
lyr_Partdesjeunes1529ansEPCIen_1.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'SIREN': 'Hidden', 'SOCIALE': 'TextEdit', 'Part des 1': 'TextEdit', });
lyr_Jeunes25etdelapopulationtotale_2.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'SIREN': 'Hidden', 'SOCIALE': 'TextEdit', 'Part des 1': 'TextEdit', });
lyr_ESANDES_3.set('fieldImages', {'address': 'TextEdit', 'store': 'TextEdit', 'thumb': 'Hidden', 'id': 'Hidden', 'distance': 'Hidden', 'permalink': 'TextEdit', 'address2': 'Hidden', 'city': 'TextEdit', 'state': 'Hidden', 'zip': 'TextEdit', 'country': 'Hidden', 'lat': 'Hidden', 'lng': 'Hidden', 'phone': 'Hidden', 'fax': 'Hidden', 'email': 'Hidden', 'hours': 'Hidden', 'url': 'Hidden', });
lyr_ESUGESS_4.set('fieldImages', {'Associatio': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_ESpartenairesBA_5.set('fieldImages', {'CODE': 'Hidden', 'BA': 'TextEdit', 'ANTENNES': 'TextEdit', 'Nom Associ': 'TextEdit', 'Adresse 1': 'Hidden', 'Adresse 2': 'TextEdit', 'Code posta': 'TextEdit', 'Ville': 'TextEdit', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Téléphon': 'TextEdit', 'E-mail': 'TextEdit', 'N associat': 'Hidden', 'Volumes di': 'TextEdit', 'Dont CE': 'Hidden', 'Dont Etat': 'Hidden', 'Année 202': 'TextEdit', 'Année 2_1': 'Hidden', 'Année 2_2': 'Hidden', 'Année 2_3': 'Hidden', 'Année 2_4': 'Hidden', 'Année 2_5': 'TextEdit', 'Année 2_6': 'Hidden', 'Année 2_7': 'Hidden', 'Année 2_8': 'Hidden', 'Année 2_9': 'Hidden', 'Colis': 'Hidden', 'Repas': 'Hidden', 'Epiceries': 'Hidden', 'ANDES': 'Range', 'Siret': 'Hidden', 'DISPOETU': 'Hidden', 'UGESS-AC': 'TextEdit', 'UGESS-SC': 'TextEdit', });
lyr_EStudiantespartenairesBA_6.set('fieldImages', {'Code': 'Hidden', 'BA': 'TextEdit', 'Volume': 'TextEdit', 'Année 202': 'Hidden', 'N Bénéfi': 'TextEdit', 'Famille d\'': 'Hidden', 'Raison soc': 'TextEdit', 'Type': 'TextEdit', 'Adresse 1': 'Hidden', 'Adresse 2': 'TextEdit', 'Code posta': 'TextEdit', 'Ville': 'TextEdit', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Téléphon': 'TextEdit', 'E-mail': 'TextEdit', 'Colis': 'Hidden', 'Repas': 'Hidden', 'Epiceries': 'Hidden', 'Autre': 'Hidden', 'ANDES': 'CheckBox', 'Passerelle': 'Hidden', 'DISPOETU': 'Hidden', });
lyr_Rgions_7.set('fieldImages', {'id': '', 'reg': '', 'libgeo': '', });
lyr_Partdesjeunes1529ansEPCIen_1.set('fieldLabels', {'NOM_DEPT': 'inline label', 'NOM_REGION': 'inline label', 'POPULATION': 'inline label', 'SOCIALE': 'inline label', 'Part des 1': 'inline label', });
lyr_Jeunes25etdelapopulationtotale_2.set('fieldLabels', {'NOM_DEPT': 'inline label', 'NOM_REGION': 'inline label', 'POPULATION': 'inline label', 'SOCIALE': 'inline label', 'Part des 1': 'inline label', });
lyr_ESANDES_3.set('fieldLabels', {'address': 'header label', 'store': 'header label', 'permalink': 'header label', 'city': 'header label', 'zip': 'header label', });
lyr_ESUGESS_4.set('fieldLabels', {'Associatio': 'header label', 'Adresse': 'header label', });
lyr_ESpartenairesBA_5.set('fieldLabels', {'BA': 'header label', 'ANTENNES': 'header label', 'Nom Associ': 'header label', 'Adresse 2': 'header label', 'Code posta': 'header label', 'Ville': 'header label', 'Téléphon': 'header label', 'E-mail': 'header label', 'Volumes di': 'header label', 'Année 202': 'header label', 'Année 2_5': 'header label', 'ANDES': 'header label', 'UGESS-AC': 'header label', 'UGESS-SC': 'header label', });
lyr_EStudiantespartenairesBA_6.set('fieldLabels', {'BA': 'header label', 'Volume': 'header label', 'N Bénéfi': 'header label', 'Raison soc': 'header label', 'Type': 'header label', 'Adresse 2': 'header label', 'Code posta': 'header label', 'Ville': 'header label', 'Téléphon': 'header label', 'E-mail': 'header label', 'ANDES': 'header label', });
lyr_Rgions_7.set('fieldLabels', {'id': 'no label', 'reg': 'no label', 'libgeo': 'no label', });
lyr_Rgions_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});