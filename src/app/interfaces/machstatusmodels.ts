export interface IMachstatusmodels {
    modelLogs: Array<IMachstatuslogs>;
}

export interface IMachstatuslogs {
    machineTypeId: number;
    machineTypeName: string;
}
