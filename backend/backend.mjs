import PocketBase from 'pocketbase'; 
const pb = new PocketBase(import.meta.env.POCKETBASE_URL || 'http://127.0.0.1:8090');

export async function artistesSorted() { 
    try {
        return await pb.collection('artistes').getFullList({ sort: 'date_representation', expand: 'scene' });
    } catch (e) {
        console.error('Erreur artistesSorted:', e);
        return [];
    }
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
    try {
        return await pb.collection('artistes').getFullList({ sort: 'nom' });
    } catch (e) {
        console.error('Erreur artistesName:', e);
        return [];
    }
}

export async function artisteID(id) { 
    try {
        return await pb.collection('artistes').getOne(id);
    } catch (e) {
        console.error('Erreur artisteID:', e);
        return null;
    }
}

export async function sceneID(id) { 
    try {
        return await pb.collection('scenes').getOne(id);
    } catch (e) {
        console.error('Erreur sceneID:', e);
        return null;
    }
}

export async function allartistebysceneId(id) { 
    try {
        return await pb.collection('artistes').getFullList({ filter: `scene = "${id}"`, sort: 'date_representation' });
    } catch (e) {
        console.error('Erreur allartistebysceneId:', e);
        return [];
    }
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