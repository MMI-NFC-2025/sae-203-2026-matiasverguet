import PocketBase from 'pocketbase'; 
const pb = new PocketBase('https://les-rives-du-territoire.verguet-bailly.fr:443');

export async function artistesSorted() { 
    const records = await pb.collection('artistes').getFullList({ sort: 'date_representation', expand: 'scene' }); 
    return records; 
}

export async function scenesName() { 
    try {
        const records = await pb.collection('scenes').getFullList({ sort: 'nom_scene' }); 
        return records;
    } catch (e) {
        console.error('Erreur scenesName:', e);
        return [];
    }
}

export async function artistesName() { 
    const records = await pb.collection('artistes').getFullList({ sort: 'nom' }); 
    return records; 
}

export async function artisteID(id) { 
    const record = await pb.collection('artistes').getOne(id); 
    return record; 
}

export async function sceneID(id) { 
    const record = await pb.collection('scenes').getOne(id); 
    return record; 
}

export async function allartistebysceneId(id) { 
    const records = await pb.collection('artistes').getFullList({ filter: `scene = "${id}"`, sort: 'date_representation' }); 
    return records; 
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('scenes').getFirstListItem(`nom_scene = "${nom}"`);
    const records = await pb.collection('artistes').getFullList({ filter: `scene = "${scene.id}"`, sort: 'date_representation' }); 
    return records; 
}
export async function addArtiste(artisteData) {
    try {
        const record = await pb.collection('artistes').create(artisteData);
        console.log('Artiste ajouté :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'artiste :', error);
        throw error;
    }
}

export async function addScene(sceneData) {
    try {
        const record = await pb.collection('scenes').create(sceneData);
        console.log('Scène ajoutée :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la scène :', error);
        throw error;
    }
}

export async function updateArtiste(id, artisteData) {
    try {
        const record = await pb.collection('artistes').update(id, artisteData);
        console.log('Artiste modifié :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de la modification de l\'artiste :', error);
        throw error;
    }
}

export async function updateScene(id, sceneData) {
    try {
        const record = await pb.collection('scenes').update(id, sceneData);
        console.log('Scène modifiée :', record);
        return record;
    } catch (error) {
        console.error('Erreur lors de la modification de la scène :', error);
        throw error;
    }
}