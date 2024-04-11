import axios, { AxiosRequestConfig } from 'axios';
import { from, throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

function makeRequest<Type>(config: AxiosRequestConfig): Observable<Type> {
    return new Observable<Type>(handle => {
        axios(config).then(res => {
            handle.next(res.data);
        }).catch(err => {
            handle.error(err);
        }).finally(() => {
            handle.complete()
        });
    })
}

export default {
    get: <Type>(url: string, headers?: Record<string, string>): Observable<Type> => makeRequest<Type>({
        method: 'get',
        url,
        headers,
    }),
    post: <Type>(url: string, data: any, headers?: Record<string, string>): Observable<Type> => makeRequest<Type>({
        method: 'post',
        url,
        data,
        headers,
    })
    // Add more methods as needed
};
