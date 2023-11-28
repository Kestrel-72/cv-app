import PropTypes from 'prop-types';

export default function FormMainPersonal({personalInfo, setPersonalInfo}) {
   function handleChange(e) {
      setPersonalInfo({
         ...personalInfo,
         [e.target.name]: e.target.value
      });
   }
   return (
      <div className="form-general-personal">
         <div className="form-main-part">
            <label>Full name</label>
            <input type="text" 
               placeholder="John Doe"
               name="fullName"
               value={personalInfo.fullName}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Job title</label>
            <input type="text" 
               placeholder="Frontend developer"
               name="jobTitle"
               value={personalInfo.jobTitle}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Email</label>
            <input type="text" 
               placeholder="johndoe@protonmail.com"
               name="email"
               value={personalInfo.email}
               onChange={handleChange}
            />
         </div>
         <div className="form-main-part">
            <label>Phone</label>
            <input type="text" 
               placeholder="8-800-555-35-35"
               name="phone"
               value={personalInfo.phone}
               onChange={handleChange}
            />
         </div>
      </div>
   )
}

FormMainPersonal.propTypes = {
   personalInfo: PropTypes.object.isRequired,
   setPersonalInfo: PropTypes.func.isRequired
}