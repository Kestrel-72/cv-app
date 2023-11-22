import PropTypes from 'prop-types';

export default function AllForms({sections, setActiveSectionIndex}) {
   const listItems = sections.map(section =>
      <li key={section.index} className='all-forms-list-item'>
         <button 
            className="all-forms-list-item-button"
            onClick={() => {
               setActiveSectionIndex(section.index)
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
   setActiveSectionIndex: PropTypes.func.isRequired
}