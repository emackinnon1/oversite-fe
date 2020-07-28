export const mockMemberListResponse = {
	results: [
		{
			senate: [
				{
					first_name: "Doug",
					id: "J000300",
					image:
						"https://theunitedstates.io/images/congress/original/J000300.jpg",
					last_name: "Jones",
					party: "Democrat",
					role: "Senator, 2nd Class",
				},
				{
					first_name: "Richard",
					id: "S000320",
					image:
						"https://theunitedstates.io/images/congress/original/S000320.jpg",
					last_name: "Shelby",
					party: "Republican",
					role: "Senator, 3rd Class",
				},
			],
		},
		{
			house: [
				{
					first_name: "Bradley",
					id: "B001289",
					image:
						"https://theunitedstates.io/images/congress/original/B001289.jpg",
					last_name: "Byrne",
					party: "Republican",
					role: "Representative",
				},
			],
		},
	],
};

export const mockSingleMemberResponse = [
	{
		address: "330 Hart Senate Office Building",
		chamber: "Senate",
		contact_form_url: "https://www.jones.senate.gov/content/contact-senator",
		district: null,
		facebook: "https://www.facebook.com/senatordougjones",
		first_name: "Doug",
		id: "J000300",
		image: "https://theunitedstates.io/images/congress/original/J000300.jpg",
		last_name: "Jones",
		party: "Democrat",
		phone: "202-224-4124",
		role: "Senator, 2nd Class",
		state: "AL",
		twitter_handle: "sendougjones",
		twitter_url: "https://twitter.com/sendougjones",
		website: "https://www.jones.senate.gov",
		youtube: null,
	},
];
