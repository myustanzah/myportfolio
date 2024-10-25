import Navbar from "./component/navbar";
import PartOne from "./component/part1";
import PartTwo from "./component/part2";

export default function Home(){
    return (
        <div>
            <Navbar></Navbar>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
        </div>
    )
}