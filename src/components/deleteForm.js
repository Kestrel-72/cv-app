export default function deleteForm(originalArray, currentIndex) {
   let copy = [...originalArray].filter(work => 
      work.index !== currentIndex
   );
   let result = [];
   for (let i = 0; i < copy.length; i++) {
      result.push(copy[i]);
      copy[i].index = i;
   }
   return result;
}