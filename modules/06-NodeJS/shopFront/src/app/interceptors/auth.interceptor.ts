import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('shop_token');

    if(token){
        const reqClone = req.clone({
            setHeaders: {
                Authorization: token
            }
        });
        console.info(req);
        return next(reqClone);
    }

    console.info(req);

    return next(req);
};