"use server";

import { log } from "console";


export async function createPost(formData: FormData){
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    console.log(title, body);


    

    
    console.log(title);
}

    //insert into database
    // await prisma.post.create({
    //     data: {
    //         title: title
    //     }
    // });
