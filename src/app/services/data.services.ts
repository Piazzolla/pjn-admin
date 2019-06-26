import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { errorHandler } from '@angular/platform-browser/src/browser';
// import { Http2ServerRequest } from 'http2';

@Injectable()
export class DataService{

    
    public URL_DEPENDENCIA_ALL = "URL_DEPENDENCIA_ALL";
    public URL_DEPENDENCIA_ID = "URL_DEPENDENCIA_ID";
    public URL_AVISO_ALL = "URL_AVISO_ALL";
    public URL_AVISO_ID = "URL_AVISO_ID";
    public URL_AVISO_EDIT = "URL_AVISO_EDIT";
  

    https = [
        {name: "URL_DEPENDENCIA_ALL", url: "dependencia/all", httpOperation: "get"},
        {name: "URL_DEPENDENCIA_ID", url: "dependencia/%id%", httpOperation: "get"},
        {name: "URL_AVISO_ALL", url: "aviso/all", httpOperation: "get"},
        {name: "URL_AVISO_ID", url: "aviso/%id%", httpOperation: "get"},
        {name: "URL_AVISO_EDIT", url: "aviso/%id%", httpOperation: "post"}

    ]

    constructor(private http: HttpClient) { 
    }
    
    findWs(wsName: string ){
        wsName = wsName.toUpperCase();
        for(let element of this.https){
            if(wsName == element.name.toUpperCase() ){
                return element;
            }
        }
        return null; 
    }

    httpFunction(httpName:string, component: any, body?: any, parameters?: any){
        let element = this.findWs(httpName);
        if(!element){
            console.error("No se encontro el wsName=", httpName);
            return;
        }
        let url = element.url; 
        //replace parameters
        if(parameters){
            for(let parameter of parameters){
                url = url.replace( "%" + parameter.key + "%", parameter.value);
            }
        }
        this.httpFunctionCustom(component, element.httpOperation, url, body, element );
    }
    


    public httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
    };


    httpFunctionCustom(component: any, httpOperation: string, urlResource: string, body: any, ws?:any){
        let urlApi =environment.server;
        let url = urlApi + urlResource;
        console.warn("httpFunctionCustom: " + httpOperation + " " + urlResource + " ==> " + url);
        console.warn("httpFunctionCustom body:", body);        
        //environment.server
        switch(httpOperation.toLowerCase()){
            case "get":
                this.httpGet(url).subscribe(data => {this.responseOk(component,urlResource, httpOperation, data, ws);});                
                //this.httpGet('./assets/dependata.json').subscribe(data => {this.responseOk(component,urlResource, httpOperation, data, ws);});                
                 break;
            case "post":
               this.httpPost(url, body).subscribe(data => {this.responseOk(component,urlResource,httpOperation, data, ws);});
            break;
            case "put":
                this.httpPut(url, body).subscribe(data => {this.responseOk(component,urlResource,httpOperation, data, ws);});
            break;
            case "delete":
                this.httpDelete(url).subscribe(data => {this.responseOk(component,urlResource, httpOperation, data, ws);});                
            break;                        
        }
    }


    private httpGet (url:string): Observable<{}> {
        return this.http
               .get(url, this.httpOptions)
               .pipe(
                    retry(3),
                    catchError(this.handleError)
               )
    }    
    private httpPost (url:string, body:any): Observable<{}> {
        return this.http
               .post(url, body, this.httpOptions)
               .pipe(
                    retry(3),
                    // catchError(this.responseError(url,body), body)
                    catchError(this.handleError)
               )
    }     
    private httpPut (url:string, body:any): Observable<{}> {
        return this.http
               .put(url, body, this.httpOptions)
               .pipe(
                    retry(3),
                    catchError(this.handleError)
               )
    }    
    private httpDelete (url:string): Observable<{}> {
        return this.http
               .delete(url, this.httpOptions)
               .pipe(
                    retry(3),
                    catchError(this.handleError)
               )
    }   


    private responseOk(component:any, urlResource: string,httpOperation: string, data:any, ws?: any){
        console.warn("responseOk: " + urlResource, data);
        component.responseOk(urlResource,httpOperation, data, ws);
    }

    private responseError(component:any, urlResource: string,httpOperation: string, data:any){
        let dataError = '';
        let dataMessage = '';
        let dataException = '';

        if(data){
            if(data.message){
                dataMessage = data.message;
            }
            if(data.error){
                dataError = data.error;
            }
            if(data.exception){
                dataException = data.exception;
            }
        }
        component.responseError(urlResource, httpOperation, data, dataError, dataMessage, dataException);        
    }
    private handleError(error: HttpErrorResponse) {
        // let dataError = '';
        // let dataMessage = '';
        // let dataException = '';

        // if(data){
        //     if(data.message){
        //         dataMessage = data.message;
        //     }
        //     if(data.error){
        //         dataError = data.error;
        //     }
        //     if(data.exception){
        //         dataException = data.exception;
        //     }
        // }
        
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
        'Something bad happened; please try again later.');
    }
}