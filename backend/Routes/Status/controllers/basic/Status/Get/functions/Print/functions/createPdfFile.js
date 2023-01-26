import { PDFDocument } from "pdf-lib";
import {readFile,writeFile} from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const createPdfFile=async({inputFile,outputFile,formValues})=>{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const basePath = path.join(__dirname, '.', 'Acte Naissance.pdf');
    // if(!outputFile) outputFile="./backend/Routes/Status/controllers/basic/Status/Print/functions/test.pdf"
    try{
        const pdfDoc=await PDFDocument.load(await readFile(inputFile??basePath));
        const form=pdfDoc.getForm();
        formValues.map(value=>{
            form.getTextField(value.field).setText(value.value.toString())
        })
        const pdfBytes=await pdfDoc.save();
        // await writeFile(outputFile,pdfBytes);
        return pdfBytes;

    }catch(err){
        throw new Error("Error Creating file : > "+ err.message)
    }
};

export default createPdfFile;