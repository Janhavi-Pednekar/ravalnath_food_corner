import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala baneer.",
      foodPrice:50,
      foodImg:"assets/img/paneer grilled sandwhich.jpg"
    },
    {
      id:2,
      foodName:"Vada Pav",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:20,
      foodImg:"assets/img/vada pav.jpg"
    },
    {
      id:3,
      foodName:"Pav Bhaji",
      foodDetails:"panner",
      foodPrice:120,
      foodImg:"assets/img/pav bhaji.jpg"
    },
    {
      id:4,
      foodName:"Puri Bhaji",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:80,
      foodImg:"assets/img/puri bhaji.jpg"
    },
    {
      id:5,
      foodName:"Veg Thali",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:100,
      foodImg:"assets/img/veg thali.jpg"
    },
    {
      id:6,
      foodName:"Chapati",
      foodDetails:"Oreo ice cream",
      foodPrice:10,
      foodImg:"assets/img/chapati.jpg"
    }
  ]


  

}
