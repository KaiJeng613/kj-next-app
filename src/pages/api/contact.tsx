export default function handler(req: any, res: {
    status: (arg0: number) => {
        (): any;
        new(): any;
        json: {
            (arg0: {
                github: string;
                linkedin: string;
                email: string;
                phone: string;

            }): void;new(): any;
        };
    };
}) {
    res.status(200).json({
        github: "https://github.com/Kaijeng613/",
        linkedin: "https://www.linkedin.com/in/wong-kai-jeng/",
        email: "kaijengre2@gmail.com",
        phone: "0175597576",
    })
}