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
        "面向对象"
      ],
      "/docs/javaScript/": [
        "",
        "测试"
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
  }
}