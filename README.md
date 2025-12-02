# Academic Homepage Template Vue

[Readme](README.md) | [中文说明](README_zh-CN.md)

Welcome to my [academic homepage](https://koorye.github.io/home/)!

![Overview](examples/overview.jpg)

![Overview](examples/overview.gif)

This is a Vue.js template for creating academic homepages.
It provides a structured layout and components to display your academic profile, publications, projects, and contact information.

## Core Features

- Easy-to-customize and extensible components
- Responsive design that adapts to various devices
- Multilingual support (English and Chinese)
- Dynamically fetch information such as GitHub Stars

## Directory Structure

```bash
├─public # Stores static resources like icons and resume PDFs
└─src    # Source code
    ├─assets # Resource files
    │  ├─gallery      # Image gallery
    │  ├─icons        # Icons
    │  ├─publications # Publication images
    │  └─styles       # Style files
    ├─components # Components
    │  ├─layout         # Layout components
    │  │  └─Sidebar.vue # Sidebar component
    │  ├─sections # Page sections
       ├─Awards.vue       # Awards section
       ├─Experience.vue   # Work experience section
       ├─Gallery.vue      # Image gallery section
       ├─Introduction.vue # Personal introduction section
       ├─News.vue         # News section
       ├─Publications.vue # Publications section
       └─Skills.vue       # Skills section
    ├─composables # Composables
    │  ├─useGitHubStarr.js # Fetch GitHub Star count
    │  ├─useLocaleData.js  # Multilingual support
    │  └─useScrollTo.js    # Smooth scrolling
    ├─locales # Language files
    │  ├─en   # English
    │  └─zh   # Chinese
    ├─router # Router
    └─views  # Views
       └─Home.vue # Homepage
```

## Quick Start

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Koorye/academic-homepage-template-vue.git
   ```

2. Install dependencies:

   ```bash
   cd academic-homepage-template-vue
   npm install
   ```

3. Run the development server:

   ```bash
    npm run dev
   ```
   After that, open your browser and visit `http://localhost:5173` (default port) to view the homepage.

4. Build the production version:

   ```bash
   npm run build
   ```
   Once the build is complete, the production-ready files will be output to the `dist` directory.

5. Deploy to GitHub Pages:

   - Create a repository named `Username.github.io` (replace `Username` with your GitHub username).
   - Push the contents of the `dist` directory to the `main` branch of this repository.

## Custom Configuration

1. Modify Personal Information

All configuration items are located in the `src/locales/en` and `src/locales/zh` directories, and you can modify them as needed. For example, to edit award information, modify the `awards.js` file:

```javascript
export default {
  'title': 'Awards',
  'data': [
    { icon: '🎓', title: 'Outstanding Graduate Student', issuer: 'Tsinghua University', year: '2025' },
    { icon: '💰', title: 'National Scholarship', issuer: 'Ministry of Education of the People\'s Republic of China', year: '2024' },
    { icon: '🏆', title: 'National Golden Award', issuer: 'China "Internet+" College Student Innovation Competition', year: '2023' }
  ]
}
```
Update the content in the `data` array to add or modify award information. Similarly, you can edit information for other sections:

- `awards.js` - Awards
- `experience.js` - Work experience
- `gallery.js` - Image gallery
- `home.sjs` - Homepage information
- `introduction.js` - Personal introduction
- `news.js` - News
- `publications.js` - Publications
- `sections.js` - Navigation bar
- `skills.js` - Skills

If you need to reference images, place the image files in the `src/assets` directory and use relative paths in the corresponding configuration files, importing via `new URL` like this:

```javascript
{ src: new URL('../../assets/gallery/photo1.jpg', import.meta.url).href, alt: 'Photo 1' }
```

2. Modify Visitor Map

This template integrates the MapMyVisitors visitor map. To adjust the map configuration, edit the script URL in the `src/views/Home.vue` file:

```javascript
  scriptElement.src = '//mapmyvisitors.com/map.js?cl=2c37b1&w=a&t=n&d=ls-3Plf1605cuP3jr7En9809TySixy9TuZAJlI_DmFg&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080';
```

You can log in to [MapMyVisitors](https://www.mapmyvisitors.com/) to obtain a custom script URL.

## Acknowledgements

Thanks to the following open-source projects and libraries that contributed to the development of this template:
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next-generation frontend toolchain
- [Vue Router](https://router.vuejs.org/) - Official router manager for Vue.js
- [Vue I18n](https://kazupon.github.io/vue-i18n/) - Internationalization plugin
- [Vue Swiper](https://swiperjs.com/vue) - Carousel component