import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig
  } from 'axios';
  
  interface Options {
    url: string;
    customHeaders?: any;
    payload?: Object;
  }
  
  const getHeaders = (customHeaders: any) => {
    return {
      headers: {
        ...customHeaders,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: 'xxxx'
      }
    };
  };
  
  axios.defaults.baseURL = '';
  axios.defaults.timeout = 2500;
  
   //Generic Request Interceptor Code
  const requestInterceptor = (req: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {   
    return req;
  };

  //Generic Response Interceptor Code
  const successInterceptor = (res: AxiosResponse): AxiosResponse => {
    return res;
  };
  
  //Generic Exception Code
  const errorInterceptor = (err: AxiosError) => {
    return Promise.reject(err);
  };
  
  axios.interceptors.request.use(requestInterceptor);
  axios.interceptors.response.use(
    (res: any) => successInterceptor(res),
    (err: any) => errorInterceptor(err)
  );

  const get = ({ url, customHeaders }: Options): Promise<AxiosResponse> => {
    
    return new Promise((resolve, reject) => {
      axios
        .get(url, getHeaders(customHeaders))
        .then((response: AxiosResponse) => {
          resolve(response);
        })
        .catch((error: AxiosError) => {
          reject(error);
        });
    });
  };


  export { get };
  
  
  