import FormSection from "./FormSection";

export default function App() {
   let sections = [
      {
         name: 'Personal details'
      }
   ];

   return (
      <FormSection title={sections[0].name} index={sections.length} />
   );
}