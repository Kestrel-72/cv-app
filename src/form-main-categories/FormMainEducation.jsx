import FormMainPart from "../FormMainPart"

export default function FormMainEducation() {
   return (
      <div className="form-main">
         <FormMainPart label="University name" placeholder="MIT"/>
         <FormMainPart label="Degree" placeholder="Computer science"/>
         <FormMainPart label="Graduation year" placeholder="2021"/>
      </div>
   )
}