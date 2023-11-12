import PropTypes from 'prop-types';

export default function FormHeader( {title} ) {
   return (
      <div className="form-header">
         <h1>{title}</h1>
      </div>
   )
}

FormHeader.propTypes = {
   title: PropTypes.string.isRequired
}