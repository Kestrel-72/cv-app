import PropTypes from 'prop-types';

export default function FormHeaderNav( {sections, activeSectionIndex, setActiveSectionIndex} ) {
   const backButton = <button onClick={() => setActiveSectionIndex(activeSectionIndex - 1)}>Back</button>;
   const nextButton = <button onClick={() => setActiveSectionIndex(activeSectionIndex + 1)}>Next</button>;

   if (activeSectionIndex === 0) {
      return (
         <div className="form-nav">
            {nextButton}
         </div>
      )
   } else if (activeSectionIndex === sections.length - 1) {
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
   activeSectionIndex: PropTypes.number.isRequired,
   setActiveSectionIndex: PropTypes.func.isRequired
}