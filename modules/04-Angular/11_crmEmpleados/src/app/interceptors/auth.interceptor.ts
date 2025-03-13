import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('paso por el interceptor')
  //logica del interceptor
  //añadir aqui la cabecera a la peticion, clonando la peticion de salida
  console.log(req)
  const cloneRequest = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token') || ""
    }
  })
  return next(cloneRequest);
};
