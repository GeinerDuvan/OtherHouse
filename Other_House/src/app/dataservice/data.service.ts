import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

import { Usuarios } from "./usuarios";

@Injectable()
export class dataService{
    userUrl:string = "http://127.0.0.1:8000/usuarios";

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get(this.userUrl);}
    getById(id:any){
        return this.http.get(this.userUrl+"/"+id);}

    register(inputdata:Usuarios): Observable<any>{
        return this.http.post(this.userUrl, inputdata);
    }
    updateUser(code:any, inputdata:any){
        return this.http.put(this.userUrl+"/"+code, inputdata);
    }


}

