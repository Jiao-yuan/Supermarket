'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.home.login);
  router.get('/testing', controller.home.testing);
  router.post('/address', controller.home.address);
  router.get('/homeclassify', controller.home.homeclassify);
  router.post('/tablist', controller.home.tablist);//tablis的数据
  router.get('/threetab', controller.home.threetab);
  router.get('/leftli', controller.home.leftli);
  router.post('/rightlist', controller.home.rightlist);//tablis的数据
  router.post('/placelist', controller.home.placelist);//当前右边的图文数据的数据
  router.post('/addshopcar', controller.home.addshopcar);//购物车的添加
  router.post('/postshopcar', controller.home.postshopcar);//请求购物车的数据
  
  router.post('/changeflag', controller.home.changeflag);//改变购物车的单选状况
  router.post('/changeallflag', controller.home.changeallflag);//改变全部的购物车单选状态
  
  router.post('/shopcarjian', controller.home.shopcarjian);
  router.post('/shopcarjia', controller.home.shopcarjia);//+-
  
};
