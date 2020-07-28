import React from "react";
import { render, getByText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("dummy test", () => {
	const { getByAltText } = render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>
	);

	expect(getByAltText("logo")).toBeInTheDocument();
});
