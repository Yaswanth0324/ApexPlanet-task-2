// Form Validation
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^\d{10}$/;

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else if (!phonePattern.test(phone)) {
    formMessage.textContent = "Phone number must be exactly 10 digits.";
    formMessage.style.color = "red";
  } else if (name === "" || message === "") {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});


// To-Do List
function addTodo() {
  const taskInput = document.getElementById("todoInput");
  const taskValue = taskInput.value.trim();
  const todoList = document.getElementById("todoList");

  if (taskValue === "") return;

  const li = document.createElement("li");
  li.textContent = taskValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  taskInput.value = "";
}

//image gallary
document.getElementById("imageInput").addEventListener("change", function () {
  const files = this.files;
  const gallery = document.getElementById("gallery");

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const container = document.createElement("div");
      container.className = "image-container";

      const img = document.createElement("img");
      img.src = e.target.result;

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "×";
      delBtn.onclick = () => container.remove();

      container.appendChild(img);
      container.appendChild(delBtn);
      gallery.appendChild(container);
    };
    reader.readAsDataURL(file);
  });

  // Reset input so user can upload the same file again if needed
  this.value = "";
});