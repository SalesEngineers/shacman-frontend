export default function ({ route, redirect }) {
    //нижний слеш
    if(route.fullPath.indexOf('_') != -1){
        redirect(301, route.fullPath.replace('_', '-'))
    }
    
    //пагинация
    // if(route.fullPath.split('page/').length !== 1) {
    //     redirect(301, route.fullPath.split('page/')[0])
    // }

    if(route.fullPath.split('/page/1').length !== 1) {
        redirect(301, route.fullPath.split('page/')[0])
    }
    
    //нижний регистр
    if(route.fullPath !== route.fullPath.toLowerCase()) {
        redirect(301, route.fullPath.toLowerCase())
    }

    if(route.fullPath.indexOf('/wp-content/') != -1) {
        redirect(301, '/')
    }

    //статичные редиректы
    function handRedirect(oldPath, newPath) {
        if(route.fullPath == oldPath){
            redirect(301, newPath)
        }        
    }

    handRedirect('/product/nozhnichnyj-podemnik-xcmg-gtjs0808/', '/product/nozhnichnyj-podemnik-xcmg-gtjz0808/')
    handRedirect('/kontakty/', '/contacts/')
    handRedirect('/dostavka-i-oplata/', '/')
    handRedirect('/o-kompanii-2/', '/about/')
    handRedirect('/o-brende-xcmg/', '/')
    handRedirect('/servis-i-zapchasti/', '/parts/')
    handRedirect('/product-category/eksakvatory/', '/product-category/ekskavatory/')
    handRedirect('/avtokrany/korotkobaznye-avtokrany/', '/avtokrany/korotkobaznye-krany/')
    handRedirect('/product-category/eksakvatory/ehkskavatory-30-tonn/', '/product-category/ekskavatory/ekskavatory-30-tonn/')
    handRedirect('/product-category/eksakvatory/ehkskavatory-2-m3/', '/product-category/ekskavatory/2-m3/')
    handRedirect('/product-category/eksakvatory/ehkskavatory-1-m3/', '/product-category/ekskavatory/1-m3/')
    handRedirect('/product-category/eksakvatory/ehkskavatory-15-tonn/', '/product-category/ekskavatory/15-tonn/')
    handRedirect('/product-category/eksakvatory-pogruzchiki/', '/product-category/ekskavatory-pogruzchiki/')
    handRedirect('/product-category/nozhnichnye-podemniki/', '/product-category/stroitelnye-podyemniki/nozhnichnye-podemniki/')
}