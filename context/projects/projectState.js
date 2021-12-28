import React, { useState } from "react";
import ProjectContext from "./projectContext";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

const ProjectState = (props) => {
  const host = "http://localhost:5000";
  const projectsInitial = [];

  const [projects, setProjects] = useState(projectsInitial);

  // add Project
  const addProject = async (name, date) => {
    // API call
    const data = {
      id: doc.id,
      Name: name,
      Date: date,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await db
      .collection("Projects")
      .add(data)
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  };

  // Get all projects
  const getProjects = async () => {};

  // Delete a project
  const deleteProject = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // const json = response.json();
    const newProjects = projects.filter((project) => {
      return project._id !== id;
    });
    setNotes(newProjects);
  };

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, getProjects, deleteProject }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
