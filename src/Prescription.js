import React from 'react';
function Prescription(props) {
  return (
    <div>
      {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.dateIssued}
    
    </div>
  );
}

export default Prescription;