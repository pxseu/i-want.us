import React, { FC } from "react";
import styled from "styled-components";
import { InternalUrl } from "../Url";

const Nav = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
`;

const Navbar: FC = () => (
	<Nav>
		<InternalUrl href="/url">Create</InternalUrl>
		<InternalUrl href="/credits">Credits</InternalUrl>
	</Nav>
);

export default Navbar;
