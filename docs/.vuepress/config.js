module.exports = {
    base: '/SoftwareConstructionBlogs/',
    title: 'Guan Jiannan 的软件构造博客',
    plugins: {
        '@maginapp/vuepress-plugin-katex': {
            delimiters: 'dollars'
        }
    },
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
                    ['/ch0', '第0章 开发高质量的软件系统'],
                    ['/ch2', '第2章 软件测试与测试优先的编程']
                ]
            },
            {
                title: '实验',
                collapsable: false,
                children: [
                    ['/lab1', '实验1 基础 Java 编程和测试'],
                    ['/lab2', '实验2 ADT 和 OOP'],
                ]
            }
        ],
        lastUpdated: '最后更新时间'
    }
}