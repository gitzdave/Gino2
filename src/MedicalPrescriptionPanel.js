import React from 'react';  // import react from React 
import useState from 'react';// import React usestate

function MedicalPrescriptionPanel() {          // creates the MedicalPrescriptionPanel component

  const [treatId, setTreatId] = React.useState('');     //  using react hook usestate to assign values to variable treatId
  const [name, setName] = React.useState(''); // using react hook usestate to assign values to variable Name
  const [treatCourseId, setTreatCourseId] = React.useState('');//  using react hook usestate to assign values to variable treatCourseId
  const [category, setCategory] = React.useState(''); // using react hook usestate to assign values to variable category
  const [type, setType] = React.useState('');// using react hook usestate to assign values to variable type
  const [dateIssued, setDateIssued] = React.useState('');// using react hook usestate to assign values to variable dateIssued

function  display (){   //  function   to diplay data on the alert window once called
alert ("[" +  "name=" +name + "treatId=" +treatId  +  "treatCourseId=" +treatCourseId  +  "type=" +type +   "dateIssued=" +dateIssued  +   "category=" +category +"]"   )

}

function clearhandler(){  //  function to set all variables i.e  type, name, category, dateissued, treatcourse, treatid to null when called
setCategory ('');
setName ('');
setTreatCourseId('');
setType ('');
setDateIssued  ('');
setTreatId ('');


}

function displayHandler(){   // function calling the display function when called
display();

}

return (
  // html input tags for creating user input box for user to enter values .
  //onchange function is set to the value entered in the input box
  // button tags to create a button tab and  when clicked it calls the functions to execute what the function is set to do.
<div>
  
<input type="text" placeholder='TreatID' value ={treatId} onChange ={e => setTreatId(e.target.value) }/>

            <br/>
            <input type="text" placeholder='Patient Name' value ={name} onChange ={e => setName(e.target.value) }/>
            <br/>
            <input type="text" placeholder='Date Issued' value ={dateIssued} onChange ={e => setDateIssued(e.target.value) }/>
            <br/>
            <input type="text" placeholder='category' value ={category} onChange ={e => setCategory(e.target.value) }/> 
            <br/>
            <input type="text" placeholder='Type' value ={type} onChange ={e => setType(e.target.value) }/> 
  
            <br/>
            <input type="text" placeholder='treatCourseId' value ={treatCourseId} onChange ={e => setTreatCourseId(e.target.value) }/> 
            <button onClick={displayHandler}>Display</button>   
            <button onClick={clearhandler}>Clear</button> 
  
   </div>


);

}

export default MedicalPrescriptionPanel;   // export the medicalPrescriptionPanel component to other folders and share data.