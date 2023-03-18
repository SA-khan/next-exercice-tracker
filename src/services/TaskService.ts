import React, { useState, useEffect } from 'react';
import  Axios from 'axios';
const mongoose = require('mongoose');
import  { TaskSchema }  from '../schemas/TaskSchema'
import { TaskModel } from '@/models/TaskModel'
import Envelop  from '@/models/Envelop';
import {dbUrl} from '../config/Keys';

const taskUrl = '/api/tasks';

export class TaskService {

    public task ?: TaskModel
    public tasks ?: TaskModel[] = []

    public async GetAll() : Promise<Envelop> {
        return await (await Axios.get(taskUrl)).data as Envelop;
    }

    // public async GetById(id: number) {
    //     var val = new TaskSchema;
    //     var response = new Envelop(true, 1000001, await val.find({ taskId: id }));
    //     console.log('Get By Id!');
    //     return response;
    // }

    // public async Save(task: TaskModel) {
    //     var response = new Envelop();
    //     var val = new TaskSchema ({ title: task.title, description: task.description });
    //     await val.Save();
    //     console.log('Saved!');
    //     return new Envelop ();
    // }

    // public async Remove(id: number) {
    //     var val = new TaskSchema();
    //     var val2 = await val.find(id);
    //     await val2.Remove(id);
    //     console.log('Removed!');
    //     return new Envelop ();
    // }

    public GetAllTasks() : Envelop {
        const response = {
            isSuccessful: true,
            responseMessage: 1000001,
            content: [
                {
                    taskId: 1,
                    title: 'First',
                    description: 'First Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 2,
                    title: 'Second',
                    description: 'Second Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 3,
                    title: 'Third',
                    description: 'Third Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 4,
                    title: 'Fourth',
                    description: 'Fourth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 5,
                    title: 'Fifth',
                    description: 'Fifth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 6,
                    title: 'Sixth',
                    description: 'Sixth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 7,
                    title: 'Seventh',
                    description: 'Seventh Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 8,
                    title: 'Eighth',
                    description: 'Eighth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 9,
                    title: 'Ninth',
                    description: 'Ninth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 10,
                    title: 'Tenth',
                    description: 'Tenth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 11,
                    title: 'Eleventh',
                    description: 'Eleventh Task',
                    isActive: false,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 12,
                    title: 'Twelveth',
                    description: 'Eleventh Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 13,
                    title: 'Thirteenth',
                    description: 'Thirteenth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 14,
                    title: 'Fourteenth',
                    description: 'Fourteenth Task',
                    isActive: true,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
                {
                    taskId: 15,
                    title: 'Fifteenth',
                    description: 'Fifteenth Task',
                    isActive: false,
                    createdBy: 'admin',
                    createdOn: '2023-02-16',
                    modifiedBy: 'admin',
                    modifiedOn: '2023-02-16',
                    version: 1,
                    isDeleted: false 
                },
            ]
        };
        return response;
    }

}