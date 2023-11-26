import PropTypes from 'prop-types';

export default function AllForms({sections, setActiveSectionId}) {
   const listItems = sections.map(section =>
      <li key={section.id} className='all-forms-list-item'>
         <button 
            className="all-forms-list-item-button"
            onClick={() => {
               setActiveSectionId(section.id)
            }}
         >
            {section.titleT}
         </button>
      </li>
    );

   return (
      <div className="all-forms">
         <ul className="all-forms-list">
            {listItems}
         </ul>
      </div>
   )
}

AllForms.propTypes = {
   sections: PropTypes.array.isRequired,
   setActiveSectionId: PropTypes.func.isRequired
}