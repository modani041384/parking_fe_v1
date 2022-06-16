export interface ListResponse<T>{
    errorCode: number,
    message: string,
    list?: T[]
}