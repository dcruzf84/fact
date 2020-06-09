export interface IFactura {
    idFactura			 : number;
    nFactura             : string;
    fFactura             : string;
    fVigencia            : string;
    idProveedor          : number;
    descripcion          : string;
    montoSIVA            : number;
    montoCIVA            : number;
    idMoneda             : number;
    concepto             : string;
    idFacturaSustituye   : number;
    idTipoFactura        : number;
    pathPDF              : string;
    pathXML              : string;
    idEstatus            : number;
    notaFactura          : string;
    idArea               : number;
    retencionPorcentaje  : number;
    retencionMonto       : number;
    idTipoServicio       : number;
    facturaActiva        : number;
    idUsuario            : number;
    fRegistro            : string;
    idUsuarioMod         : number;
    fUltimoCambio        : string;
}