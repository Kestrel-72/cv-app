import FormHeaderTitle from "./FormHeaderTitle";
import FormMainPersonal from "./form-main-categories/FormMainPersonal";
import FormSection from "./FormSection.jsx";

export default function App() {
   let sections = [
      {
         title: <FormHeaderTitle title='Personal details'/>,
         main: <FormMainPersonal/>,
         isPicked: true,
         isActive: true
      },
      {
         title: <FormHeaderTitle title='Work experience'/>,
         main: <FormMainPersonal/>,
         isPicked: false,
         isActive: false
      },
      {
         title: <FormHeaderTitle title='Education'/>,
         main: <FormMainPersonal/>,
         isPicked: false,
         isActive: false
      }
   ];

   return (
      <FormSection sections={sections}/>
   );
}