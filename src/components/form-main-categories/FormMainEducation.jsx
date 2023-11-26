import PropTypes from 'prop-types';
import deleteForm from '../deleteForm';

export default function FormMainEducation({educationInfo, setEducationInfo}) {
   function handleChange(e) {
      let newArray = [...educationInfo];
      let currentItem = newArray[e.target.dataset.id];
      newArray[currentItem.id][e.target.name] = e.target.value;
      setEducationInfo(newArray);
   }
   const educationItems = educationInfo.map(item => 
      <div className="form-general" key={item.id}>
         <h2 className='form-header'>Degree {item.id + 1}</h2>
         <div className="form-main">
            <div className="form-main-part">
               <label>Educational institution</label>
               <input type="text" 
                  placeholder="MIT"
                  name="institutionName"
                  data-id={item.id}
                  value={item.institutionName}
                  onChange={handleChange}
               />
            </div>
            <div className="form-main-part">
               <label>Degree</label>
               <input type="text" 
                  placeholder="Computer science"
                  name="degree"
                  data-id={item.id}
                  value={item.degree}
                  onChange={handleChange}
               />
            </div>
            <div className="form-main-part">
               <label>Graduation year</label>
               <input type="text" 
                  placeholder="2021"
                  name="graduationYear"
                  data-id={item.id}
                  value={item.graduationYear}
                  onChange={handleChange}
               />
            </div>
         </div>
         <button 
            className="delete-education"
            onClick={() => {
               setEducationInfo(deleteForm(educationInfo, item.id));
            }}
         >
            Delete Place
         </button>
      </div>
   )
   const newEducationButton = 
   <button 
      className="new-exp"
      onClick={() => {
         setEducationInfo(
            [...educationInfo,
               {
                  institutionName: '',
                  degree: '',
                  graduationYear: '',
                  id: educationInfo.length
               }
            ]
         )
      }}
      >
      Add Place
   </button>

   return (
      <>
         <div className="forms-list">
            {educationItems}
         </div>
         {newEducationButton}
      </>
   )
}

FormMainEducation.propTypes = {
   educationInfo: PropTypes.array.isRequired,
   setEducationInfo: PropTypes.func.isRequired
}