import React from "react";
import Comentarios from "./Comentarios";
import { Menu } from "../componentes/menu";

const AppSistemaComentarios = () => {
  return (
    <div>
      <Menu />
      <Comentarios idUsuarioActual="1" />
    </div>
  );
};

export default AppSistemaComentarios;
