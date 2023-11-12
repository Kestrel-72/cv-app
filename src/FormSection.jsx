import PropTypes from 'prop-types';
import FormHeader from './FormHeader.jsx';
import FormHeaderNav from './FormHeaderNav.jsx';
import FormMain from './FormMain.jsx';

export default function FormSection( {title, index} ) {
   return (
      <div className="form-section">
         <FormHeader title={title}/>
         <FormHeaderNav index={index}/>
         <FormMain/>
      </div>
   )
}

FormSection.propTypes = {
   title: PropTypes.string.isRequired,
   index: PropTypes.number.isRequired,
}