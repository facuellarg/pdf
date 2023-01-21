import { createSlice } from "@reduxjs/toolkit"




interface WorkExperiences {
    // experiences: Map<string, Partial<WorkExperience>> 
    experiences: Partial<WorkExperience>[] 

}

export interface WorkExperience {
    start: string,
    end: string,
    // start: Date,
    // end: Date,
    description:string,
    company:string,
    rol:string,
    id: string
}

const initialWorkExperience ={
    
    start: "",
    end: "",
    // start: Date,
    // end: Date,
    description:"",
    company:"",
    rol:"",
    id: "",
} satisfies WorkExperience

const initialWorkExperiencesState:WorkExperiences = {
    experiences: []
}



const workExperiencesSlice = createSlice({
    initialState: initialWorkExperiencesState ,
    name:'workExperience',
    reducers:{
        AddExperience(state, action){
            // const {experience, index} = action.payload
            // state.experiences.set(experience.id, experience)
            const {id} = action.payload
            const experience = {...initialWorkExperience, id}
            state.experiences.push(experience)
            
            
            // state.experiences.push(action.payload)
        },
        UpdateExperience(state, action){
            const { experience, index}= action.payload
            state.experiences[index] = {...state.experiences[index], ...experience}
        },
        RemoveExperience(state, action){
            state.experiences.splice(action.payload.index,1)
        }
    }
}) 

export default workExperiencesSlice.reducer
export const WorkExperienceActions = workExperiencesSlice.actions