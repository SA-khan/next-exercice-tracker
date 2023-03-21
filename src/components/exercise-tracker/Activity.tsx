import React, { useState } from 'react';
import Image from 'next/image'
import ExerciseTaskModel from '@/models/ExerciseTaskModel';

const Activity = ({activity}:{activity: ExerciseTaskModel}) => {
    
    const type = activity.activityType;
    const [activityTypeUrl, setActivityTypeUrl] = useState( type == 1 ? '/images/exercise/runing.png' : type == 2 ? '/images/exercise/bicycle_ride.png' : type === 3 ? '/images/exercise/swim.png' : type === 4 ? '/images/exercise/walk.png' : '/images/exercise/hike.png');
    const [activityType, setActivityType] = useState( type == 1 ? 'Runing' : type == 2 ? 'Bicycle Ride' : type === 3 ? 'Swiming' : type === 4 ? 'Walk' : 'Hiking');

    return <React.Fragment>
        <div className='p-1 mt-2'>
            <div className='card-body'>
                <div className='row no-gutters border border-light'>
                    <div className='col-1 align-center p-1 shadow'>
                        <div className='text-muted'># {activity.exerciseTrackerId}</div>
                    </div>
                    <div className='col-5 shadow'>
                        <div className='row'>
                            <div className='text-dark lead d-inline mt-1'>{activity.title?.toUpperCase()}</div>
                        </div>
                        <div className='row'>
                            <div className='text-muted'>{activity.description}</div>
                        </div>
                    </div>
                    <div className='col-3 text-center shadow'>
                        <div className='row no-gutters bg-light'>
                            <div className='col-5 text-center'>
                                <p className='card-subtitle mt-1'>Date:</p> 
                            </div>
                            <div className='col-7 text-center'>
                                <div className='card-subtitle mt-1'>{activity.date}</div> 
                            </div>
                        </div>
                        <div className='row no-gutters border border-light'>
                            <div className='col-5 text-center'>
                                <div className='card-subtitle mt-1'>Duration: </div> 
                            </div>
                            <div className='col-7'>
                                <div className='card-subtitle mt-1'>{activity.duration}</div> 
                            </div>
                        </div>
                    </div>
                    <div className='col-3 h-100 w-25 float-end shadow'>
                        <div className='row'>
                            <div className='col'>
                                <p className='mx-2 p-2'>{ activityType }</p>
                            </div>
                            <div className='col-3'>
                                <Image id="img-activity-type" className='float-end p-2' src={activityTypeUrl} width={80} height={80} alt="activity logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>;
}

export default Activity;