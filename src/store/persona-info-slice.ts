import { createSlice } from "@reduxjs/toolkit"

interface PersonalInfoState {
    name: string,
    email: string,
    jobTitle: string,
    phone: string,
    city: string,
    country: string,
    image?:string
}

const initialPersonalInfoState: PersonalInfoState = {
    name: "",
    email: "",
    jobTitle: "",
    phone:"",
    city: "",
    country: "",
}

const personalInfoSlice = createSlice({
    initialState: initialPersonalInfoState,
    name: 'personaInfo',
    reducers: {
        setField(state, action) {
            const field = action.payload.field as keyof PersonalInfoState
            (state[field] as any) = action.payload.value
        }
    }
})

export const personalInfoActions = personalInfoSlice.actions
export default personalInfoSlice.reducer