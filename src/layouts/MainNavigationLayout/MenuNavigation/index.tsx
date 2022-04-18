import DrugsPillAddPlus from "assets/icons/DrugsPillAddPlus";
import { ReactNode } from "react";

interface IMenuNavigation {
  children: ReactNode;
}

export function MenuNavigation() {
  return (
    <div>
      <div>
        <DrugsPillAddPlus />
      </div>
    </div>
  );
}
