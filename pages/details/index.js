var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        shopppingDetails: {
            'title': '日本花王Merries妙而舒纸尿裤 S82片/包',
            'reason': '日本原装进口腰贴式纸尿裤，温柔呵护宝宝娇嫩的小屁屁。点状设计，透气性更强；凹凸构造与防漏护围，紧紧锁定软便稀便不侧漏。备受亚洲妈妈青睐。新旧包装随机发'
        }
    },

    onLoad: function(options) {

        /*var that = this
        
        // 商品详情
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/inqgoods?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data.data);
                that.data.shopppingDetails = res.data.data;

                var goodsPicsInfo = [];
                var goodsPicsObj = {};
                var goodspic = res.data.data.goodspics;
                var goodspics = goodspic.substring(0, goodspic.length - 1);
                var goodspicsArr = goodspics.split("#");
                for (var i = 0; i < goodspicsArr.length; i++) {
                    goodsPicsInfo.push({
                        "picurl": goodspicsArr[i]
                    });
                }
                that.setData({
                    goodsPicsInfo: goodsPicsInfo
                })
            }
        })*/

        this.setData({
            goodsPicsInfo: [
                {picurl: 'http://image.huanqiuxiaozhen.com/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85/2017_3_21_1490082693869'},
                {picurl: 'http://image.huanqiuxiaozhen.com/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85/2017_3_21_1490082697446'}
            ]
        });

    }
})
