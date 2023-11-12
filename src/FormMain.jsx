import FormMainPart from "./FormMainPart"

export default function FormMain() {
   return (
      <div className="form-main">
         <FormMainPart label="Full Name" placeholder="John Doe"/>
         <FormMainPart label="Job Title" placeholder="Frontend Developer"/>
         <FormMainPart label="Email" placeholder="johndoe@protonmail.com"/>
         <FormMainPart label="Phone" placeholder="8-800-555-35-35"/>
      </div>
   )
}