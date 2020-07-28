import React from "react";
import App from "./App";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import {
	mockMemberListResponse,
	mockSingleMemberResponse,
	mockUser,
} from "./AppMockData";
import {
	searchRepsByState,
	getMemberInfo,
	getUser,
	getMyReps,
} from "../../apiCalls";
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

		it("should show a single member's information upon clicking their card", async () => {
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
			const address = await waitFor(() =>
				getByText("330 Hart Senate Office Building", { exact: false })
			);

			expect(address).toBeInTheDocument();
		});

		it("should filter results", async () => {
			const {
				getAllByTestId,
				getByTestId,
				getByText,
				getAllByText,
				debug,
				queryByText,
			} = render(
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

			const democratFilterBtn = await waitFor(
				() => getAllByText("Democrat")[1]
			);
			fireEvent.click(democratFilterBtn);

			expect(queryByText("Richard", { exact: false })).toBeNull();
		});

		it("should show a user's profile page", async () => {
			const {
				getAllByTestId,
				getByTestId,
				getByAltText,
				getByText,
				getAllByText,
				debug,
				queryByText,
			} = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			const profileBtn = getByAltText("profile avatar");
			expect(profileBtn).toBeInTheDocument();

			getUser.mockResolvedValue(mockUser);
			getMyReps.mockResolvedValue(mockMemberListResponse);

			fireEvent.click(profileBtn);

			const email = await waitFor(() => getByText("steve@example.com"));
			expect(email).toBeInTheDocument();

			const firstCard = getByText("Doug", { exact: false });
			expect(firstCard).toBeInTheDocument();
		});
	});
});
