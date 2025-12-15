document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((sec) => {
    sec.addEventListener("click", (e) => {
      if (e.target.id === "basic-commands") {
        alert("You clicked on Basic Commands section!");
      }

      sec.classList.toggle("highlight");
    });
  });
});
