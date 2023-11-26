import PropTypes from 'prop-types';

export default function FormHeaderNav( {sections, activeSectionId, setActiveSectionId} ) {
   const backButton = <button onClick={() => setActiveSectionId(activeSectionId - 1)}>Back</button>;
   const nextButton = <button onClick={() => setActiveSectionId(activeSectionId + 1)}>Next</button>;

   if (activeSectionId === 0) {
      return (
         <div className="form-nav">
            {nextButton}
         </div>
      )
   } else if (activeSectionId === sections.length - 1) {
      return (
         <div className="form-nav">
            {backButton}
         </div>
      )
   } else {
      return (
         <div className="form-nav">
            {backButton}
            {nextButton}
         </div>
      )
   }

}

FormHeaderNav.propTypes = {
   sections: PropTypes.array.isRequired,
   activeSectionId: PropTypes.number.isRequired,
   setActiveSectionId: PropTypes.func.isRequired
}