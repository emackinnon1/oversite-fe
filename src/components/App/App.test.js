import React from "react";
import App from "./App";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import {
	mockMemberListResponse,
	mockSingleMemberResponse,
} from "./AppMockData";
import { searchRepsByState, getMemberInfo } from "../../apiCalls";
import { UserProvider } from "./userContext";

jest.mock("../../apiCalls");

describe("App", () => {
	describe("integration tests", () => {
		beforeEach(() => {
			searchRepsByState.mockResolvedValue(mockMemberListResponse);
		});

		it("should pull up a list of reps upon clicking search", async () => {
			const { getByTestId, getByText, debug } = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			fireEvent.click(getByTestId("search-btn"));
			const firstCard = await waitFor(() =>
				getByText("Doug", { exact: false })
			);

			expect(firstCard).toBeInTheDocument();
		});

		it("should filter results", async () => {
			const { getAllByTestId, getByTestId, getByText, debug } = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			fireEvent.click(getByTestId("search-btn"));
			const firstCard = await waitFor(() =>
				getByText("Doug", { exact: false })
			);

			getMemberInfo.mockResolvedValue(mockSingleMemberResponse);
			fireEvent.click(getAllByTestId("card-link")[0]);
			const tweetBtn = await waitFor(() =>
				getByText("330 Hart Senate Office Building", { exact: false })
			);
		});
	});
});
