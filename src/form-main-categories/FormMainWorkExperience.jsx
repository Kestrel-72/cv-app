import PropTypes from 'prop-types';

export default function FormMainWorkExperience({workExperienceInfo, setWorkExperienceInfo}) {
   function handleChange(e) {
      setWorkExperienceInfo({
         ...workExperienceInfo,
         [e.target.name]: e.target.value
      });
   }
   return (
      <div className="form-main">
         <div className="form-main-part">
            <label>Company name</label>
            <input type="text" 
               placeholder="Yandex"
               name="companyName"
               value={workExperienceInfo.companyName}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Job title</label>
            <input type="text" 
               placeholder="Dev"
               name="jobTitle"
               value={workExperienceInfo.jobTitle}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Duration</label>
            <input type="text" 
               placeholder="2021-2023"
               name="duration"
               value={workExperienceInfo.duration}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Address</label>
            <input type="text" 
               placeholder="Moscow"
               name="address"
               value={workExperienceInfo.address}
               onChange={handleChange}
            />
         </div>
      </div>
   )
}

FormMainWorkExperience.propTypes = {
   workExperienceInfo: PropTypes.object.isRequired,
   setWorkExperienceInfo: PropTypes.func.isRequired
}