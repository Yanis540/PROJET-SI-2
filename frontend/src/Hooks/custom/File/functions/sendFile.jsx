import { Buffer } from 'buffer';

const sendFile=async({execute,file})=>{
    const reader = new FileReader();
    reader.onload = async() => {
        const fileBuffer = Buffer.from(reader.result);
        await execute({photo:fileBuffer});
    }
    reader.readAsArrayBuffer(file);
}
export default sendFile