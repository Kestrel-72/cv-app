import PropTypes from 'prop-types';

export default function FormHeaderNav( {index} ) {
   const backButton = <button>Back</button>;
   const nextButton = <button>Next</button>;

   return (
      <div className="back-next-buttons">
         {index > 0 ? backButton : null}
         {nextButton}
      </div>
   )
   
}

FormHeaderNav.propTypes = {
   index: PropTypes.number.isRequired,
}