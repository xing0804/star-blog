module.exports = {
  "title": "star-blog",
  "description": "for my blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/myAvatar.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/xing0804",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "subSidebar": 'auto',
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "api"
      ],
      "/docs/typeScript/": [
        "",
        "快速入门",
        "面向对象",
        "细化知识点",
        "细化知识点2",
        "TS类型工具"
      ],
      "/docs/javaScript/": [
        "",
        {
          title: '基础语法',
          collapsable: true,
          children: [
            "基础语法/数组方法",
            "基础语法/字符串方法"
          ]
        },
        {
          title: '常用方法总结',
          collapsable: true,
          children: [
            "常用方法/js在工作中常用的几个方法"
          ]
        }
      ],
      "/docs/node/": [
        "",
        "基础内容",
        "Express"
      ],
      "/docs/项目/": [
        ""
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "Vue",
        "desc": "渐进式JavaScript框架",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://cn.vuejs.org/"
      }
    ],
    "logo": "/myAvatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wyx",
    "authorAvatar": "/myAvatar.png",
    "record": "xxxx",
    "startYear": "2023"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      require('./plugins/BgMusic'),
      {
        audios: [
          {
            name: '晴天',
            artist: '周杰伦',
            url: '/晴天-周杰伦.128.mp3',
            cover: '/晴天.webp'
          },
          {
            name: '这，就是爱',
            artist: '张杰',
            url: '/这，就是爱-张杰.128.mp3',
            cover: '/这就是爱.jpg'
          },
          {
            name: '千里万里',
            artist: '艾热AIR',
            url: '/千里万里-艾热AIR.mp3',
            cover: '/千里万里.webp'
          }
        ]
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
  ]
}