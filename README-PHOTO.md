# Comment ajouter votre photo de profil

## Option 1: Utiliser un lien URL (Recommandé)

1. Hébergez votre photo sur un service comme:
   - GitHub (dans un repo public)
   - Cloudinary
   - Imgur
   - Google Drive (avec lien public)

2. Dans `src/sections/Hero.tsx`, remplacez le bloc de code commenté:

```tsx
{/* Remplacez cette section: */}
<div className="text-center p-8">
  <motion.div...>
    <span className="text-5xl font-bold gradient-text">NC</span>
  </motion.div>
  ...
</div>

{/* Par: */}
<img 
  src="VOTRE_URL_DE_PHOTO_ICI" 
  alt="Nanwokan Claire-Lydie OUATTARA"
  className="w-full h-full object-cover"
/>
```

3. Faites la même chose dans `src/sections/About.tsx`

## Option 2: Photo locale

1. Placez votre photo dans le dossier `public/` (par exemple: `public/photo-profil.jpg`)

2. Dans `src/sections/Hero.tsx`, utilisez:
```tsx
<img 
  src="/photo-profil.jpg" 
  alt="Nanwokan Claire-Lydie OUATTARA"
  className="w-full h-full object-cover"
/>
```

3. Rebuild et redeploy

## Conseils pour la photo

- Format carré recommandé (1:1)
- Taille minimale: 400x400px
- Format: JPG ou PNG
- Fond neutre ou professionnel
