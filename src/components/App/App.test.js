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
	sendTweet,
} from "../../apiCalls";
import { UserProvider } from "./userContext";

jest.mock("../../apiCalls");

describe("App", () => {
	describe("integration tests", () => {
		it("should pull up a list of reps upon clicking search", async () => {
			const { getByTestId, getByText, debug } = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			searchRepsByState.mockResolvedValue(mockMemberListResponse);
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

			searchRepsByState.mockResolvedValue(mockMemberListResponse);
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

			searchRepsByState.mockResolvedValue(mockMemberListResponse);
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

		it("should show a user's profile page with user info and local reps", async () => {
			const { getByAltText, getByText } = render(
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

		it("should take user back to home page when the logo is clicked", async () => {
			const { getByAltText, getByText, debug, getByTestId } = render(
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

			const logo = getByAltText("logo");
			fireEvent.click(logo);

			expect(getByTestId("search-btn")).toBeInTheDocument();
		});

		it("should let the user know a tweet has sent", async () => {
			const {
				getByAltText,
				getAllByTestId,
				getByTestId,
				getByText,
				debug,
			} = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			searchRepsByState.mockResolvedValue(mockMemberListResponse);
			fireEvent.click(getByTestId("search-btn"));
			const firstCard = await waitFor(() =>
				getByText("Doug", { exact: false })
			);

			getMemberInfo.mockResolvedValue(mockSingleMemberResponse);
			fireEvent.click(getAllByTestId("card-link")[0]);

			const tweetBtn = await waitFor(() =>
				getByText("Tweet Doug Jones", { exact: false })
			);
			expect(tweetBtn).toBeInTheDocument();
			fireEvent.change(getByTestId("twitter-msg"), {
				target: { value: "I love you, Doug" },
			});

			await act(async () => fireEvent.submit(tweetBtn));
			sendTweet.mockResolvedValue(true);
			const sendingMsg = await waitFor(() => getByText("Sending..."));
			expect(sendingMsg).toBeInTheDocument();
			expect(tweetBtn).toBeInTheDocument();
		});

		it("should let the user know when their twitter message has reached the character limit", async () => {
			const {
				getByAltText,
				getAllByTestId,
				getByTestId,
				getByText,
				debug,
			} = render(
				<MemoryRouter>
					<UserProvider>
						<App />
					</UserProvider>
				</MemoryRouter>
			);

			searchRepsByState.mockResolvedValue(mockMemberListResponse);
			fireEvent.click(getByTestId("search-btn"));
			const firstCard = await waitFor(() =>
				getByText("Doug", { exact: false })
			);

			getMemberInfo.mockResolvedValue(mockSingleMemberResponse);
			fireEvent.click(getAllByTestId("card-link")[0]);

			const tweetBtn = await waitFor(() =>
				getByText("Tweet Doug Jones", { exact: false })
			);

			const longMessage =
				"thisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmessagethisisalongmess";

			expect(tweetBtn).toBeInTheDocument();
			await act(async () => {
				fireEvent.change(getByTestId("twitter-msg"), {
					target: { value: longMessage },
				});
			});

			expect(getByText("Character limit reached!")).toBeInTheDocument();
		});
	});
});
