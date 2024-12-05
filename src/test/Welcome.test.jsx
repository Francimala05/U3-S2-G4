import { describe, it,expect, } from "vitest";
import {render, screen,} from "@testing-library/react"
import Welcome from "../components/Welcome";

describe("Welcome component", () =>{
    it("Check component if exist in the page",() => {
        render(<Welcome/>) //montaggio componente nel dom
        const h1 = screen.getByText("Benvenuti in EpiBooks!");
        expect(h1).toBeInTheDocument(); 
    })
})