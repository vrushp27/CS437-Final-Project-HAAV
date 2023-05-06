const trashData = [
  fetch('localhost:5000/api/trash-data')
  .then(response => response.json())
  .then(data => {
    const trashData = data;
    console.log(trashData);
  })
  .catch(error => console.error(error));
]
  
 export default trashData;
  
