import { Patient } from "./patientTypes";

export type AppStackParameterList = {
  Home: undefined;
  DetailedScreen: { user: Patient };
};
