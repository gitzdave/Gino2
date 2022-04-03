import React from 'react';
import useState from 'react';

function MedicalPrescriptionPanel() {

  const [treatId, setTreatId] = React.useState('');   
  const [name, setName] = React.useState(''); // 
  const [treatCourseId, setTreatCourseId] = React.useState('');//  
  const [category, setCategory] = React.useState(''); // 
  const [type, setType] = React.useState('');// 
  const [dateIssued, setDateIssued] = React.useState('');// 

function  display (){
alert ("[" +  "name=" +name + "treatId=" +treatId  +  "treatCourseId=" +treatCourseId  +  "type=" +type +   "dateIssued=" +dateIssued  +   "category=" +category +"]"   )

}

function clearhandler(){
setCategory ('');
setName ('');
setTreatCourseId('');
setType ('');
setDateIssued  ('');
setTreatId ('');


}

function displayHandler(){
display();

}


return (
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

export default MedicalPrescriptionPanel;