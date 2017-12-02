App.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.dispose = {
        //购物车中的物品
        cartArr: [],
        //商品的类
        categoryArr: [],
        // 选中的商品
        selectedArr:[]
    };

    //数据
    $scope.data = [
        {
            "id": 1,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/01.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 2,
            "type": "上衣",
            "price": 32,
            "imageSrc": "images/clothes/02.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 3,
            "type": "上衣",
            "price": 129,
            "imageSrc": "images/clothes/03.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 4,
            "type": "上衣",
            "price": 299,
            "imageSrc": "images/clothes/04.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 5,
            "type": "上衣",
            "price": 99,
            "imageSrc": "images/clothes/05.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 6,
            "type": "上衣",
            "price": 168,
            "imageSrc": "images/clothes/06.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 7,
            "type": "上衣",
            "price": 399,
            "imageSrc": "images/clothes/07.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 8,
            "type": "上衣",
            "price": 139,
            "imageSrc": "images/clothes/08.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 9,
            "type": "上衣",
            "price": 99,
            "imageSrc": "images/clothes/09.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 10,
            "type": "上衣",
            "price": 499,
            "imageSrc": "images/clothes/10.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 11,
            "type": "上衣",
            "price": 999,
            "imageSrc": "images/clothes/11.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 12,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/12.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 13,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/13.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 14,
            "type": "上衣",
            "price": 119,
            "imageSrc": "images/clothes/14.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 15,
            "type": "上衣",
            "price": 179,
            "imageSrc": "images/clothes/15.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 16,
            "type": "上衣",
            "price": 159,
            "imageSrc": "images/clothes/16.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 17,
            "type": "上衣",
            "price": 189,
            "imageSrc": "images/clothes/17.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 18,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/18.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 19,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/19.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 20,
            "type": "上衣",
            "price": 199,
            "imageSrc": "images/clothes/20.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 21,
            "type": "裙子",
            "price": 34.6,
            "imageSrc": "images/skirt/21.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 22,
            "type": "裙子",
            "price": 19.9,
            "imageSrc": "images/skirt/22.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 23,
            "type": "裙子",
            "price": 28.6,
            "imageSrc": "images/skirt/23.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 24,
            "type": "裙子",
            "price": 66.8,
            "imageSrc": "images/skirt/24.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 25,
            "type": "裙子",
            "price": 64,
            "imageSrc": "images/skirt/25.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 26,
            "type": "裙子",
            "price": 109,
            "imageSrc": "images/skirt/26.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 27,
            "type": "裙子",
            "price": 69.5,
            "imageSrc": "images/skirt/27.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 28,
            "type": "裙子",
            "price": 77.8,
            "imageSrc": "images/skirt/28.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 29,
            "type": "裙子",
            "price": 156,
            "imageSrc": "images/skirt/29.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 30,
            "type": "裙子",
            "price": 87.9,
            "imageSrc": "images/skirt/30.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 31,
            "type": "裙子",
            "price": 66.7,
            "imageSrc": "images/skirt/31.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 32,
            "type": "裙子",
            "price": 67.9,
            "imageSrc": "images/skirt/32.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 33,
            "type": "裙子",
            "price": 22.7,
            "imageSrc": "images/skirt/33.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 34,
            "type": "裙子",
            "price": 24.5,
            "imageSrc": "images/skirt/34.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 35,
            "type": "裙子",
            "price": 22,
            "imageSrc": "images/skirt/35.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 36,
            "type": "裙子",
            "price": 67,
            "imageSrc": "images/skirt/36.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 37,
            "type": "裙子",
            "price": 44.7,
            "imageSrc": "images/skirt/37.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 38,
            "type": "裙子",
            "price": 64,
            "imageSrc": "images/skirt/38.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 39,
            "type": "裙子",
            "price": 54.8,
            "imageSrc": "images/skirt/39.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 40,
            "type": "裙子",
            "price": 33,
            "imageSrc": "images/skirt/40.jpg",
            "count": 1,
            "description": "秋冬新款毛呢半身裙女韩版拼接腰带A字裙单排扣口袋高腰A字裙"
        },
        {
            "id": 41,
            "type": "裤子",
            "price": 99,
            "imageSrc": "images/pants/41.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 42,
            "type": "裤子",
            "price": 19.9,
            "imageSrc": "images/pants/42.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 43,
            "type": "裤子",
            "price": 25.8,
            "imageSrc": "images/pants/43.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 44,
            "type": "裤子",
            "price": 129,
            "imageSrc": "images/pants/44.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 45,
            "type": "裤子",
            "price": 159,
            "imageSrc": "images/pants/45.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 46,
            "type": "裤子",
            "price": 45.8,
            "imageSrc": "images/pants/46.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 47,
            "type": "裤子",
            "price": 156,
            "imageSrc": "images/pants/47.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 48,
            "type": "裤子",
            "price": 19.9,
            "imageSrc": "images/pants/48.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 49,
            "type": "裤子",
            "price": 436,
            "imageSrc": "images/pants/49.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 50,
            "type": "裤子",
            "price": 55,
            "imageSrc": "images/pants/50.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 51,
            "type": "裤子",
            "price": 331,
            "imageSrc": "images/pants/51.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 52,
            "type": "裤子",
            "price": 38.8,
            "imageSrc": "images/pants/52.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 53,
            "type": "裤子",
            "price": 168,
            "imageSrc": "images/pants/53.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 54,
            "type": "裤子",
            "price": 15.8,
            "imageSrc": "images/pants/54.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 55,
            "type": "裤子",
            "price": 128,
            "imageSrc": "images/pants/55.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 56,
            "type": "裤子",
            "price": 145,
            "imageSrc": "images/pants/56.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 57,
            "type": "裤子",
            "price": 88,
            "imageSrc": "images/pants/57.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 58,
            "type": "裤子",
            "price": 125,
            "imageSrc": "images/pants/58.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 59,
            "type": "裤子",
            "price": 133.6,
            "imageSrc": "images/pants/59.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },
        {
            "id": 60,
            "type": "裤子",
            "price": 45.6,
            "imageSrc": "images/pants/60.jpg",
            "count": 1,
            "description": "秋冬新款韩版弹力显瘦高腰外穿打底裤女加厚加绒黑色百搭九分裤"
        },

        {
            "id": 61,
            "type": "女鞋",
            "price": 98,
            "imageSrc": "images/girlShoes/shoe1.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 62,
            "type": "女鞋",
            "price": 47,
            "imageSrc": "images/girlShoes/shoe2.jpg",
            "count": 1,
            "description": "images/2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 63,
            "type": "女鞋",
            "price": 56,
            "imageSrc": "images/girlShoes/shoe3.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 64,
            "type": "女鞋",
            "price": 49,
            "imageSrc": "images/girlShoes/shoe4.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 65,
            "type": "女鞋",
            "price": 45,
            "imageSrc": "images/girlShoes/shoe5.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 66,
            "type": "女鞋",
            "price": 45,
            "imageSrc": "images/girlShoes/shoe6.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 67,
            "type": "女鞋",
            "price": 47,
            "imageSrc": "images/girlShoes/shoe7.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 68,
            "type": "女鞋",
            "price": 47,
            "imageSrc": "images/girlShoes/shoe8.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 69,
            "type": "女鞋",
            "price": 49,
            "imageSrc": "images/girlShoes/shoe9.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 70,
            "type": "女鞋",
            "price": 84,
            "imageSrc": "images/girlShoes/shoe10.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 71,
            "type": "女鞋",
            "price": 84,
            "imageSrc": "images/girlShoes/shoe11.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 72,
            "type": "女鞋",
            "price": 84,
            "imageSrc": "images/girlShoes/shoe12.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 73,
            "type": "女鞋",
            "price": 88,
            "imageSrc": "images/girlShoes/shoe13.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 74,
            "type": "女鞋",
            "price": 89,
            "imageSrc": "images/girlShoes/shoe14.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 75,
            "type": "女鞋",
            "price": 120,
            "imageSrc": "images/girlShoes/shoe15.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 76,
            "type": "女鞋",
            "price": 129,
            "imageSrc": "images/girlShoes/shoe16.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 77,
            "type": "女鞋",
            "price": 134,
            "imageSrc": "images/girlShoes/shoe17.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 78,
            "type": "女鞋",
            "price": 156,
            "imageSrc": "images/girlShoes/shoe18.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 79,
            "type": "女鞋",
            "price": 178,
            "imageSrc": "images/girlShoes/shoe19.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 80,
            "type": "女鞋",
            "price": 345,
            "imageSrc": "images/girlShoes/shoe20.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 81,
            "type": "包包",
            "price": 34,
            "imageSrc": "images/bags/1.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 82,
            "type": "包包",
            "price": 36,
            "imageSrc": "images/bags/2.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 83,
            "type": "包包",
            "price": 88,
            "imageSrc": "images/bags/3.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 84,
            "type": "包包",
            "price": 56,
            "imageSrc": "images/bags/4.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 85,
            "type": "包包",
            "price": 34,
            "imageSrc": "images/bags/5.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 86,
            "type": "包包",
            "price": 34,
            "imageSrc": "images/bags/6.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 87,
            "type": "包包",
            "price": 55,
            "imageSrc": "images/bags/7.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 88,
            "type": "包包",
            "price": 123,
            "imageSrc": "images/bags/8.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 89,
            "type": "包包",
            "price": 345,
            "imageSrc": "images/bags/9.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 90,
            "type": "包包",
            "price": 342,
            "imageSrc": "images/bags/10.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 91,
            "type": "包包",
            "price": 314,
            "imageSrc": "images/bags/11.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 92,
            "type": "包包",
            "price": 234,
            "imageSrc": "images/bags/12.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 93,
            "type": "包包",
            "price": 341,
            "imageSrc": "images/bags/13.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 94,
            "type": "包包",
            "price": 267,
            "imageSrc": "images/bags/14.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 95,
            "type": "包包",
            "price": 349,
            "imageSrc": "images/bags/15.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 96,
            "type": "包包",
            "price": 134,
            "imageSrc": "images/bags/16.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 97,
            "type": "包包",
            "price": 572,
            "imageSrc": "images/bags/17.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 98,
            "type": "包包",
            "price": 34,
            "imageSrc": "images/bags/18.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 99,
            "type": "包包",
            "price": 314,
            "imageSrc": "images/bags/19.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 100,
            "type": "包包",
            "price": 347,
            "imageSrc": "images/bags/10.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 101,
            "type": "配饰",
            "price": 66,
            "imageSrc": "images/accessorize/accessorize1.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 102,
            "type": "配饰",
            "price": 313,
            "imageSrc": "images/accessorize/accessorize2.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 103,
            "type": "配饰",
            "price": 311,
            "imageSrc": "images/accessorize/accessorize3.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 104,
            "type": "配饰",
            "price": 312,
            "imageSrc": "images/accessorize/accessorize4.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 105,
            "type": "配饰",
            "price": 32,
            "imageSrc": "images/accessorize/accessorize5.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 106,
            "type": "配饰",
            "price": 3332,
            "imageSrc": "images/accessorize/accessorize6.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 107,
            "type": "配饰",
            "price": 333,
            "imageSrc": "images/accessorize/accessorize7.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 108,
            "type": "配饰",
            "price": 323,
            "imageSrc": "images/accessorize/accessorize8.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 109,
            "type": "配饰",
            "price": 288,
            "imageSrc": "images/accessorize/accessorize9.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 110,
            "type": "配饰",
            "price": 321,
            "imageSrc": "images/accessorize/accessorize10.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 112,
            "type": "配饰",
            "price": 332,
            "imageSrc": "images/accessorize/accessorize12.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 113,
            "type": "配饰",
            "price": 343,
            "imageSrc": "images/accessorize/accessorize13.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 114,
            "type": "配饰",
            "price": 888,
            "imageSrc": "images/accessorize/accessorize14.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 115,
            "type": "配饰",
            "price": 222,
            "imageSrc": "images/accessorize/accessorize15.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 116,
            "type": "配饰",
            "price": 325,
            "imageSrc": "images/accessorize/accessorize16.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 117,
            "type": "配饰",
            "price": 299,
            "imageSrc": "images/accessorize/accessorize17.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 118,
            "type": "配饰",
            "price": 314,
            "imageSrc": "images/accessorize/accessorize18.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 119,
            "type": "配饰",
            "price": 345,
            "imageSrc": "images/accessorize/accessorize19.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },
        {
            "id": 120,
            "type": "配饰",
            "price": 37,
            "imageSrc": "images/accessorize/accessorize20.jpg",
            "count": 1,
            "description": "2017新品波点腰带修身显瘦羽绒服"
        },

        {
            "id": 121,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/1.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 122,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/2.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 123,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/3.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 124,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/4.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 125,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/5.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 126,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/6.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 127,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/7.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 128,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/8.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 129,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/9.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 130,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/10.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 131,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/11.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 132,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/12.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 133,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/13.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 134,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/14.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 135,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/15.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 136,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/16.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 137,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/17.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 138,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/18.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 139,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/19.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 140,
            "type": "美妆",
            "price": 188,
            "imageSrc": "images/makeups/20.jpg",
            "count": 1,
            "description": "2017最受女性欢迎的高级化妆品"
        },
        {
            "id": 141,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/1.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 142,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/2.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 143,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/3.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 144,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/4.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 145,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/5.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 146,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/6.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 147,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/7.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 148,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/8.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 149,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/9.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 150,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/10.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 151,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/11.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 152,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/12.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 153,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/13.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 154,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/14.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 155,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/15.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 156,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/16.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 157,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/17.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 158,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/18.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 159,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/19.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 160,
            "type": "男友",
            "price": 148,
            "imageSrc": "images/Boyfriend/20.jpg",
            "count": 1,
            "description": "2017最受男性喜欢的男士服装"
        },
        {
            "id": 161,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/1.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 162,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/2.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 163,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/3.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 164,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/4.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 165,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/5.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 166,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/6.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 167,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/7.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 168,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/8.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 169,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/9.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 170,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/10.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 171,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/11.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 172,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/12.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 173,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/13.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 174,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/14.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 175,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/15.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 176,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/16.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 177,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/17.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 178,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/18.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 179,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/19.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id": 180,
            "type": "童装",
            "price": 88,
            "imageSrc": "images/Children's wear/20.jpg",
            "count": 1,
            "description": "2017最受孩子喜欢的童装"
        },
        {
            "id":181,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/1.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":182,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/2.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":183,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/3.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":184,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/4.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":185,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/5.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":186,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/6.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":187,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/7.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":188,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/8.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":189,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/9.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":190,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/10.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":191,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/11.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":192,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/12.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":193,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/13.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":194,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/14.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":195,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/15.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":196,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/16.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":197,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/17.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":198,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/18.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":199,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/19.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        },
        {
            "id":200,
            "type":"家居",
            "price":68,
            "imageSrc":"images/Household/20.jpg",
            "count":1,
            "description":"2017最受用户喜欢的家居大全"
        }

    ];
    // $scope.myPagingFunction = function () {
    //     var index = Math.round(Math.random()*$scope.data.length-1);
    //     var newData = $scope.data[index];
    //     $scope.data.push(
    //         newData
    //     );
    //     console.log(newData);
    // }
}]);