import FormMainPart from "../FormMainPart"

export default function FormMainWorkExperience() {
   return (
      <div className="form-main">
         <FormMainPart label="Company name" placeholder="Yandex"/>
         <FormMainPart label="Job title" placeholder="Web developer"/>
         <FormMainPart label="Duration" placeholder="2021-2023"/>
         <FormMainPart label="Address" placeholder="Moscow"/>
      </div>
   )
}