import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const pb = new PocketBase('https://les-rives-du-territoire.verguet-bailly.fr');

    await pb.collection('contact').create({
      nom: name,
      email,
      sujet: subject,
      message,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Votre message a été envoyé avec succès!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
