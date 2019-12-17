module.exports = {
    // 网站 Title
    title: '维维博客',

    // 网站描述
    description: '维维的记录',

    // 网站语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    // 使用的主题
    theme: 'meteorlxy',

    // 主题配置
    themeConfig: {
        // 主题语言，参考下方 [主题语言] 章节
        lang: 'zh-CN',

        // 个人信息（没有或不想设置的，删掉对应字段即可）
        personalInfo: {
            // 昵称
            nickname: '维维',

            // 个人简介 (支持 HTML)
            // description: 'Happy Coding<br/>Happy Life',

            // 电子邮箱
            // email: 'meteor.lxy@foxmail.com',

            // 所在地
            // location: '中国广州',

            // 组织
            // organization: 'Xi\'an Jiao Tong University',

            // 头像
            // 设置为外部链接
            avatar: 'https://www.gravatar.com/avatar/02b5f1b27916fd86563bb1d9c5e67656?s=200',
            // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
            // avatar: '/img/avatar.jpg',


            // 社交平台帐号信息
            sns: {
                // Github 帐号和链接
                github: {
                    account: 'LiangWei88',
                    link: 'https://github.com/LiangWei88',
                },

                // Facebook 帐号和链接
                // facebook: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.facebook.com/meteorlxy.cn',
                // },

                // LinkedIn 帐号和链接
                // linkedin: {
                //     account: 'meteorlxy',
                //     link: 'http://www.linkedin.com/in/meteorlxy',
                // },

                // Twitter 帐号和链接
                // twitter: {
                //     account: 'meteorlxy_cn',
                //     link: 'https://twitter.com/meteorlxy_cn',
                // },

                // 新浪微博 帐号和链接
                // weibo: {
                //     account: '@焦炭君_Meteor',
                //     link: 'https://weibo.com/u/2039655434',
                // },

                // 知乎 帐号和链接
                // zhihu: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.zhihu.com/people/meteorlxy.cn',
                // },

                // 豆瓣 帐号和链接
                // douban: {
                //     account: '159342708',
                //     link: 'https://www.douban.com/people/159342708',
                // },

                // Reddit 帐号和链接
                // reddit: {
                //     account: 'meteorlxy',
                //     link: 'https://www.reddit.com/user/meteorlxy',
                // },

                // Medium 帐号和链接
                // medium: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://medium.com/@meteorlxy.cn',
                // },

                // Instagram 帐号和链接
                // instagram: {
                //     account: 'meteorlxy.cn',
                //     link: 'https://www.instagram.com/meteorlxy.cn',
                // },

                // GitLab 帐号和链接
                // gitlab: {
                //     account: 'meteorlxy',
                //     link: 'https://gitlab.com/meteorlxy',
                // },

                // Bitbucket 帐号和链接
                // bitbucket: {
                //     account: 'meteorlxy',
                //     link: 'https://bitbucket.org/meteorlxy',
                // },

                // Docker Hub 帐号和链接
                // docker: {
                //     account: 'meteorlxy',
                //     link: 'https://hub.docker.com/u/meteorlxy',
                // },

                // CSDN 帐号和链接
                // csdn: {
                //     account: '',
                //     link: 'https://www.csdn.net/',
                // },

                // 掘金 帐号和链接
                // juejin: {
                //     account: 'meteorlxy',
                //     link: 'https://juejin.im/user/5c6fa9dde51d453fcb7baf09',
                // },
            },
        },

        // 上方 header 的相关设置 (可选)
        header: {
            // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            background: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                // url: '/assets/img/bg.jpg',

                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                useGeo: true,
            },

            // 是否在 header 显示标题
            showTitle: true,
        },

        // 底部 footer 的相关设置 (可选)
        footer: {
            // 是否显示 Powered by VuePress
            poweredBy: true,

            // 是否显示使用的主题
            poweredByTheme: true,

            // 添加自定义 footer (支持 HTML)
            custom: 'Copyright 2019-present <a href="http://liangwei.link" target="_blank">维维博客</a> | CC BY-NC-SA',
        },

        // 个人信息卡片相关设置 (可选)
        infoCard: {
            // 卡片 header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            headerBackground: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                // url: '/assets/img/bg.jpg',

                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                useGeo: true,
            },
        },

        // 是否显示文章的最近更新时间
        lastUpdated: true,

        // 顶部导航栏内容
        nav: [
            { text: '首页', link: '/', exact: true },
            { text: '文章', link: '/posts/', exact: false },
        ],

        // 评论配置，参考下方 [页面评论] 章节
        comments: {
            platform: 'gitee',
            owner: 'imyyliang',
            repo: 'blog',
            clientId: '7269efd3781ab67219ffc7f6efa40793ba26503165f490821dd77b4574a458b1',
            clientSecret: '35aa562d070fc274667f55c94c6a305ca0ba7023863201048ed1a1a687e4e589',
        },

        // 分页配置 (可选)
        pagination: {
            perPage: 5,
        },

        // 默认页面（可选，默认全为 true）
        defaultPages: {
            // 是否允许主题自动添加 Home 页面 (url: /)
            home: true,
            // 是否允许主题自动添加 Posts 页面 (url: /posts/)
            posts: true,
        },
    },
}