import axios from 'axios';

export class Cart{

    private routes: any = {};

    constructor(routes: any){
        this.routes = routes;
    }
    
    public listItems(onSuccess: any) : void{
        axios.get(this.routes.index.uri)
            .then(onSuccess)
            .catch(error => console.log(error));
    }

    public addItem(onSuccess: any, onError: any, data: any) : void{
        axios.post(this.routes.store.uri, data)
            .then(onSuccess)
            .catch(error => onError(error));
    }
}