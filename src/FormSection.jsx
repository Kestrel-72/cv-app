import PropTypes from 'prop-types';

export default function FormSection( {sections} ) {
   const activeSection = sections.find(section => section.isActive === true);
   const pickedSections = sections.filter((section) => section.isPicked === true);
   console.log({activeSection});
   console.log({pickedSections});
   return (
      <div className="form-section">
         {activeSection.title}
         {activeSection.main}
      </div>
   )
}

FormSection.propTypes = {
   sections: PropTypes.array.isRequired,
}