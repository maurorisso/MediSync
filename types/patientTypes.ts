export type Patient = {
  picture: string;
  diagnosis: string;
  status: "critical" | "stable" | "serious";
  id: number;
  bloodType: "A" | "B" | "AB" | "O";
  name: string;
  gender: "male" | "female";
  vitalSigns: vitalSigns;
  age: number;
  bedNumber: string;
  lastCheckup: Date;
};

type vitalSigns = {
  heartRate: number;
  temperature: number;
  bloodPressure: string;
  respiratoryRate: number;
};

export type PatientList = Patient[];
