import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { OccurencesHeader } from "./components/occurences-header";
import { OccurencyItem } from "./components/occurency-item";

export function OccurrencesPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  if (!isAuthenticated) return navigate("/login");

  if (isAdmin) return navigate("/admin");
  return (
    <main className="flex flex-col">
      <OccurencesHeader />
      <section className="mx-10 mt-10 flex flex-col gap-10">
        <OccurencyItem />
        <OccurencyItem />
        <OccurencyItem />
      </section>
    </main>
  );
}
