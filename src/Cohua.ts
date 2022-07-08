import { Cart } from "./Cart";
import { Stock } from "./Stock";

export class Cohua{
    private routes: any = {
        "products":{
            "index":{
                "uri": "/products",
                "type": "get"
            },
            "store":{
                "uri": "/products",
                "type": "post"
            },
            "show":{
                "uri": "/products/{id}",
                "type": "get"
            },
            "update":{
                "uri": "/products/{id}",
                "type": "put"
            },
            "destroy":{
                "uri": "/products/{id}",
                "type": "delete"
            }
        },
        "carts":{
            "index":{
                "uri": "/carts",
                "type": "get"
            },
            "store":{
                "uri": "/carts",
                "type": "post"
            },
            "show":{
                "uri": "/carts/{id}",
                "type": "get"
            },
            "destroy":{
                "uri": "/carts/{id}",
                "type": "delete"
            },
            "add_item":{
                "uri": "/carts/{id}/add-item",
                "type": "post"
            },
            "remove_item":{
                "uri": "/carts/{id}/remove-item/{product_id}",
                "type": "delete"
            },
            "single_item":{
                "uri": "/carts/{id}/single-item/{product_id}",
                "type": "get"
            }
        }
    
    };

    private cart = new Cart(this.routes.carts);
    private stock = new Stock(this.routes.products);
}