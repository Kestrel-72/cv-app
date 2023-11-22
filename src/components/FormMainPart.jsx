import PropTypes from 'prop-types';

export default function FormMainPart( {label, placeholder} ) {
   return (
      <div className="form-main-part">
         <label>{label}</label>
         <input type="text" 
            placeholder={placeholder}
         />
      </div>
   );
}

FormMainPart.propTypes = {
   label: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   value: PropTypes.string
}