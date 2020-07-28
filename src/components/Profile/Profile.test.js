import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "./Profile";
import "@testing-library/jest-dom";
import { mockMemberListResponse, mockUser } from "../App/AppMockData";
import { getUser, getMyReps } from "../../apiCalls";
import { UserProvider } from "../App/userContext";

jest.mock("../../apiCalls");

describe("Unit test", () => {
	it("should show a user's profile page with user info and local reps", async () => {
		getUser.mockResolvedValue(mockUser);
		getMyReps.mockResolvedValue(mockMemberListResponse);
		const { getByAltText, getByText, debug } = render(
			<MemoryRouter>
				<UserProvider>
					<Profile />
				</UserProvider>
			</MemoryRouter>
		);

		const email = await waitFor(() => getByText("steve@example.com"));
		expect(email).toBeInTheDocument();

		const firstCard = getByText("Doug", { exact: false });
		expect(firstCard).toBeInTheDocument();
	});
});
