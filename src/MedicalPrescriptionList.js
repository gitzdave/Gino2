import React from 'react';
import Prescription from './Prescription'

function MedicalPrescriptionList(props) {
  //getting hold of JSON string
  const prescriptionJ = props.json;
  //getting hold of filter category
  //const type = props.type;

  //translating the JSON string into JavaScript
  const medicalPrescriptionList = JSON.parse(prescriptionJ);
 
  //generating what will be displayed
  const listPrescription = medicalPrescriptionList.map((prescription) => 
    <li>
    <Prescription
      treatId={prescription.treatId}
      treatCourseid={prescription.treatCourseId}
      type={prescription.type}
      category={prescription.category}
      name={prescription.name}
      dateIssued={prescription.dateIssued}
    />
    </li>
  );


  //giving what will be displayed
  return (
    <div>  
      <ul> {listPrescription} </ul>
    </div>
  );
}

export default MedicalPrescriptionList;
