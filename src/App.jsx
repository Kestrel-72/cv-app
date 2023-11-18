import FormHeaderTitle from "./FormHeaderTitle";
import FormMainPersonal from "./form-main-categories/FormMainPersonal";
import FormSection from "./FormSection.jsx";
import FormMainEducation from "./form-main-categories/FormMainEducation";
import FormMainWorkExperience from "./form-main-categories/FormMainWorkExperience";

export default function App() {
   let sections = [
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
   ];
   let activeSectionIndex = 2;

   return (
      <FormSection sections={sections} activeSectionIndex={activeSectionIndex}/>
   );
}