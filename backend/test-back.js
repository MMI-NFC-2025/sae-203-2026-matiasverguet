// Fichier de test pour les fonctions PocketBase
// Lancez avec : node backend/test-back.js

import {
    artistesSorted,
    scenesName,
    artistesName,
    artisteID,
    sceneID,
    allartistebysceneId,
    allartistebysceneName,
    addArtiste,
    addScene,
    updateArtiste,
    updateScene
} from './backend.mjs';


// ============================================
// TEST 1 : Recuperer tous les artistes par date
// ============================================
console.log('\n--- TEST 1 : Artistes tries par date ---');
try {
    const records = await artistesSorted();
    console.log('Nombre d\'artistes:', records.length);
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 2 : Recuperer toutes les scenes par nom
// ============================================
console.log('\n--- TEST 2 : Scenes triees par nom ---');
try {
    const records = await scenesName();
    console.log('Nombre de scenes:', records.length);
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 3 : Recuperer tous les artistes par nom
// ============================================
console.log('\n--- TEST 3 : Artistes tries par nom ---');
try {
    const records = await artistesName();
    console.log('Nombre d\'artistes:', records.length);
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 4 : Recuperer un artiste par ID
// ============================================
// Remplacez par un ID valide de votre base de donnees
console.log('\n--- TEST 4 : Artiste par ID ---');
try {
    const record = await artisteID('f4biwpqzeciwtqy');
    console.log('Artiste trouve:');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 5 : Recuperer une scene par ID
// ============================================
// Remplacez par un ID valide de votre base de donnees
console.log('\n--- TEST 5 : Scene par ID ---');
try {
    const record = await sceneID('wdru7lmkw7rje94');
    console.log('Scene trouvee:');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 6 : Artistes d'une scene par ID de scene
// ============================================
console.log('\n--- TEST 6 : Artistes par ID de scene ---');
try {
    const records = await allartistebysceneId('zhpqfyv0f70ftft');
    console.log('Artistes de la scene:');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 7 : Artistes d'une scene par nom de scene
// ============================================
console.log('\n--- TEST 7 : Artistes par nom de scene ---');
try {
    const records = await allartistebysceneName('Scene Electronique');
    console.log('Artistes de la scene:');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error('Erreur:', e.message);
}


// ============================================
// TEST 8 : Ajouter un artiste (COMMENTE)
// ============================================
// Decommentez pour tester l'ajout
/*
console.log('\n--- TEST 8 : Ajouter un artiste ---');
try {
    const artisteData = {
        nom: "Nouvel Artiste Test",
        date_representation: "2026-12-22T19:00:00.000Z",
        scene: "wdru7lmkw7rje94",
        description: "Description de test"
    };
    const record = await addArtiste(artisteData);
    console.log('Artiste ajoute:', record.id);
} catch (e) {
    console.error('Erreur:', e.message);
}
*/


// ============================================
// TEST 9 : Ajouter une scene (COMMENTE)
// ============================================
// Decommentez pour tester l'ajout
/*
console.log('\n--- TEST 9 : Ajouter une scene ---');
try {
    const sceneData = {
        nom: "Nouvelle Scene Test",
        description: "Description de la scene test"
    };
    const record = await addScene(sceneData);
    console.log('Scene ajoutee:', record.id);
} catch (e) {
    console.error('Erreur:', e.message);
}
*/


// ============================================
// TEST 10 : Modifier un artiste (COMMENTE)
// ============================================
// Decommentez pour tester la modification
/*
console.log('\n--- TEST 10 : Modifier un artiste ---');
try {
    const data = {
        description: "Nouvelle description mise a jour"
    };
    const record = await updateArtiste('ID_ARTISTE_ICI', data);
    console.log('Artiste modifie:', record.id);
} catch (e) {
    console.error('Erreur:', e.message);
}
*/


// ============================================
// TEST 11 : Modifier une scene (COMMENTE)
// ============================================
// Decommentez pour tester la modification
/*
console.log('\n--- TEST 11 : Modifier une scene ---');
try {
    const data = {
        description: "Nouvelle description de scene"
    };
    const record = await updateScene('ID_SCENE_ICI', data);
    console.log('Scene modifiee:', record.id);
} catch (e) {
    console.error('Erreur:', e.message);
}
*/


console.log('\n--- FIN DES TESTS ---');
