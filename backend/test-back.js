import {artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene} from './backend.mjs';


/* artistes par date
try {
    const records = await artistesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/
/ scenes par nom 
try {
    const records = await scenesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}


/artistes par nom
try {
    const records = await artistesName();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/ info d'un artiste par id
try { 
    const records = await artisteID('f4biwpqzeciwtqy'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* info d'une scene par id
try { 
    const records = await sceneID('wdru7lmkw7rje94'); 
    console.log(JSON.stringify(records, null, 2)); 
} catch (e) { 
    console.error(e);
}

/* artistes d'une scene par id de la scene et trié par date
try {
    const records = await allartistebysceneId('zhpqfyv0f70ftft');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*artistes d'une scene par nom de la scene et trié par date
try {
    const records = await allartistebysceneName('Scène Électronique');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
/* ajouter un artiste
try {
    const artisteData = {
        "nom": "Matias Verguet",
        "date_de_representation": "2026-12-22T19:00:00.000Z",
        "scene" : "wdru7lmkw7rje94",
        "description" : "il est trop bo",
}; 
    await addArtiste(artisteData);
} catch (e) {
    console.error(e);
}
/

/ ajouter une scene
try {
    const sceneData = {
        "nom": "Scene de la Roseraie",
        "artistes": ["wvlnyr3go5yresj", "80mdnjn6tihxxlz"],
        "description" : "scene pour les plus fort",
}; 
    await addScene(sceneData);
} catch (e) {
    console.error(e);
}

/* modifier un artiste
try {
    const data = {
        "nom": "Miki",
        "date_de_representation": "2026-12-22T21:30:00.000Z",
        "scene" : "zhpqfyv0f70ftft",
        "description" : " Entre sonorités Lo-fi et mélodies pop sucrées, Miki transporte son public dans un univers coloré et mélancolique. Originaire de la scène underground, elle s'impose aujourd'hui comme une icône de la Bedroom Pop avec ses textes intimistes et ses productions épurées.",
    };
    const record = await updateArtiste('fcqa9aigsmvzwp7', data);
    console.log("Artiste mis à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}


/* modifier une scene*/
try {
    const data = {
        "nom": "Scène Électronique",
        "artistes": ["68mf69zaey525np", "6lwxr2yz87kqu1c"],
        "description" : "Dédiée aux musiques électroniques, cette scène propose des sons techno, house et electro jusqu'au bout de la nuit. ",
    };
    const record = await updateScene('wdru7lmkw7rje94', data);
    console.log("Scène mise à jour avec succès");
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

