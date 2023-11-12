import PropTypes from 'prop-types';

export default function FormMainPart( {label, placeholder} ) {
   return (
      <div>
         <label>{label}</label>
         <input type="text" placeholder={placeholder}/>
      </div>
   );
}

FormMainPart.propTypes = {
   label: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired
}