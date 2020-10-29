import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: Product[] = [
    { id:1, picture:"https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",description:"Black slub V-neck tee with embroidery pocket detail 100% Cotton",price:"145.00",name:"T-shirt"},
    { id:2, picture:"https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",description:"Soft jersey, crewneck tee. Graphic at chest",price:"499.00",name:"Jeans"},
    { id:3, picture:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",description:"TEAM ROYAL BLUE / FTWR WHITE / SIGNAL GREEN (FU8320)",price:"1120",name:"Adidas sneakers"},
    { id:4, picture:"https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",description:"Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.",price:"899",name:"Nike"},
    { id:5, picture:"https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80",description:"Soft jersey, crewneck tee. Graphic at chest",price:"699",name:"Levis"},
    { id:6, picture:"https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",description:"Padded Touch-Fastening Interior Dividers",price:"399",name:"Vinta bag"},
    { id:7, picture:"https://images.unsplash.com/photo-1596149615493-f0739de31c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",description:"Grey, Blue, Red, Brown, Pink, Green, Black",price:"599",name:"Pink leather handbag"},
    { id:8, picture:"https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",description:"Offering Women Denim Shorts, Ladies Denim Short",price:"169",name:"Short Jean" },
    { id:9, picture:"https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",description:"The Chuck Taylor All Star Classic celebrates the iconic high top silhouette ",price:"799",name:"All star" }

  ]

  getAllProduct(){
    return this.productList;
  }
}
