"use strict";(self["webpackChunkaudiofree"]=self["webpackChunkaudiofree"]||[]).push([[303],{6303:function(t,e,a){a.r(e),a.d(e,{default:function(){return G}});var c=a(3396),o=a(9242),r=a(7139);const s={class:"cart-page"},i={class:"cart-page__container container"},l={class:"page-title"},n={class:"page-title__links"},_=(0,c.Uk)("Главная"),d=(0,c.Uk)("Корзина"),u=(0,c._)("div",{class:"page-title__title"},"Корзина",-1),m={class:"cart-page__body"},p={class:"cart-list"},v={key:0,class:"cart-list__titles ctlt-titles"},g=(0,c.uE)('<div class="cart-list__title ctlt-titles__image"></div><div class="cart-list__title ctlt-titles__name">Название товара:</div><div class="cart-list__title ctlt-titles__price">Цена за штуку:</div><div class="cart-list__title ctlt-titles__amount">Количество:</div><div class="cart-list__title ctlt-titles__total">Сумма:</div><div class="cart-list__title ctlt-titles__cancel"></div>',6),k=[g],h={key:0,class:"__isempty"},y=(0,c.Uk)(" Корзина пуста. "),w=(0,c.Uk)("Подобрать что-нибудь"),C={class:"ctlt-item__image ctlt-item__item"},f=["src"],P={class:"ctlt-item__name ctlt-item__item"},b={class:"ctlt-item__price ctlt-item__item"},I=(0,c._)("div",{class:"cart-list__title"},"Цена за штуку:",-1),S={class:"ctlt-item__amount ctlt-item__item controls"},x={class:"controls__amount"},Y=["onClick"],E={class:"controls__amount--number"},W=["value","onInput"],D=["onClick"],T={class:"ctlt-item__total ctlt-item__item"},U=(0,c._)("div",{class:"cart-list__title cart-list__title--colored"},"Итого:",-1),N=["onClick"],q=(0,c._)("div",{class:"ctlt-item__cancel--icon __icon-cancel"},null,-1),z=[q],R=(0,c.uE)('<div class="cart-page__coupon"><p>Введите Ваш код купона, если он у вас есть:</p><form class="text-input"><div class="text-input__text"><input type="text" placeholder="Введите код"></div><button class="text-input__submit"><input type="button" value="Активировать"></button></form></div>',1),A={class:"cart-total"},L=(0,c._)("div",{class:"cart-total__text"},"Сумма заказа:",-1),j={key:0,class:"cart-total__number"},F=(0,c.Uk)("Оформить заказ");function $(t,e,a,g,q,$){const H=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("main",s,[(0,c._)("div",i,[(0,c._)("section",l,[(0,c._)("div",n,[(0,c.Wm)(H,{to:{name:"home"},class:"page-title__arrow-back __icon-back-arrow"}),(0,c.Wm)(H,{to:{name:"home"},class:"page-title__link-back"},{default:(0,c.w5)((()=>[_])),_:1}),(0,c.Wm)(H,{to:{name:$.cartType},class:"page-title__link-back"},{default:(0,c.w5)((()=>[d])),_:1},8,["to"])]),u]),(0,c._)("section",m,[(0,c._)("div",p,[$.cartIsEmpty?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("div",v,k)),(0,c.Wm)(o.W3,{name:"cart-list",tag:"div",class:"cart-list__container"},{default:(0,c.w5)((()=>[$.cartIsEmpty?((0,c.wg)(),(0,c.iD)("div",h,[y,(0,c.Wm)(H,{to:"/catalogue"},{default:(0,c.w5)((()=>[w])),_:1})])):(0,c.kq)("",!0),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(q.cartProducts,(t=>((0,c.wg)(),(0,c.iD)("div",{class:"cart-list__item ctlt-item",key:t.id},[(0,c._)("div",C,[(0,c.Wm)(H,{to:"/products/"+t.vendorCode},{default:(0,c.w5)((()=>[(0,c._)("img",{src:"/img/products/"+$.getProd(t.vendorCode).images[0],alt:""},null,8,f)])),_:2},1032,["to"])]),(0,c._)("div",P,[(0,c.Wm)(H,{to:"/products/"+t.vendorCode},{default:(0,c.w5)((()=>[(0,c.Uk)((0,r.zw)($.getProd(t.vendorCode).name)+" ("+(0,r.zw)(t.color.toLowerCase())+")",1)])),_:2},1032,["to"])]),(0,c._)("div",b,[I,(0,c._)("p",null,(0,r.zw)($.getProd(t.vendorCode).price.toLocaleString())+" ₽",1)]),(0,c._)("div",S,[(0,c._)("div",x,[(0,c._)("div",{class:"controls__amount--less controls__amount-button __icon-back-arrow",onClick:e=>$.changeAmount(e,"less",t.id)},null,8,Y),(0,c._)("div",E,[(0,c._)("input",{type:"text",value:t.amount,maxlength:"2",onInput:e=>$.changeAmount(e,"typing",t.id)},null,40,W)]),(0,c._)("div",{class:"controls__amount--more controls__amount-button __icon-next-arrow",onClick:e=>$.changeAmount(e,"more",t.id)},null,8,D)])]),(0,c._)("div",T,[U,(0,c._)("p",null,(0,r.zw)(($.getProd(t.vendorCode).price*t.amount).toLocaleString())+" ₽",1)]),"cart"===$.cartType?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"ctlt-item__cancel ctlt-item__item",onClick:e=>$.removeFromCart(t.id,t)},z,8,N)):(0,c.kq)("",!0)])))),128))])),_:1})]),(0,c._)("div",{class:"cart-page__info",style:(0,r.j5)({display:$.cartIsEmpty?"none":""})},[R,(0,c._)("div",A,[L,$.totalPrice?((0,c.wg)(),(0,c.iD)("div",j,(0,r.zw)($.totalPrice.toLocaleString())+" ₽",1)):(0,c.kq)("",!0)])],4)]),(0,c._)("section",{class:"order-button",style:(0,r.j5)({display:$.cartIsEmpty?"none":""})},[(0,c.Wm)(H,{to:{name:q.orderRouteName},class:"button button--colored-bg"},{default:(0,c.w5)((()=>[F])),_:1},8,["to"])],4)])])}var H=a(268),K=a(65),O={name:"CartPage",data(){return{cartProducts:[],orderRouteName:"order"}},computed:{...(0,K.Se)(["products"]),cartType(){switch(this.$route.name){case"cart":return this.orderRouteName="order","cart";case"cart-oneclick":return this.orderRouteName="order-oneclick","cart-oneclick"}},cartIsEmpty(){return this.cartProducts.length<1},totalPrice(){let t=0;return this.cartProducts.forEach((e=>{const a=this.getProd(e.vendorCode);a&&(t+=a.price*e.amount)})),t}},methods:{...(0,K.OI)(["addNotification"]),getProd:H.UR,getStorageCartProducts(){switch(this.cartType){case"cart-oneclick":this.cartProducts=H.IY.getStorage(H.IY.keys["cart-oneclick"]).filter((t=>t&&t.vendorCode))||[];break;case"cart":this.cartProducts=H.IY.getStorage(H.IY.keys.cart).filter((t=>t&&t.vendorCode))||[];break}},changeAmount(t,e,a){const c=t.target.closest(".controls__amount").querySelector("input[type='text']"),o=(0,H.rh)(c,e);this.cartProducts.forEach((t=>(t.id===a&&(t.amount=parseInt(o)),t)))},removeFromCart(t,e){let a;this.cartProducts=this.cartProducts.filter(((e,c)=>e.id!==t||(a=c,!1))),this.addNotification({message:[`Товар ${this.products[e.vendorCode].name} убран из корзины.`,{node:'<span class="link-cancel">Отменить</span>',handler:()=>this.returnToCart(e,a)}],timetolive:3500})},returnToCart(t,e){const a=H.IY.keys.cart,c=H.IY.getStorage(a);c.splice(e,0,t),H.IY.setStorage(a,c),this.getStorageCartProducts()}},watch:{cartProducts:{handler(){H.IY.setStorage(H.IY.keys[this.cartType],this.cartProducts)},deep:!0}},created(){this.getStorageCartProducts()}},Z=a(89);const B=(0,Z.Z)(O,[["render",$]]);var G=B}}]);
//# sourceMappingURL=303.47b2d4a0.js.map