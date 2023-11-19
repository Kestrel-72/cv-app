import PropTypes from 'prop-types';

export default function FormHeaderNav( {sections, activeSectionIndex} ) {
   const backButton = <button>Back</button>;
   const nextButton = <button>Next</button>;

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
   activeSectionIndex: PropTypes.number.isRequired
}