import PropTypes from 'prop-types';

export default function FormMainEducation({educationInfo, setEducationInfo}) {
   function handleChange(e) {
      setEducationInfo({
         ...educationInfo,
         [e.target.name]: e.target.value
      });
   }
   return (
      <div className="form-main">
         <div className="form-main-part">
            <label>Educational institution</label>
            <input type="text" 
               placeholder="MIT"
               name="institutionName"
               value={educationInfo.institutionName}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Degree</label>
            <input type="text" 
               placeholder="Computer science"
               name="degree"
               value={educationInfo.degree}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Graduation year</label>
            <input type="text" 
               placeholder="2021"
               name="graduationYear"
               value={educationInfo.graduationYear}
               onChange={handleChange}
            />
         </div>
      </div>
   )
}

FormMainEducation.propTypes = {
   educationInfo: PropTypes.object.isRequired,
   setEducationInfo: PropTypes.func.isRequired
}