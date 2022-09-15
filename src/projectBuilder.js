const Project = (title, todos) => {
  return { title, todos }
};

const makeProject = () => {
  const makeProjectButton = document.getElementById("make-project-button");
  makeProjectButton.onclick = () => {
    const project = Project(document.getElementById("project-title").value, []);
    //displayProject(project);
    console.log(project);
    console.log("HELLO");
  }
};

export { makeProject }