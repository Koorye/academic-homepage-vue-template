export default {
  avatar: new URL('../../assets/profile.png', import.meta.url).href,
  name: '张三',
  email: 'san.zhang@example.com',
  navs: [
    { id: 'introduction', title: '个人简介' },
    { id: 'experience', title: '工作&教育经历' },
    { id: 'news', title: '最新动态' },
    { id: 'publications', title: '发表成果' },
    { id: 'awards', title: '荣誉奖项' },
    { id: 'skills', title: '个人技能' },
    { id: 'gallery', title: '画廊' },
  ],
  find: '联系我:',
  contacts: [
    { title: 'GitHub', url: 'https://github.com/username', icon: new URL('../../assets/icons/github.svg', import.meta.url).href },
    { title: '博客', url: 'https://blog.example.com', icon: new URL('../../assets/icons/blog.svg', import.meta.url).href },
    { title: '谷歌学术', url: 'https://scholar.google.com/citations?user=example', icon: new URL('../../assets/icons/google-scholar.svg', import.meta.url).href },
    { title: 'DBLP', url: 'https://dblp.org/pid/xx/xxx.html', icon: new URL('../../assets/icons/dblp.svg', import.meta.url).href },
    { title: 'CV', url: 'resume-en.pdf', icon: new URL('../../assets/icons/resume.svg', import.meta.url).href },
    { title: '简历', url: 'resume-zh_CN.pdf', icon: new URL('../../assets/icons/resume.svg', import.meta.url).href },
  ],
  copyright: '由 Academic Homepage Template Vue 驱动. © 2025 Koorye.',
}