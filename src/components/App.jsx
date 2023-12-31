import FormHeaderTitle from "./FormHeaderTitle";
import FormMainPersonal from "/src/components/form-main-categories/FormMainPersonal";
import FormSection from "./FormSection.jsx";
import FormMainEducation from "/src/components/form-main-categories/FormMainEducation";
import FormMainWorkExperience from "/src/components/form-main-categories/FormMainWorkExperience";
import { useState } from "react";
import AllForms from "./AllForms";

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
      [
         {
            companyName: '',
            jobTitle: '',
            duration: '',
            address: '',
            id: 0
         }
      ]
   );
   const [educationInfo, setEducationInfo] = useState(
      [
         {
            institutionName: '',
            degree: '',
            graduationYear: '',
            id: 0
         }
      ]
      
   );
   // console.log(personalInfo)
   // console.log(workExperienceInfo)
   // console.log(educationInfo)
   // eslint-disable-next-line no-unused-vars
   const sections = 
      [
         {
            titleT: 'Personal details',
            title: <FormHeaderTitle title='Personal details'/>,
            main: <FormMainPersonal
               personalInfo={personalInfo}
               setPersonalInfo={setPersonalInfo}
            />,
            isPicked: true,
            id: 0
         },
         {
            titleT: 'Work experience',
            title: <FormHeaderTitle title='Work experience'/>,
            main: <FormMainWorkExperience
               workExperienceInfo={workExperienceInfo} 
               setWorkExperienceInfo={setWorkExperienceInfo}
            />,
            isPicked: true,
            id: 1
         },
         {
            titleT: 'Education',
            title: <FormHeaderTitle title='Education'/>,
            main: <FormMainEducation
               educationInfo={educationInfo}
               setEducationInfo={setEducationInfo}
            />,
            isPicked: true,
            id: 2
         }
      ];
   const [activeSectionId, setActiveSectionId] = useState(0);
   return (
      <>
         <AllForms 
            sections={sections}
            setActiveSectionId={setActiveSectionId}
         />
         <FormSection 
            sections={sections} 
            activeSectionId={activeSectionId} 
            setActiveSectionId={setActiveSectionId}
         />
      </>
   );
}