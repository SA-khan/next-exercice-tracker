import React from 'react'
import AddActivity from '@/components/exercise-tracker/AddActitvity';
import ExerciseLayout from '@/components/exercise-tracker/ExerciseLayout';

const Add = () => {
    return <React.Fragment>
        <ExerciseLayout>
            <AddActivity />
        </ExerciseLayout>
    </React.Fragment>;
}

export default Add;