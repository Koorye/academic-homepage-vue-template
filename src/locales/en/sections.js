export default {
  name: 'San Zhang',
  email: 'san.zhang@example.com',
  navs: [
    { id: 'introduction', title: 'INTRODUCTION' },
    { id: 'experience', title: 'EXPERIENCE' },
    { id: 'news', title: 'NEWS' },
    { id: 'publications', title: 'PUBLICATIONS' },
    { id: 'awards', title: 'AWARDS' },
    { id: 'skills', title: 'SKILLS' },
    { id: 'gallery', title: 'GALLERY' },
  ],
  find: 'Find me on:',
  contacts: [
    { title: 'GitHub', url: 'https://github.com/username', icon: new URL('../../assets/icons/github.svg', import.meta.url).href },
    { title: 'Blog', url: 'https://blog.example.com', icon: new URL('../../assets/icons/blog.svg', import.meta.url).href },
    { title: 'GS', url: 'https://scholar.google.com/citations?user=example', icon: new URL('../../assets/icons/google-scholar.svg', import.meta.url).href },
    { title: 'DBLP', url: 'https://dblp.org/pid/xx/xxx.html', icon: new URL('../../assets/icons/dblp.svg', import.meta.url).href },
    { title: 'CV', url: 'resume-en.pdf', icon: new URL('../../assets/icons/resume.svg', import.meta.url).href },
    { title: '简历', url: 'resume-zh_CN.pdf', icon: new URL('../../assets/icons/resume.svg', import.meta.url).href },
  ],
  copyright: 'Powered by Academic Homepage Template Vue. © 2025 Koorye.',
}