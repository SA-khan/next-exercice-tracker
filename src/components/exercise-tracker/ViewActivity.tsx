import { ActivityTypeEnum } from '@/enums/ActivityTypeEnum';
import ExerciseTaskModel from '@/models/ExerciseTaskModel';
import React from 'react';
import Activity from './Activity'

const ViewActivity = () => {
    const activity1 = new ExerciseTaskModel(1, 'Walk among friends', "walking with friends", ActivityTypeEnum.Walk, '15:00:00', '2023-03-15');
    const activity2 = new ExerciseTaskModel(2, 'Runing in the rally', "Let the running begin", ActivityTypeEnum.Run, '1 hour', '2023-03-15');
    const activity3 = new ExerciseTaskModel(3, 'Bicycle Riding', "Look! i am riding a bicycle", ActivityTypeEnum.Bicycle_Ride, '30 minutes', '2023-03-15');
    const activity4 = new ExerciseTaskModel(4, 'Hike among friends', "Hiking is my hobby!", ActivityTypeEnum.Hike, '15 min', '2023-03-15');
    const activity5 = new ExerciseTaskModel(5, 'Swim among friends', "Swiming with friends", ActivityTypeEnum.Swim, '30 seconds', '2023-03-15');
    return <React.Fragment>
        <div className=''>
            <Activity activity={activity1} />
            <Activity activity={activity2} />
            <Activity activity={activity3} />
            <Activity activity={activity4} />
            <Activity activity={activity5} />
        </div>
    </React.Fragment>;
}

export default ViewActivity;