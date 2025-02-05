import { StyledLoadingScreen } from "./LoadingScreen.style";

export default function LoadingScreen({loading}){
    console.log("loading")
    return <StyledLoadingScreen $loading={loading}/>
}