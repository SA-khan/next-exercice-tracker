import React, { useState } from 'react'
import Image from 'next/image'
import  utilStyles  from '../../styles/utils.module.css'
import { WeatherModel } from '@/models/WeatherModel'
import ExerciseLayout from './ExerciseLayout'
import { TaskModel } from '@/models/TaskModel'
import { ActivityTypeEnum } from '@/enums/ActivityTypeEnum'
import { ExerciseTrackerService } from '@/services/ExerciseTrackerService'
import ExerciseTaskModel from '@/models/ExerciseTaskModel'

const AddActivity = () => {
    var task: TaskModel = new TaskModel();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [activityType, setActivityType] = useState(ActivityTypeEnum.Bicycle_Ride);
    var activityTypeList = Object.keys(ActivityTypeEnum).filter((type)=> { return isNaN(Number(type)) } );
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");

    const handleAdd = (e: Event) => {
        e.preventDefault();
        console.log("Title: " + title + ", Description: " + description + ", Duration: " + duration + ', Date: ' + date);
        //const service = new ExerciseTrackerService();
        //const model = new ExerciseTaskModel(1, title, description, activityType, duration, date);
        //const add = service.CreateActivity(model);
        //console.log("model successfully saved: "+ add);
    }

    return <React.Fragment>
            <div className='card p-2 mb-2'>
                <h2 className="h2 m-2 p-2 bg-dark text-white">Add Activity Form</h2>
                <form>
                <div className='container'>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='title'>Title</label></div>
                                <div className='col'><input value={title} placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='description'>Description</label></div>
                                <div className='col'><input value={description} placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='activityType'>Activity Type</label></div>
                                <div className='col'><select value={activityType} placeholder="Selcet Activity Type" onChange={(e)=>setActivityType(1)} required>
                                    <option>Select type..</option>
                                    {
                                        activityTypeList.map(i => (
                                            <option key={i}>{i}</option>
                                        ))
                                    }
                                    </select></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='duration'>Duration</label></div>
                                <div className='col'><input type="text" value={duration} placeholder="Enter Duration" onChange={(e)=>setDuration(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='passcode'>Date</label></div>
                                <div className='col'><input type="date" value={date} placeholder="Enter Date" onChange={(e)=>setDate(e.target.value)} required /></div>
                            </div>
                            <div className='row no-gutters m-2'>
                                <div className='col-3'><label htmlFor='add'></label></div>
                                <div className='col'><button className='btn btn-sm btn-dark text-white bg-dark mt-2 p-2' onClick={(e)=>handleAdd(e)}>ADD</button></div>
                            </div>
                    </div>
                </form>
            </div>
    </React.Fragment>;
}

export default AddActivity;