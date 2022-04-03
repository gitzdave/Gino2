import React from 'react';
import './style.css';
import MedicalPrescriptionList from './MedicalPrescriptionList';
import Prescription from './Prescription';

export default function App() {
  const prescriptionAsJson =
  '[{"treatId":"001", "treatCourseId":"101AFC", "type":"Amoxicillin", "category":"Antibiotic", "name":"Joe Bloggs", "dateIssued":"31/01/2022"},' +
  '{"treatId":"002", "treatCourseId":"102AFC", "type":"Loratadine", "category":"Antihistamine", "name":"Susan Piper", "dateIssued":"14/01/2022"},' +
  '{"treatId":"003", "treatCourseId":"103AFC", "type":"Paracetamol", "category":"Painkiller", "name":"Georgia Smith", "dateIssued":"11/01/2022"},' +
  '{"treatId":"004", "treatCourseId":"104AFC", "type":"Codeine", "category":"Painkiller", "name":"Ross Cooper", "dateIssued":"01/02/2022"},' +
  '{"treatId":"005", "treatCourseId":"105AFC", "type":"Doxycycline", "category":"Antibiotic", "name":"Linda Jones", "dateIssued":"24/02/2022"}]';


  return (
    <div>
      <MedicalPrescriptionList json={prescriptionAsJson}  />
      
    </div>
  );
}

