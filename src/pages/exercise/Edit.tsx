import React, { useState } from 'react'

const Edit = () => {
    const [title, setTitle]  = useState[""];
    return <React.Fragment>
        <div>
            <form>
                <label htmlFor='title'>Title
                    <input value={title} placeholder='Enter title' onChange={(e)=>setTitle(e.target.title)}  />
                </label>
                <button>Update</button>
            </form>
        </div>
    </React.Fragment>;
}

export default Edit;
