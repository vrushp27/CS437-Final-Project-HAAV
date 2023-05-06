export const trashCansData = 
  fetch('localhost:5000/api/trash-cans')
  .then(response => response.json())
  .then(data => {
    const trashCansData = data;
    console.log(trashCansData);
  })
  .catch(error => console.error(error));

export default trashCansData;
