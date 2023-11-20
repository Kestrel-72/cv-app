import FormHeaderTitle from "./FormHeaderTitle";
import FormMainPersonal from "./form-main-categories/FormMainPersonal";
import FormSection from "./FormSection.jsx";
import FormMainEducation from "./form-main-categories/FormMainEducation";
import FormMainWorkExperience from "./form-main-categories/FormMainWorkExperience";
import { useState } from "react";

export default function App() {

   const [personalInfo, setPersonalInfo] = useState(
      {
         fullName: '',
         jobTitle: '',
         email: '',
         phone: ''
      }
   );
   const [workExperienceInfo, setWorkExperienceInfo] = useState(
      {
         companyName: '',
         jobTitle: '',
         duration: '',
         address: ''
      }
   );
   const [educationInfo, setEducationInfo] = useState(
      {
         institutionName: '',
         degree: '',
         graduationYear: ''
      }
   );
   console.log(personalInfo)
   console.log(workExperienceInfo)
   console.log(educationInfo)
   // eslint-disable-next-line no-unused-vars
   const sections = 
      [
         {
            title: <FormHeaderTitle title='Personal details'/>,
            main: <FormMainPersonal
               personalInfo={personalInfo}
               setPersonalInfo={setPersonalInfo}
            />,
            isPicked: true,
            index: 0
         },
         {
            title: <FormHeaderTitle title='Work experience'/>,
            main: <FormMainWorkExperience
               workExperienceInfo={workExperienceInfo} 
               setWorkExperienceInfo={setWorkExperienceInfo}
            />,
            isPicked: true,
            index: 1
         },
         {
            title: <FormHeaderTitle title='Education'/>,
            main: <FormMainEducation
               educationInfo={educationInfo}
               setEducationInfo={setEducationInfo}
            />,
            isPicked: true,
            index: 2
         }
      ];
   const [activeSectionIndex, setActiveSectionIndex] = useState(0);
   return (
      <FormSection 
         sections={sections} 
         activeSectionIndex={activeSectionIndex} 
         setActiveSectionIndex={setActiveSectionIndex}
      />
   );
}