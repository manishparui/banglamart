const app = new Vue({
    el: '#main',
    data: {
        

        apiBaseUrlWc: 'https://banglamart.in/wp-json/wc/v3',
        productCategories: []
        
    },

    methods: {
        getReport: function () {
            
        }

    },

    created () {
        let productCategoriesUrl = this.apiBaseUrlWc + '/products/categories'
        let headers = new Headers();
        headers.append("Authorization", "Basic Y2tfMWQwYTI1YzMxMmRmNGY2MDdjMTc1ZWUzMGNjNDJmNjNiZDVkM2Q4Mjpjc180M2U4NDhjZmY0YTllNzBjMGU1ZGZmY2ExOTI0MWYyYTkxMjE2NTM5")

        fetch(productCategoriesUrl, {
                method: 'GET',
                headers: headers
        })
        .then(response => response.json())
        .then(json => {
            this.productCategories = json
        })
        
    }
})