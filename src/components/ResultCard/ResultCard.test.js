import React from "react";
import ResultCard from "./ResultCard";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockResultData = {
	first_name: "Gilbert",
	last_name: "Cisneros",
	party: "D",
	role: "Representative",
};

describe("Unit test", () => {
	test("Should show representatives info", () => {
		const { getByText, debug } = render(
			<BrowserRouter>
				<ResultCard {...mockResultData} />
			</BrowserRouter>
		);

		expect(getByText("Gilbert Cisneros")).toBeInTheDocument();
		expect(getByText("D")).toBeInTheDocument();
		expect(getByText("Representative")).toBeInTheDocument();
	});
});
