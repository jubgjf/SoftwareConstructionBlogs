module.exports = {
    base: '/SoftwareConstructionBlogs/',
    title: 'Guan Jiannan 的软件构造博客',
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {
                text: '外部导航',
                items: [
                    {text: 'MIT 软件构造', link: 'http://web.mit.edu/6.031/www/fa20/'},
                    {text: 'Piazza', link: 'https://piazza.com/'}
                ]
            }
        ],
        sidebar: [
            {
                title: '零散文章',
                children: [
                    ['/deploy_method', '博客部署方式']
                ]
            }
        ],
        lastUpdated: 'Last Updated',
    }
}