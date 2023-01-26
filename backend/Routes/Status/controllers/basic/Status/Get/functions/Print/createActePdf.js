
import createPdf from './functions/createPdfFile.js';

import chooseFormValues from './functions/chooseFormValues.js';
const createActePdf=async({acte})=>{

    if(acte.type!=="NAISSANCE") return null ;
    // if(type_acte!=="NAISSANCE") throw new Error("Only handled ");
    const formValues=chooseFormValues({acte})
    const pdfData=await createPdf({formValues})
    return Buffer.from(pdfData)
}

export default createActePdf