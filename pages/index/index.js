import defaultData from '../../data';
//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: true // loading
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             images: res.data
        //         })
        //     }
        // })
        

        //venuesList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             venuesItems: res.data.data
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })

        //choiceList
        // wx.request({
        //     url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
        //     method: 'GET',
        //     data: {},
        //     header: {
        //         'Accept': 'application/json'
        //     },
        //     success: function(res) {
        //         that.setData({
        //             choiceItems: res.data.data.dataList
        //         })
        //         setTimeout(function () {
        //             that.setData({
        //                 loadingHidden: true
        //             })
        //         }, 1500)
        //     }
        // })



        const images = [ // index
            {
                "name": "驱蚊防晒",
                "picurl": "http://www.chenqiaodonghu.com/japanshopping_images/首页滚动/2017_5_19_1495174386313.png"
            },
            {
                "name": "520",
                "picurl": "http://www.chenqiaodonghu.com/japanshopping_images/首页滚动/2017_5_19_1495174115476.png"
            },
            {
                "name": "清仓",
                "picurl": "http://www.chenqiaodonghu.com/japanshopping_images/首页滚动/2017_5_31_1496196399668.png"
            },
            {
                "name": "围兜",
                "picurl": "http://www.chenqiaodonghu.com/japanshopping_images/首页滚动/2016_9_18_1474194498240.png"
            },
            {
                "name": "绘本",
                "picurl": "http://www.chenqiaodonghu.com/japanshopping_images/首页滚动/2016_9_18_1474194376998.png"
            }
        ];

        const venuesItems = [ // index
            {
                "id": 25,
                "name": "宝宝奶粉",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494917892270.png",
                "typeid": 1,
                "rid": 13,
                "parentdesc": "宝宝奶粉"
            }, {
                "id": 26,
                "name": "纸尿裤",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494917926060.png",
                "typeid": 2,
                "rid": 14,
                "parentdesc": "纸尿裤"
            }, {
                "id": 27,
                "name": "辅食营养",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494926657165.png",
                "typeid": 3,
                "rid": 15,
                "parentdesc": "辅食营养"
            }, {
                "id": 28,
                "name": "母婴专区",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494926955020.png",
                "typeid": 4,
                "rid": 16,
                "parentdesc": "母婴专区"
            }, {
                "id": 29,
                "name": "护肤美体",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494918074908.png",
                "typeid": 5,
                "rid": 17,
                "parentdesc": "护肤美体"
            }, {
                "id": 30,
                "name": "营养保健",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494918103781.png",
                "typeid": 6,
                "rid": 18,
                "parentdesc": "营养保健"
            }, {
                "id": 31,
                "name": "居家日用",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494918145717.png",
                "typeid": 7,
                "rid": 19,
                "parentdesc": "居家日用"
            }, {
                "id": 32,
                "name": "进口美食",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494926788254.png",
                "typeid": 8,
                "rid": 20,
                "parentdesc": "进口美食"
            }, {
                "id": 33,
                "name": "香港直邮",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494926620046.png",
                "typeid": 9,
                "rid": 21,
                "parentdesc": "轻奢女装"
            }, {
                "id": 34,
                "name": "服饰箱包",
                "slogan": "",
                "smallpic": "http://www.chenqiaodonghu.com/japanshopping_images/精品推荐/2017_5_16_1494926633881.png",
                "typeid": 11,
                "rid": 22,
                "parentdesc": "时尚箱包"
            }
        ];
        this.setData({
            images: images
        });
        this.setData({
            venuesItems: venuesItems
        });

    }
})
