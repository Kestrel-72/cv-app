import PropTypes from 'prop-types';

export default function FormHeaderTitle( {title} ) {
   return (
      <div className="form-header">
         <h1>{title}</h1>
      </div>
   )
}

FormHeaderTitle.propTypes = {
   title: PropTypes.string.isRequired
}