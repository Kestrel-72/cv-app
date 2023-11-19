import FormHeaderTitle from "./FormHeaderTitle";
import FormMainPersonal from "./form-main-categories/FormMainPersonal";
import FormSection from "./FormSection.jsx";
import FormMainEducation from "./form-main-categories/FormMainEducation";
import FormMainWorkExperience from "./form-main-categories/FormMainWorkExperience";
import { useState } from "react";

export default function App() {
   // eslint-disable-next-line no-unused-vars
   const [sections, setSections] = useState(
      [
         {
            title: <FormHeaderTitle title='Personal details'/>,
            main: <FormMainPersonal/>,
            isPicked: true,
            index: 0
         },
         {
            title: <FormHeaderTitle title='Work experience'/>,
            main: <FormMainWorkExperience/>,
            isPicked: true,
            index: 1
         },
         {
            title: <FormHeaderTitle title='Education'/>,
            main: <FormMainEducation/>,
            isPicked: true,
            index: 2
         }
      ]
   );
   const [activeSectionIndex, setActiveSectionIndex] = useState(0);

   return (
      <FormSection 
         sections={sections} 
         activeSectionIndex={activeSectionIndex} 
         setActiveSectionIndex={setActiveSectionIndex}
      />
   );
}