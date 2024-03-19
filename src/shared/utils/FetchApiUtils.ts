export class FetchApiUtils {

    private static fetchBase<T>(url:string, options={}):Promise<T>{
        return new Promise((resolve,reject)=>{
            fetch(url,options)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static getData<T>(url:string):Promise<T>{
        return this.fetchBase(url);
    }

}


