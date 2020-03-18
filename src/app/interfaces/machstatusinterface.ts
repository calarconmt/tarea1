export interface Machstatusinterface {
    error: any;
    data: Array<statuslog>;
    statusMachine: any;
}
export interface statuslog {
    statusId: number;
    statusName: string;
    color: string;
    percentage: number;
}
