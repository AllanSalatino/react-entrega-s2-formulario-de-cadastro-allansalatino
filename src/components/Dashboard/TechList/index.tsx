import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { TechContext } from "../../../context/TechContext";
import { Card, List } from "./style";
import {BsTrash} from "react-icons/bs"


export const TechList = () => {
  const { user } = useContext(AuthContext);
  const {removeTech} = useContext(TechContext)

  return (
    <List techs={user?.techs}>
      {user && user?.techs.map((tech) => {
        return <Card key={tech.id}>
          <h3>
            {tech.title}
          </h3>
          <div>
            <p>{tech.status}</p>
            <button onClick={() => removeTech(tech)}><BsTrash style={{fontSize: 18}}/></button>
          </div>
          </Card>;
      })}
    </List>
  );
};
