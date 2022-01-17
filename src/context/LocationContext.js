import createDataContext from "./createDataContext"

const locationReducer=(state, action)=>{
    switch(action.type){
        case 'reset':
            return {...state,name:'',locations:[]}
        case 'change_name':
            return {...state,name:action.payload}
        case 'add_locArr':
            return {...state, locations:[...state.locations, action.payload]}
        case 'start_record':
            return {...state,recording:true}
        case 'stop_record':
            return {...state, recording:false}

        case 'add_loc':
            return {...state, currentLocation:action.payload}
        default:
            return state
    }
}

const changeName=(dispatch)=>{
    return (name)=>{
dispatch({type:'change_name',payload:name})
    }
}

const startRecording=(dispatch)=>{
    return ()=>{
dispatch({type:'start_record'})
    }
}

const reset=(dispatch)=>{
    return ()=>{
        dispatch({type:'reset'})
    }
}

const stopRecording=(dispatch)=>{
    return ()=>{
dispatch({type:'stop_record'})
        
    }
}

const addLocation=(dispatch)=>{
    return (location,recording)=>{
        dispatch({type:"add_loc", payload:location})

        if(recording)
        {
            dispatch({type:"add_locArr", payload:location})

        }

        
    }
}


export const {Context, Provider}= createDataContext(
    locationReducer,{changeName, startRecording,stopRecording,addLocation,reset},
    {name:'',recording:false, locations:[], currentLocation:null}
)
