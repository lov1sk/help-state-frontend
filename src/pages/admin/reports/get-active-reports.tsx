import { Label, Select } from "flowbite-react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";

export const GetReportsActive = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (!isAdmin) {
      navigate("/admin/active-reports");
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null; 
  }

  return (
    <div className="pt-20">
      <div className="flex justify-start pb-10">
        <h1 className="font-bold">Lista de ocorrências</h1>
      </div>

      <div className=" pb-10">
        <div className="mb-4 block">
          <Label htmlFor="Categorias" value="Filtro" />
        </div>
        <Select id="countries" required>
          <option>Ativas</option>
          <option>Concluídas</option>
        </Select>
      </div>

      <div>
        <div className="border-4 border-black pb-10">
          <p className="flex justify-start pl-10 pt-3">Status</p>
          <h1 className="flex justify-start pl-5 font-bold">Ocorrência: ID</h1>
          <p className="flex justify-start pl-10 pt-3">Criado em XXXX</p>
          <p className="flex justify-start pl-10 pt-3">descrição</p>
        </div>
      </div>
    </div>
  );
};
