import useData from "./useData";
import { PlatForm } from "./useGame";


export interface PlatForms {
    id: number
    name: string
}

const usePlatForm = () => useData<PlatForms>('/platforms/lists/parents') 


export default usePlatForm