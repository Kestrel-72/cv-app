export default function deleteForm(originalArray, currentId) {
   let copy = [...originalArray].filter(work => 
      work.id !== currentId
   );
   let result = [];
   for (let i = 0; i < copy.length; i++) {
      result.push(copy[i]);
      copy[i].id = i;
   }
   return result;
}