export interface IResponseResult {
    status: -1 | 0 | 1; // -1: runtime error, 1: success, 0: fail
    data: any;
}