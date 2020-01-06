// app/service/user.js
const Service = require('egg').Service;
const nest=require("../utils/index")
const abc=require("../utils/flag")
const allabc=require("../utils/allflag")


class UserService extends Service {

  async find(uid) {
    const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    return user;
  }
  
  async shopcarjian(bodys)//--------
  {
    console.log(bodys)
    await this.app.mysql.update('shopcar', {   //点击购物车的时候添加上去
      id:bodys.id,
      num:bodys.num-1
    })
    const users = await this.app.mysql.delete('shopcar', {
      num: '0',
    });
     return users;
  }
  async shopcarjia(bodys)//+++++++、
  {
    const users = await this.app.mysql.update('shopcar', {   //点击购物车的时候添加上去
      id:bodys.id,
      num:bodys.num+1
    })
     return users;
  }

  
  async changeallflag(bodys)//改变全部购物车的单选框状态、
  {
    var arrall=[]
    const results = await this.app.mysql.select('shopcar');
    results.forEach((item)=>{arrall.push(item.id)})
    const users = await this.app.mysql.update('shopcar', {   //点击购物车的时候添加上去update table1 set field1=value1 where
      id:arrall,
      flag:allabc(bodys.flag)
    })
     return users;
  }
  

  async changeflag(bodys)//改变购物车的单选框状态、
  {
    const users = await this.app.mysql.update('shopcar', {   //点击购物车的时候添加上去
      id:bodys.item.id,
      flag:abc(bodys.item.flag)
    })
     return users;
  }

  async postshopcar()//
  {
    const users = await this.app.mysql.select('shopcar');
   var money=0;
   var newusers=users.filter((item)=>item.flag==1)
   newusers.forEach((item)=>{
    money=money+item.price*item.num
   })
   money=money.toFixed(2)
    return {users ,money};
    
  }

  
  async addshopcar(bodys)//获right数据
  {
    const users = await this.app.mysql.select('shopcar',{
      where: { classify_id:bodys.item.id},
    });
    if(users.length>0) //购物车有此类商品的时候
    {
       await this.app.mysql.update('shopcar', {   //点击购物车的时候添加上去
         id:users[0].id,
         num:users[0].num+1
       })
    }
    else{   //购物车没有此类商品时
      const addshopcar=await this.app.mysql.insert('shopcar',
            {
              name:bodys.item.name,
              cover:bodys.item.cover,
              images:bodys.item.images,
              price:bodys.item.price,
              oldPrice:bodys.item.oldPrice,
              count:bodys.item.count,
              classify_id:bodys.item.id,
              detail:bodys.item.detail,
              sales:bodys.item.sales
              
            }
      )
    }
    return users;
    
  }

  
  async placelist(bodys)//获right数据
  {
    const users = await this.app.mysql.select('classify');
    const newuser =nest(users)
    var num=newuser[bodys.leftnum].children[bodys.rightfrist].children[bodys.rightsecond].id
   
    const user = await this.app.mysql.select('product',{
      where:{classify_id:num}});
    // console.log(newuser)
    return user;
    
  }
  
  async rightlist(bodys)//获right数据
  {
    const users = await this.app.mysql.select('classify');
    const newuser =nest(users)
    let newnewuser= newuser[bodys.id-1].children
    return newnewuser;
    
  }

  async leftli()//获取left的list数据
  {
    const user = await this.app.mysql.select('classify',{
      where: { parent_id: 0}
    });
    return user
  }

  // 三级导航
  async threeTab() {
    const user = await this.app.mysql.select('classify');
    const newuser =nest(user)
    console.log(newuser)
    return newuser[0].children[0].children;
  }

  async tablist(bodys)//获取横面轮播图
  {
    const user = await this.app.mysql.select('product',{
      where:{id:bodys.num},
      limit: bodys.listnum

    });
    return user
  }

  async homeclassify()//获取横面轮播图
  {
    const user = await this.app.mysql.select('home_classify');
    return user
  }
  
  async address(bodys)
  {
    const user = await this.app.mysql.insert('address', {
      man:bodys.man,
      phone:bodys.phone,
      detailed:bodys.detailed,
      street:bodys.street,
      us_id:0
    });
    return user
  }
  async login(uid) {  //登录接口  判断是否登录  没有注册 
    if(this.ctx.session.yanzhengma==uid.texting)
    {
    const user = await this.app.mysql.get('user', {phone:uid.phone});
    if(user)
    {
      return {user,
            code:1,
            meg:"登录成功"
      }
    }
    else{
      const user = await this.app.mysql.insert('user', {phone:uid.phone })
      return {
          user,
          code:2,
          meg:"注册成功"
      }
    }
    }
    else{
      console.log(this.ctx.session.yanzhengma)
      console.log(uid.texting)
      return {
        code:0,
        meg:"验证码不正确"
      }
    }
    
  }
 
 
}

module.exports = UserService;