import { describe,it,expect } from "vitest";
import {render, screen} from "@testing-library/react"
import BookList from "../components/BookList.jsx"
import fantasy from "../data/fantasy.json"

describe("BookList functionalites", () =>{
    it("look for the same card number as contained in the json file",() => {
        render(<BookList books={fantasy}/>) //montaggio componente nel dom

        const cards = screen.findAllByTestId("book-card");
        expect(cards).toHaveLenght(fantasy.length); 
    })
})