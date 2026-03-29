import path from 'path';
import {promises as fs } from 'fs';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
    const jsonDirectory = path.join(process.cwd(), 'json');

    const fileContent = await fs.readFile(jsonDirectory + '/contact.json', 'utf8');
    const obJect = JSON.parse(fileContent);
    res.status(200).json(fileContent);
}

export async function loadContactold() {
    const env = process.env.NODE_ENV
    if (env == "production"){
        const data = {
            github: "https://github.com/Kaijeng613/",
            linkedin: "https://www.linkedin.com/in/wong-kai-jeng/",
            email: "kaijengre2@gmail.com",
            phone: "0175597576",
        }
        return data
    }
    else
    {
        const res = await fetch(process.env.NEXT_API_URL + 'api/contact');
        const data = await res.json();    
        return data
    }
       
}