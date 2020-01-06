'use strict';

const Controller = require('egg').Controller;
var jwt = require('jsonwebtoken');

class HomeController extends Controller {
  async shopcarjia() //+++++
  {
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.shopcarjia(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  
  async shopcarjian() //---
  {
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.shopcarjian(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  async changeallflag() //购物车单选状况
  {
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.changeallflag(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  
  async changeflag() //购物车单选状况
  {
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.changeflag(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  
  async postshopcar() //购物车的数据请求
  {
    const { ctx } = this;
    const arr=await ctx.service.user.postshopcar() 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  async addshopcar() //购物车的添加
  {
    
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.addshopcar(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  
  async placelist() //获取右边图文结构
  {
    
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.placelist(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  async rightlist() //获取右边的数据
  {
    
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.rightlist(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  async leftli() //三级列表
  {
    
    const { ctx } = this;
    const arr=await ctx.service.user.leftli() 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }

  async threetab() //三级列表
  {
    
    const { ctx } = this;
    const arr=await ctx.service.user.threeTab() 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }

  async tablist() //tablist数据
  {
    
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.tablist(bodys) 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }

  async homeclassify() //横面轮播图
  {
    
    const { ctx } = this;
    const arr=await ctx.service.user.homeclassify() 
    if(arr)
    {
      ctx.body =arr 
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }


  async address() //添加取货地址
  {
    
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.address(bodys) 
    if(arr)
    {
      ctx.body =arr
      
    }
    else{
      ctx.body ={
        code:0
      }
    }
  }
  async login() { 
    const { ctx } = this;
    const bodys=ctx.request.body
    const arr=await ctx.service.user.login(bodys) 
    if(arr)
    {
      ctx.body =arr
      
    }
    else{
      ctx.body ={
        code:0
      }
    }
   
  }
  // 返回验证码
  async testing() { 
    const { ctx } = this;
    let arr=""
    for(var i=0; i<6;i++)
    {
      arr+=Math.floor(Math.random()*9)
    }
    ctx.session.yanzhengma=arr
    if(arr)
    {
      ctx.body ={
        data:arr,
        code:1
      }
    }
    else{
      ctx.body ={
        code:0
      }
    }
   
  }

}

module.exports = HomeController;
