import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import { Menu } from "../componentes/menu";

const DefaultComponent = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "Servio",
      userProfile: "www.linkedin.com/serviolopez10/",
      text: "No me gusta Lost 🤔",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",

      replies: [  {
        userId: "03c",
        comId: "018",
        fullName: "Sam",
        userProfile: "https://www.linkedin.com/in/samcodehub/",
        text: "Amo  Lost!",
        avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
        replies: []
      },
      {
        userId: "04c",
        comId: "019",
        fullName: "Grise",
        userProfile: "https://www.linkedin.com/in/griselda-r-6b56b115/",
        text: "Me encantan los documentales...",
        avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
        replies: []
      }
    ]
    },
 
    {
      userId: "05c",
      comId: "020",
      fullName: "Cristina",
      userProfile: "https://www.linkedin.com/in/cristina-de-micheli/",
      text: "mmmmm",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: []
    }
  ];
  return (
    <div>
    <Menu/>
    <div className="bg-light">
        <CommentSection
          currentUser={{
            currentUserId: "01a",
            currentUserImg:
              "https://ui-avatars.com/api/name=Riya&background=random",
            currentUserProfile: "https://www.linkedin.com/in/mtgl/",
            currentUserFullName: "Tere"
          }}
          logIn={{
            loginLink: "http://localhost:3001/",
            signupLink: "http://localhost:3001/"
          }}
          commentData={data}
        />
    </div>
    </div>
  );
};

export default DefaultComponent;