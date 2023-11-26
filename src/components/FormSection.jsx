import PropTypes from 'prop-types';
import FormHeaderNav from './FormHeaderNav';

export default function FormSection( {sections, activeSectionId, setActiveSectionId} ) {
   const activeSection = sections.find((section) => section.id === activeSectionId);
   // const pickedSections = sections.filter((section) => section.isPicked === true);
   // console.log(activeSection)
   // console.log({activeSection});
   // console.log({pickedSections});
   return (
      <div className="form-section">
         {activeSection.title}
         <FormHeaderNav 
            sections={sections} 
            activeSectionId={activeSectionId} 
            setActiveSectionId={setActiveSectionId}
         />
         {activeSection.main}
      </div>
   )
}

FormSection.propTypes = {
   sections: PropTypes.array.isRequired,
   activeSectionId: PropTypes.number.isRequired,
   setActiveSectionId: PropTypes.func.isRequired
}