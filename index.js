fetch("./student.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    studentData = data;
    mapStudentsToTable(studentData);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  function mapStudentsToTable(data) {
    const tbody = document.querySelector("tbody"); // Get the table body element
  
    data.forEach(student => {
      const row = document.createElement("tr"); // Create a table row
  
      // Create a table cell for the student's ID
      const idCell = document.createElement("td");
      idCell.textContent = student.id;
  
      // Create a table cell for the student's name with image and full name
      const nameCell = document.createElement("td");
      const fullName = `${student.first_name} ${student.last_name}`;
      nameCell.innerHTML = `<img src="${student.img_src}" alt="${fullName}" class="student-image">${fullName}`;
  
      // Create a table cell for the student's gender
      const genderCell = document.createElement("td");
      genderCell.textContent = student.gender;
  
      // Create a table cell for the student's class
      const classCell = document.createElement("td");
      classCell.textContent = student.class;
  
      // Create a table cell for the student's marks
      const marksCell = document.createElement("td");
      marksCell.textContent = student.marks;
  
      // Create a table cell for "passing" or "failed" based on the boolean value
      const passingCell = document.createElement("td");
      passingCell.textContent = student.passing ? "Passing" : "Failed";
  
      // Create a table cell for the student's email
      const emailCell = document.createElement("td");
      emailCell.textContent = student.email;
  
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(genderCell);
      row.appendChild(classCell);
      row.appendChild(marksCell);
      row.appendChild(passingCell);
      row.appendChild(emailCell);
  

      tbody.appendChild(row);
    });
  }



function updateTable(sortedData) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = '';
  
    
    sortedData.forEach(student => {
      const row = document.createElement("tr");
  
      
      const idCell = document.createElement("td");
      idCell.textContent = student.id;
  
      
      const nameCell = document.createElement("td");
      const fullName = `${student.first_name} ${student.last_name}`;
      nameCell.innerHTML = `<img src="${student.img_src}" alt="${fullName}" class="student-image">${fullName}`;
  
     
      const genderCell = document.createElement("td");
      genderCell.textContent = student.gender;
  
      
      const classCell = document.createElement("td");
      classCell.textContent = student.class;
  
      const marksCell = document.createElement("td");
      marksCell.textContent = student.marks;
  
      
      const passingCell = document.createElement("td");
      passingCell.textContent = student.passing ? "Passing" : "Failed";
  
     
      const emailCell = document.createElement("td");
      emailCell.textContent = student.email;
  
      
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(genderCell);
      row.appendChild(classCell);
      row.appendChild(marksCell);
      row.appendChild(passingCell);
      row.appendChild(emailCell);
  
    
      tbody.appendChild(row);
    });
  }
  
  
  let studentData; 
  document.getElementById("sortAsc").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => (a.first_name + ' ' + a.last_name).localeCompare(b.first_name + ' ' + b.last_name));
    updateTable(studentData);
  });
  

  document.getElementById("sortDesc").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => (b.first_name + ' ' + b.last_name).localeCompare(a.first_name + ' ' + a.last_name));
    updateTable(studentData);
  });
  

  document.getElementById("sortByMarks").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => a.marks - b.marks);
    updateTable(studentData);
  });
  
 
  document.getElementById("sortByPassing").addEventListener("click", () => {
    const passingStudents = studentData.filter(student => student.passing);
    updateTable(passingStudents);
  });
  

  document.getElementById("sortByClass").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => a.class.localeCompare(b.class));
    updateTable(studentData);
  });

 
document.getElementById("sortByClass").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => a.class.localeCompare(b.class));
    updateTable(studentData);
  });
  
 
  document.getElementById("sortByGender").addEventListener("click", () => {
    studentData = studentData.slice().sort((a, b) => a.gender.localeCompare(b.gender));
    updateTable(studentData);
  });
  
  



















