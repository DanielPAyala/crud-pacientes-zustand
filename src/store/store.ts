import { create } from 'zustand';
import { DraftPatient, Patient } from '../types';

type PatientState = {
  patients: Patient[];
  addPatient: (patient: DraftPatient) => void;
};

export const usePatientStore = create<PatientState>(() => ({
  patients: [],
  addPatient: (patient) => {
    console.log('Registrando Paciente', patient);
  },
}));
