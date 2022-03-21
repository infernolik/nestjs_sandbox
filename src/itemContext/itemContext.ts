import { createContext } from "react";
import { contextInterface } from "../tsTypes";

const itemContext = createContext<contextInterface | null>(null);

export default itemContext;
