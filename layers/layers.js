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
var format_PopulationEPCI_1 = new ol.format.GeoJSON();
var features_PopulationEPCI_1 = format_PopulationEPCI_1.readFeatures(json_PopulationEPCI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationEPCI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationEPCI_1.addFeatures(features_PopulationEPCI_1);
var lyr_PopulationEPCI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationEPCI_1, 
                style: style_PopulationEPCI_1,
                interactive: true,
    title: 'Population - EPCI <br />\
    <img src="styles/legend/PopulationEPCI_1_0.png" /> 3985 - 11247<br />\
    <img src="styles/legend/PopulationEPCI_1_1.png" /> 11247 - 19224<br />\
    <img src="styles/legend/PopulationEPCI_1_2.png" /> 19224 - 28402<br />\
    <img src="styles/legend/PopulationEPCI_1_3.png" /> 28402 - 53512<br />\
    <img src="styles/legend/PopulationEPCI_1_4.png" /> 53512 - 7136353<br />'
        });
var format_Partdesjeunes1529ansEPCIen_2 = new ol.format.GeoJSON();
var features_Partdesjeunes1529ansEPCIen_2 = format_Partdesjeunes1529ansEPCIen_2.readFeatures(json_Partdesjeunes1529ansEPCIen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partdesjeunes1529ansEPCIen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partdesjeunes1529ansEPCIen_2.addFeatures(features_Partdesjeunes1529ansEPCIen_2);
var lyr_Partdesjeunes1529ansEPCIen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partdesjeunes1529ansEPCIen_2, 
                style: style_Partdesjeunes1529ansEPCIen_2,
                interactive: true,
    title: 'Part des jeunes 15-29 ans - EPCI (en %)<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_2_0.png" /> 8,9 - 12,2<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_2_1.png" /> 12,2 - 13,5<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_2_2.png" /> 13,5 - 14,6<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_2_3.png" /> 14,6 - 15,9<br />\
    <img src="styles/legend/Partdesjeunes1529ansEPCIen_2_4.png" /> 15,9 - 36,2<br />'
        });
var format_Tauxdepauvretmoinsde30ansplusde25_3 = new ol.format.GeoJSON();
var features_Tauxdepauvretmoinsde30ansplusde25_3 = format_Tauxdepauvretmoinsde30ansplusde25_3.readFeatures(json_Tauxdepauvretmoinsde30ansplusde25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdepauvretmoinsde30ansplusde25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdepauvretmoinsde30ansplusde25_3.addFeatures(features_Tauxdepauvretmoinsde30ansplusde25_3);
var lyr_Tauxdepauvretmoinsde30ansplusde25_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdepauvretmoinsde30ansplusde25_3, 
                style: style_Tauxdepauvretmoinsde30ansplusde25_3,
                interactive: true,
                title: '<img src="styles/legend/Tauxdepauvretmoinsde30ansplusde25_3.png" /> Taux de pauvreté - moins de 30 ans - plus de 25%'
            });
var format_PartdejeunesEPCIplusde25_4 = new ol.format.GeoJSON();
var features_PartdejeunesEPCIplusde25_4 = format_PartdejeunesEPCIplusde25_4.readFeatures(json_PartdejeunesEPCIplusde25_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartdejeunesEPCIplusde25_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartdejeunesEPCIplusde25_4.addFeatures(features_PartdejeunesEPCIplusde25_4);
var lyr_PartdejeunesEPCIplusde25_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PartdejeunesEPCIplusde25_4, 
                style: style_PartdejeunesEPCIplusde25_4,
                interactive: true,
                title: '<img src="styles/legend/PartdejeunesEPCIplusde25_4.png" /> Part de jeunes - EPCI  - plus de 25 % '
            });
var format_ESUGESS_5 = new ol.format.GeoJSON();
var features_ESUGESS_5 = format_ESUGESS_5.readFeatures(json_ESUGESS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESUGESS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESUGESS_5.addFeatures(features_ESUGESS_5);
var lyr_ESUGESS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESUGESS_5, 
                style: style_ESUGESS_5,
                interactive: true,
                title: '<img src="styles/legend/ESUGESS_5.png" /> ES UGESS'
            });
var format_ESANDES_6 = new ol.format.GeoJSON();
var features_ESANDES_6 = format_ESANDES_6.readFeatures(json_ESANDES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESANDES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESANDES_6.addFeatures(features_ESANDES_6);
var lyr_ESANDES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESANDES_6, 
                style: style_ESANDES_6,
                interactive: true,
                title: '<img src="styles/legend/ESANDES_6.png" /> ES ANDES'
            });
var format_ESpartenairesBA_7 = new ol.format.GeoJSON();
var features_ESpartenairesBA_7 = format_ESpartenairesBA_7.readFeatures(json_ESpartenairesBA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESpartenairesBA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESpartenairesBA_7.addFeatures(features_ESpartenairesBA_7);
var lyr_ESpartenairesBA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESpartenairesBA_7, 
                style: style_ESpartenairesBA_7,
                interactive: true,
                title: '<img src="styles/legend/ESpartenairesBA_7.png" /> ES partenaires BA'
            });
var format_EStudiantespartenairesBA_8 = new ol.format.GeoJSON();
var features_EStudiantespartenairesBA_8 = format_EStudiantespartenairesBA_8.readFeatures(json_EStudiantespartenairesBA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EStudiantespartenairesBA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EStudiantespartenairesBA_8.addFeatures(features_EStudiantespartenairesBA_8);
var lyr_EStudiantespartenairesBA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EStudiantespartenairesBA_8, 
                style: style_EStudiantespartenairesBA_8,
                interactive: true,
    title: 'ES étudiantes partenaires BA<br />\
    <img src="styles/legend/EStudiantespartenairesBA_8_0.png" /> ESOPE<br />\
    <img src="styles/legend/EStudiantespartenairesBA_8_1.png" /> AGORAE<br />\
    <img src="styles/legend/EStudiantespartenairesBA_8_2.png" /> Autre ES<br />'
        });
var format_Rgions_9 = new ol.format.GeoJSON();
var features_Rgions_9 = format_Rgions_9.readFeatures(json_Rgions_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgions_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_9.addFeatures(features_Rgions_9);
var lyr_Rgions_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgions_9, 
                style: style_Rgions_9,
                interactive: false,
                title: '<img src="styles/legend/Rgions_9.png" /> Régions'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_PopulationEPCI_1.setVisible(false);lyr_Partdesjeunes1529ansEPCIen_2.setVisible(false);lyr_Tauxdepauvretmoinsde30ansplusde25_3.setVisible(false);lyr_PartdejeunesEPCIplusde25_4.setVisible(false);lyr_ESUGESS_5.setVisible(true);lyr_ESANDES_6.setVisible(true);lyr_ESpartenairesBA_7.setVisible(true);lyr_EStudiantespartenairesBA_8.setVisible(true);lyr_Rgions_9.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PopulationEPCI_1,lyr_Partdesjeunes1529ansEPCIen_2,lyr_Tauxdepauvretmoinsde30ansplusde25_3,lyr_PartdejeunesEPCIplusde25_4,lyr_ESUGESS_5,lyr_ESANDES_6,lyr_ESpartenairesBA_7,lyr_EStudiantespartenairesBA_8,lyr_Rgions_9];
lyr_PopulationEPCI_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REGION': 'NOM_REGION', 'INSEE_COM': 'INSEE_COM', 'CODE_COMM': 'CODE_COMM', 'NOM_COMM': 'NOM_COMM', 'POPULATION': 'POPULATION', 'CODE_CANT': 'CODE_CANT', 'CODE_ARR': 'CODE_ARR', 'DEPT': 'DEPT', 'SIREN': 'SIREN', 'SOCIALE': 'SOCIALE', 'JURIDIQUE': 'JURIDIQUE', 'DEP_COM': 'DEP_COM', 'INSEE': 'INSEE', 'MEMBRE': 'MEMBRE', 'NOM_MEMBRE': 'NOM_MEMBRE', });
lyr_Partdesjeunes1529ansEPCIen_2.set('fieldAliases', {'NOM_DEPT': 'DEPARTMENT', 'NOM_REGION': 'REGION', 'POPULATION': 'Population (EPCI)', 'SIREN': 'SIREN', 'SOCIALE': 'EPCI', 'Part des 1': 'PART 15-29 ANS en %  (2020)', });
lyr_Tauxdepauvretmoinsde30ansplusde25_3.set('fieldAliases', {'NOM_REGION': 'Région', 'NOM_COMM': 'NOM_COMM', 'DEPT': 'DEPT', 'SOCIALE': 'EPCI', 'JURIDIQUE': 'JURIDIQUE', 'Départeme': 'Département', 'Taux de _2': 'Taux de pauvreté - moins de 30 ans - EPCI', });
lyr_PartdejeunesEPCIplusde25_4.set('fieldAliases', {'NOM_DEPT': 'DEPARTMENT', 'NOM_REGION': 'REGION', 'POPULATION': 'POPULATION', 'SIREN': 'SIREN', 'SOCIALE': 'EPCI', 'Part des 1': 'PART 15-29 ANS (2020)', });
lyr_ESUGESS_5.set('fieldAliases', {'Associatio': 'Association', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ESANDES_6.set('fieldAliases', {'address': 'Adresse', 'store': 'Nom', 'thumb': 'thumb', 'id': 'id', 'distance': 'distance', 'permalink': 'Site', 'address2': 'address2', 'city': 'Ville', 'state': 'state', 'zip': 'CP', 'country': 'country', 'lat': 'lat', 'lng': 'lng', 'phone': 'phone', 'fax': 'fax', 'email': 'email', 'hours': 'hours', 'url': 'url', });
lyr_ESpartenairesBA_7.set('fieldAliases', {'CODE': 'CODE', 'BA': 'Banque Alimentaire', 'ANTENNES': 'ANTENNES', 'Nom Associ': 'Association', 'Adresse 1': 'Adresse 1', 'Adresse 2': 'Adresse 2', 'Code posta': 'Code posta', 'Ville': 'Ville', 'Full Addre': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Téléphon': 'Tel', 'E-mail': 'E-mail', 'Volumes di': 'Volume', 'Dont CE': 'Dont CE', 'Dont Etat': 'Dont Etat', 'Année 202': 'Personnes accueillies', 'Année 2_1': 'Année 2_1', 'Année 2_2': 'Année 2_2', 'Année 2_3': 'Année 2_3', 'Année 2_4': 'Année 2_4', 'Année 2_5': '15-25 ans', 'Année 2_6': 'Année 2_6', 'Année 2_7': 'Année 2_7', 'Année 2_8': 'Année 2_8', 'Année 2_9': 'Année 2_9', 'Colis': 'Colis', 'Repas': 'Repas', 'Epiceries': 'Epiceries', 'ANDES': 'ANDES (0=non/1=oui)', 'Siret': 'Siret', 'DISPOETU': 'DISPOETU', 'UGESS-AC': 'UGESS-AC', 'UGESS-SC': 'UGESS-SC', });
lyr_EStudiantespartenairesBA_8.set('fieldAliases', {'Code': 'Code', 'BA': 'BA', 'Volume': 'Volume', 'Année 202': 'Année 202', 'N Bénéfi': 'Nombre de bénéficiaires', 'Famille d\'': 'Famille d\'', 'Raison soc': 'Nom', 'Type': 'Type', 'Adresse 1': 'Adresse 1', 'Adresse 2': 'Adresse', 'Code posta': 'CP', 'Ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Téléphon': 'Tel', 'E-mail': 'E-mail', 'Colis': 'Colis', 'Repas': 'Repas', 'Epiceries': 'Epiceries', 'Autre': 'Autre', 'ANDES': 'Partenaire ANDES (1 = oui / 0 = non)', 'Passerelle': 'Passerelle', 'DISPOETU': 'DISPOETU', });
lyr_Rgions_9.set('fieldAliases', {'id': 'id', 'reg': 'reg', 'libgeo': 'libgeo', });
lyr_PopulationEPCI_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REGION': 'TextEdit', 'INSEE_COM': 'TextEdit', 'CODE_COMM': 'TextEdit', 'NOM_COMM': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_CANT': 'TextEdit', 'CODE_ARR': 'TextEdit', 'DEPT': 'TextEdit', 'SIREN': 'TextEdit', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'TextEdit', 'DEP_COM': 'TextEdit', 'INSEE': 'TextEdit', 'MEMBRE': 'TextEdit', 'NOM_MEMBRE': 'TextEdit', });
lyr_Partdesjeunes1529ansEPCIen_2.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'SIREN': 'Hidden', 'SOCIALE': 'TextEdit', 'Part des 1': 'TextEdit', });
lyr_Tauxdepauvretmoinsde30ansplusde25_3.set('fieldImages', {'NOM_REGION': 'TextEdit', 'NOM_COMM': 'Hidden', 'DEPT': 'Hidden', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'Hidden', 'Départeme': 'TextEdit', 'Taux de _2': 'TextEdit', });
lyr_PartdejeunesEPCIplusde25_4.set('fieldImages', {'NOM_DEPT': 'TextEdit', 'NOM_REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'SIREN': 'Hidden', 'SOCIALE': 'TextEdit', 'Part des 1': 'TextEdit', });
lyr_ESUGESS_5.set('fieldImages', {'Associatio': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_ESANDES_6.set('fieldImages', {'address': 'TextEdit', 'store': 'TextEdit', 'thumb': 'Hidden', 'id': 'Hidden', 'distance': 'Hidden', 'permalink': 'TextEdit', 'address2': 'Hidden', 'city': 'TextEdit', 'state': 'Hidden', 'zip': 'TextEdit', 'country': 'Hidden', 'lat': 'Hidden', 'lng': 'Hidden', 'phone': 'Hidden', 'fax': 'Hidden', 'email': 'Hidden', 'hours': 'Hidden', 'url': 'Hidden', });
lyr_ESpartenairesBA_7.set('fieldImages', {'CODE': 'Hidden', 'BA': 'TextEdit', 'ANTENNES': 'Hidden', 'Nom Associ': 'TextEdit', 'Adresse 1': 'Hidden', 'Adresse 2': 'Hidden', 'Code posta': 'Hidden', 'Ville': 'Hidden', 'Full Addre': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Téléphon': 'TextEdit', 'E-mail': 'Hidden', 'Volumes di': 'TextEdit', 'Dont CE': 'Hidden', 'Dont Etat': 'Hidden', 'Année 202': 'TextEdit', 'Année 2_1': 'Hidden', 'Année 2_2': 'Hidden', 'Année 2_3': 'Hidden', 'Année 2_4': 'Hidden', 'Année 2_5': 'TextEdit', 'Année 2_6': 'Hidden', 'Année 2_7': 'Hidden', 'Année 2_8': 'Hidden', 'Année 2_9': 'Hidden', 'Colis': 'Hidden', 'Repas': 'Hidden', 'Epiceries': 'Hidden', 'ANDES': 'Range', 'Siret': 'Hidden', 'DISPOETU': 'Hidden', 'UGESS-AC': 'TextEdit', 'UGESS-SC': 'TextEdit', });
lyr_EStudiantespartenairesBA_8.set('fieldImages', {'Code': 'Hidden', 'BA': 'TextEdit', 'Volume': 'TextEdit', 'Année 202': 'Hidden', 'N Bénéfi': 'TextEdit', 'Famille d\'': 'Hidden', 'Raison soc': 'TextEdit', 'Type': 'TextEdit', 'Adresse 1': 'Hidden', 'Adresse 2': 'TextEdit', 'Code posta': 'TextEdit', 'Ville': 'TextEdit', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Téléphon': 'TextEdit', 'E-mail': 'TextEdit', 'Colis': 'Hidden', 'Repas': 'Hidden', 'Epiceries': 'Hidden', 'Autre': 'Hidden', 'ANDES': 'CheckBox', 'Passerelle': 'Hidden', 'DISPOETU': 'Hidden', });
lyr_Rgions_9.set('fieldImages', {'id': '', 'reg': '', 'libgeo': '', });
lyr_PopulationEPCI_1.set('fieldLabels', {'ID_GEOFLA': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REGION': 'no label', 'INSEE_COM': 'no label', 'CODE_COMM': 'no label', 'NOM_COMM': 'no label', 'POPULATION': 'no label', 'CODE_CANT': 'no label', 'CODE_ARR': 'no label', 'DEPT': 'no label', 'SIREN': 'no label', 'SOCIALE': 'no label', 'JURIDIQUE': 'no label', 'DEP_COM': 'no label', 'INSEE': 'no label', 'MEMBRE': 'no label', 'NOM_MEMBRE': 'no label', });
lyr_Partdesjeunes1529ansEPCIen_2.set('fieldLabels', {'NOM_DEPT': 'header label', 'NOM_REGION': 'header label', 'POPULATION': 'header label', 'SOCIALE': 'header label', 'Part des 1': 'header label', });
lyr_Tauxdepauvretmoinsde30ansplusde25_3.set('fieldLabels', {'NOM_REGION': 'header label', 'SOCIALE': 'header label', 'Départeme': 'header label', 'Taux de _2': 'header label', });
lyr_PartdejeunesEPCIplusde25_4.set('fieldLabels', {'NOM_DEPT': 'inline label', 'NOM_REGION': 'inline label', 'POPULATION': 'inline label', 'SOCIALE': 'inline label', 'Part des 1': 'inline label', });
lyr_ESUGESS_5.set('fieldLabels', {'Associatio': 'header label', 'Adresse': 'header label', });
lyr_ESANDES_6.set('fieldLabels', {'address': 'header label', 'store': 'header label', 'permalink': 'header label', 'city': 'header label', 'zip': 'header label', });
lyr_ESpartenairesBA_7.set('fieldLabels', {'BA': 'header label', 'Nom Associ': 'header label', 'Full Addre': 'header label', 'Téléphon': 'header label', 'Volumes di': 'header label', 'Année 202': 'header label', 'Année 2_5': 'header label', 'ANDES': 'header label', 'UGESS-AC': 'header label', 'UGESS-SC': 'header label', });
lyr_EStudiantespartenairesBA_8.set('fieldLabels', {'BA': 'header label', 'Volume': 'header label', 'N Bénéfi': 'header label', 'Raison soc': 'header label', 'Type': 'header label', 'Adresse 2': 'header label', 'Code posta': 'header label', 'Ville': 'header label', 'Téléphon': 'header label', 'E-mail': 'header label', 'ANDES': 'header label', });
lyr_Rgions_9.set('fieldLabels', {'id': 'no label', 'reg': 'no label', 'libgeo': 'no label', });
lyr_Rgions_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});