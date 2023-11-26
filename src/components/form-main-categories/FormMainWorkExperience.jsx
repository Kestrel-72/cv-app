import PropTypes from 'prop-types';
import deleteForm from '../deleteForm';

export default function FormMainWorkExperience({workExperienceInfo, setWorkExperienceInfo}) {
   function handleChange(e) {
      let newArray = [...workExperienceInfo];
      let currentItem = newArray[e.target.dataset.id];
      newArray[currentItem.id][e.target.name] = e.target.value;
      setWorkExperienceInfo(newArray);
   }
   const workItems = workExperienceInfo.map(item =>
      <div className="form-general" key={item.id}>
         <div className='form-main'>
            <div className="form-main-part">
               <label>Company name</label>
               <input type="text" 
                  placeholder="Yandex"
                  name="companyName"
                  data-id={item.id}
                  value={item.companyName}
                  onChange={handleChange}
               />
            </div>
            <div className="form-main-part">
               <label>Job title</label>
               <input type="text" 
                  placeholder="Dev"
                  name="jobTitle"
                  data-id={item.id}
                  value={item.jobTitle}
                  onChange={handleChange}
               />
            </div>
            <div className="form-main-part">
               <label>Duration</label>
               <input type="text" 
                  placeholder="2021-2023"
                  name="duration"
                  data-id={item.id}
                  value={item.duration}
                  onChange={handleChange}
               />
            </div>
            <div className="form-main-part">
               <label>Address</label>
               <input type="text" 
                  placeholder="Moscow"
                  name="address"
                  data-id={item.id}
                  value={item.address}
                  onChange={handleChange}
               />
            </div>
         </div>
         <button 
            className="delete-exp"
            onClick={() => {
               setWorkExperienceInfo(deleteForm(workExperienceInfo, item.id));
            }}
         >
            Delete Place
         </button>
      </div> 
   )
   const newWorkExpButton = 
   <button 
      className="new-exp"
      onClick={() => {
         setWorkExperienceInfo(
            [...workExperienceInfo,
               {
                  companyName: '',
                  jobTitle: '',
                  duration: '',
                  address: '',
                  id: workExperienceInfo.length
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
            {workItems}
         </div>
         {newWorkExpButton}
      </>
   )
}

FormMainWorkExperience.propTypes = {
   workExperienceInfo: PropTypes.array.isRequired,
   setWorkExperienceInfo: PropTypes.func.isRequired
}