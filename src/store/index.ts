import { configureStore } from "@reduxjs/toolkit";
import PersonalInfoReducers from "./persona-info-slice";
import WorkExperiencesReducers from "./work-experience"

const store = configureStore({
  reducer: {
    personalInfo: PersonalInfoReducers,
    workExperiences:WorkExperiencesReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
