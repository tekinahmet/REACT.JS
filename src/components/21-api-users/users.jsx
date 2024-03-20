import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const API_URL = "https://65de2e56dccfcd562f5675f7.mockapi.io/api/v1";

const Users = () => {
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		
		fetch(`${API_URL}/users`)
			.then((res) => res.json())
			.then((users) => {
				setUserList(users);
				setLoading(false);
			});
	}, []);

	console.log(userList);

	return (
		<Container className="mt-4">
			<h2>User List</h2>

			{loading ? (
				<div className="text-center">
					<Spinner variant="info" />
				</div>
			) : (
				<Row xs={1} sm={2} md={3} lg={4} className="g-4">
					{userList.map((item) => (
						<Col key={item.id}>
							<UserCard {...item} />
						</Col>
					))}
				</Row>
			)}
		</Container>
	);
};

export default Users;
