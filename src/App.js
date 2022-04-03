import React from 'react';
import './style.css';
import MedicalPrescriptionList from './MedicalPrescriptionList';
import Prescription from './Prescription';
import MedicalPrescriptionPanel from './MedicalPrescriptionPanel'


var treatId = "Treat Id is : 911"
var patientName =" Name is : Dave  King"
var category = " Category is: minor"
var type =" Type is : vaccination"
var treatCourseId = " Treatcourseid is : 1112"
var dateIssued = " StartDate is :  02/12/21"

export default function App() {
  const prescriptionAsJson =
  '[{"treatId":"001", "treatCourseId":"101AFC", "type":"Amoxicillin", "category":"Antibiotic", "name":"Joe Bloggs", "dateIssued":"31/01/2022"},' +
  '{"treatId":"002", "treatCourseId":"102AFC", "type":"Loratadine", "category":"Antihistamine", "name":"Susan Piper", "dateIssued":"14/01/2022"},' +
  '{"treatId":"003", "treatCourseId":"103AFC", "type":"Paracetamol", "category":"Painkiller", "name":"Georgia Smith", "dateIssued":"11/01/2022"},' +
  '{"treatId":"004", "treatCourseId":"104AFC", "type":"Codeine", "category":"Painkiller", "name":"Ross Cooper", "dateIssued":"01/02/2022"},' +
  '{"treatId":"005", "treatCourseId":"105AFC", "type":"Doxycycline", "category":"Antibiotic", "name":"Linda Jones", "dateIssued":"24/02/2022"}]';
  const dataString = JSON.parse(prescriptionAsJson);

  return (
    <div>
       <h2>  Task 1: MedicalTreatment Results: </h2>
       <Prescription treatId={treatId}    treatCourseId= {treatCourseId}  name ={patientName} category={category } dateIssued= {dateIssued} type ={type}/>
      
       <h2>  Task 2: MedicalTreatment Results: </h2>
      <MedicalPrescriptionList json={prescriptionAsJson}  />

      <h2>Task2b: Results of patient Names after filter: </h2>
     
     {dataString.filter(record => record.category =="Antibiotic").map(filteredRecord => (
        <li>
          {filteredRecord.name}
        </li>
      ))}
 <h2>Task 3:  </h2>
      <MedicalPrescriptionPanel/>
    </div>
  );
}

