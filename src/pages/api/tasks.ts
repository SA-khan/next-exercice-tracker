import Envelop from "@/models/Envelop";
import { NextApiRequest, NextApiResponse } from "next";
import { TaskService } from "@/services/TaskService";


export default function handler(request: NextApiRequest, response: NextApiResponse<Envelop>) {

    if(request.method == 'POST') {

    }

    else if(request.method == 'GET') {
        response.status(200).json( (new TaskService()).GetAllTasks()  )
    }
}