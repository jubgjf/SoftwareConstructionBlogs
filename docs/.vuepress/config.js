module.exports = {
    base: '/SoftwareConstructionBlogs/',
    title: 'Guan Jiannan 的软件构造博客',
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }
    },
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}]
    ],
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {
                text: '外部导航',
                items: [
                    {text: 'MIT 软件构造', link: 'http://web.mit.edu/6.031/www/fa20/'},
                    {text: 'CMU 软件构造', link: 'https://www.cs.cmu.edu/~charlie/courses/17-214/2020-fall/'},
                    {text: 'Piazza', link: 'https://piazza.com/'}
                ]
            }
        ],
        sidebar: [
            ['/', '主页'],
            {
                title: '课程章节',
                collapsable: false,
                children: [
                    ['/ch0', '第0章 开发高质量的软件系统']
                ]
            },
            {
                title: '实验',
                collapsable: false,
                children: [
                    ['/lab1', '实验1 基础 Java 编程和测试']
                ]
            }
        ],
        lastUpdated: 'Last Updated'
    }
}