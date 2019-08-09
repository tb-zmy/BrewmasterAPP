const Mock = require("mockjs");

var data = Mock.mock("/goods/goodslist",{
    "data|10":[
        {
          "id|+1":0,
          "goodsName":"@ctitle(10, 20)",
          "goodsPrice|+15":200,
          "goodsImg":"@image('80x80', '#c33')",
          "num":1
        }
    ]
})



Mock.mock(/\goods\/goodsList/,"get",function(options){
    console.log(options);
    return data.data
})
