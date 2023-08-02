function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}-${randomNum}`;
}

// Function to edit an object with a specific ID
function editObjectById(arr, newData) {
  const index = arr.findIndex((item) => item.id === newData.id);

  const newArr = [...arr];

  if (index !== -1) {
    newArr[index] = { ...arr[index], ...newData };
  } else {
    console.log('Object with ID not found!');
  }

  return newArr;
}

export { generateUniqueId, editObjectById };
