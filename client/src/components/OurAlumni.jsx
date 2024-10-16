import React, { useEffect, useState } from "react";
import UserCard from "./UserCards";

const OurAlumni = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDarkMode(matchDark.matches);

		const listener = (e) => setIsDarkMode(e.matches);
		matchDark.addListener(listener);

		return () => matchDark.removeListener(listener);
	}, []);

	const cardStyles = {
		backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
		color: isDarkMode ? "#f5f5f5" : "#000000",
	};

	const user = {
		name: "AbhiShek Rao",
		email: "johndoe@example.com",
		avatar: "https://i.postimg.cc/q7HVzS6f/Abhi.jpg",
		city: "Gorakhpur",
		role: "Web Developer",
		passOut: "MCA 2025",
	};

	return (
		<>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap -mx-4" style={{ marginTop: "10vh" }}>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<UserCard user={user} cardStyles={cardStyles} />
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<UserCard user={user} cardStyles={cardStyles} />
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<UserCard user={user} cardStyles={cardStyles} />
					</div>
				</div>
			</div>
		</>
	);
};

export default OurAlumni;
