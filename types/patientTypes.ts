export type Patient = {
  picture: string;
  diagnosis: string;
  status: "critical" | "stable" | "serious" | "uknwown";
  id: number;
  bloodType: "A" | "B" | "AB" | "O";
  name: string;
  lastName: string;
  gender: "male" | "female";
  vitalSigns: vitalSigns;
  age: number;
  bedNumber: string;
};

type vitalSigns = {
  heartRate: number;
  temperature: number;
  bloodPressure: string;
  respiratoryRate: number;
};
