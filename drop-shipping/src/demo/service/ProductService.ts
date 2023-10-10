import axios from 'axios';
import getConfig from 'next/config';

export class ProductService {
    constructor() {
        this.contextPath = 'https://shopifyapp.iihtsrt.com/public/naturescure-api/product/v1/';
    }

    async getProducts() {
        const res = await axios.get(this.contextPath + 'all');
        return res.data;
    }

    async saveProduct(product) {
        var res = null;
        console.log(product);
        if (product.product_id != null) {
            res = await axios.post(this.contextPath + 'update/' + product.product_id, product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        } else {
            res = await axios.post(this.contextPath + 'add', product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        return res.data;
    }

    async deleteProduct(id) {
        const res = await axios.get(this.contextPath + 'delete/' + id);
        return res.data;
    }

    async getProductsSmall() {
        const res = await axios.get(this.contextPath + 'all');
        return res.data;
       
    }

}
