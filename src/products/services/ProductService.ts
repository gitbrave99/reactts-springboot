import { APIBASE_URL } from "../../config/ApiBase";
import { FetchApiUtils } from "../../shared/utils/FetchApiUtils";
import { Product } from "../interfaces/Product.interface";

export class ProductService {

    static getListProducts(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            FetchApiUtils.getData<Product[]>(`${APIBASE_URL}/product/list2`)
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    static findProductByName(text: string): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            FetchApiUtils.getData<Product[]>(`${APIBASE_URL}/product/buscar/${text}`)
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

}
