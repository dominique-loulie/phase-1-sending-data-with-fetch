// Add your code here
function submitData(name, email) {
    const formData = { name, email };
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configurationObject)
      .then(resp => resp.json())
      .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;
      })
      .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }