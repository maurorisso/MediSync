export type Patient = {
  picture: string;
  diagnosis: string;
  status: Status;
  id: number;
  bloodType: "A" | "B" | "AB" | "O";
  name: string;
  lastName: string;
  gender: "male" | "female";
  vitalSigns: VitalSigns;
  age: number;
  bedNumber: string;
};

type VitalSigns = {
  heartRate: number;
  temperature: number;
  bloodPressure: string;
  respiratoryRate: number;
};

export type Status = "critical" | "stable" | "serious" | "uknwown";
