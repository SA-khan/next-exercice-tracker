import Envelop from "@/models/Envelop";
import { TaskService } from "@/services/TaskService";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    runtime: 'edge'
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<Envelop>) {
    if(request.method == 'GET') {
        console.log('Bypass')
        const { searchParams } = new URL(request.url ?? '');
        const taskId = parseInt(searchParams.get('taskId') ?? '') ?? 0;
        console.log(taskId)
        response.status(200).json(await (new TaskService).GetById(taskId));
    }
}