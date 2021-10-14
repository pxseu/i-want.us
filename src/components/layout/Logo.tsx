import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/comp/Theme";

const Wrapper = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	/* border-radius: 10px; */
	padding: 5px 10px;
	outline: none;

	transition: all 0.1s ease-in-out;
	&:hover {
		background-color: ${theme.colors.card}50;
	}
`;

const Logo: FC = () => (
	<Link href="/" passHref>
		<Wrapper>
			<svg width="200" height="40" viewBox="0 0 234 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M10.66 15.28C9.31 15.28 8.2 14.89 7.33 14.11C6.49 13.3 6.07 12.31 6.07 11.14C6.07 9.94 6.49 8.95 7.33 8.17C8.2 7.36 9.31 6.955 10.66 6.955C11.98 6.955 13.06 7.36 13.9 8.17C14.77 8.95 15.205 9.94 15.205 11.14C15.205 12.31 14.77 13.3 13.9 14.11C13.06 14.89 11.98 15.28 10.66 15.28ZM14.485 17.89V43H6.79V17.89H14.485ZM39.4115 24.01V30.4H19.6115V24.01H39.4115ZM82.21 17.89L75.415 43H66.91L62.95 26.71L58.855 43H50.395L43.555 17.89H51.25L54.805 35.845L59.035 17.89H67.18L71.455 35.755L74.965 17.89H82.21ZM83.6145 30.4C83.6145 27.82 84.0945 25.555 85.0545 23.605C86.0445 21.655 87.3795 20.155 89.0595 19.105C90.7395 18.055 92.6145 17.53 94.6845 17.53C96.4545 17.53 97.9995 17.89 99.3195 18.61C100.669 19.33 101.704 20.275 102.424 21.445V17.89H110.119V43H102.424V39.445C101.674 40.615 100.624 41.56 99.2745 42.28C97.9545 43 96.4095 43.36 94.6395 43.36C92.5995 43.36 90.7395 42.835 89.0595 41.785C87.3795 40.705 86.0445 39.19 85.0545 37.24C84.0945 35.26 83.6145 32.98 83.6145 30.4ZM102.424 30.445C102.424 28.525 101.884 27.01 100.804 25.9C99.7545 24.79 98.4645 24.235 96.9345 24.235C95.4045 24.235 94.0995 24.79 93.0195 25.9C91.9695 26.98 91.4445 28.48 91.4445 30.4C91.4445 32.32 91.9695 33.85 93.0195 34.99C94.0995 36.1 95.4045 36.655 96.9345 36.655C98.4645 36.655 99.7545 36.1 100.804 34.99C101.884 33.88 102.424 32.365 102.424 30.445ZM130.986 17.62C133.926 17.62 136.266 18.58 138.006 20.5C139.776 22.39 140.661 25 140.661 28.33V43H133.011V29.365C133.011 27.685 132.576 26.38 131.706 25.45C130.836 24.52 129.666 24.055 128.196 24.055C126.726 24.055 125.556 24.52 124.686 25.45C123.816 26.38 123.381 27.685 123.381 29.365V43H115.686V17.89H123.381V21.22C124.161 20.11 125.211 19.24 126.531 18.61C127.851 17.95 129.336 17.62 130.986 17.62ZM160.004 36.475V43H156.089C153.299 43 151.124 42.325 149.564 40.975C148.004 39.595 147.224 37.36 147.224 34.27V24.28H144.164V17.89H147.224V11.77H154.919V17.89H159.959V24.28H154.919V34.36C154.919 35.11 155.099 35.65 155.459 35.98C155.819 36.31 156.419 36.475 157.259 36.475H160.004ZM167.89 43.36C166.54 43.36 165.43 42.97 164.56 42.19C163.72 41.38 163.3 40.39 163.3 39.22C163.3 38.02 163.72 37.015 164.56 36.205C165.43 35.395 166.54 34.99 167.89 34.99C169.21 34.99 170.29 35.395 171.13 36.205C172 37.015 172.435 38.02 172.435 39.22C172.435 40.39 172 41.38 171.13 42.19C170.29 42.97 169.21 43.36 167.89 43.36ZM201.785 17.89V43H194.09V39.58C193.31 40.69 192.245 41.59 190.895 42.28C189.575 42.94 188.105 43.27 186.485 43.27C184.565 43.27 182.87 42.85 181.4 42.01C179.93 41.14 178.79 39.895 177.98 38.275C177.17 36.655 176.765 34.75 176.765 32.56V17.89H184.415V31.525C184.415 33.205 184.85 34.51 185.72 35.44C186.59 36.37 187.76 36.835 189.23 36.835C190.73 36.835 191.915 36.37 192.785 35.44C193.655 34.51 194.09 33.205 194.09 31.525V17.89H201.785ZM217.527 43.36C215.337 43.36 213.387 42.985 211.677 42.235C209.967 41.485 208.617 40.465 207.627 39.175C206.637 37.855 206.082 36.385 205.962 34.765H213.567C213.657 35.635 214.062 36.34 214.782 36.88C215.502 37.42 216.387 37.69 217.437 37.69C218.397 37.69 219.132 37.51 219.642 37.15C220.182 36.76 220.452 36.265 220.452 35.665C220.452 34.945 220.077 34.42 219.327 34.09C218.577 33.73 217.362 33.34 215.682 32.92C213.882 32.5 212.382 32.065 211.182 31.615C209.982 31.135 208.947 30.4 208.077 29.41C207.207 28.39 206.772 27.025 206.772 25.315C206.772 23.875 207.162 22.57 207.942 21.4C208.752 20.2 209.922 19.255 211.452 18.565C213.012 17.875 214.857 17.53 216.987 17.53C220.137 17.53 222.612 18.31 224.412 19.87C226.242 21.43 227.292 23.5 227.562 26.08H220.452C220.332 25.21 219.942 24.52 219.282 24.01C218.652 23.5 217.812 23.245 216.762 23.245C215.862 23.245 215.172 23.425 214.692 23.785C214.212 24.115 213.972 24.58 213.972 25.18C213.972 25.9 214.347 26.44 215.097 26.8C215.877 27.16 217.077 27.52 218.697 27.88C220.557 28.36 222.072 28.84 223.242 29.32C224.412 29.77 225.432 30.52 226.302 31.57C227.202 32.59 227.667 33.97 227.697 35.71C227.697 37.18 227.277 38.5 226.437 39.67C225.627 40.81 224.442 41.71 222.882 42.37C221.352 43.03 219.567 43.36 217.527 43.36Z"
					fill="url(#paint0_linear_202:4)"
				/>
				<path
					d="M17 8.69254C17 6.65319 15.3944 5 13.414 5C12.2118 5 11.1509 5.61106 10.5 6.54504C9.84909 5.61106 8.78823 5 7.58636 5C5.60565 5 4 6.65281 4 8.69254C4 8.98141 4.03562 9.26131 4.09667 9.5311C4.59458 12.7166 8.03447 16.0772 10.5 17C12.9652 16.0772 16.4054 12.7166 16.9026 9.53148C16.9644 9.26169 17 8.98179 17 8.69254V8.69254Z"
					fill={theme.colors.brand}
				/>
				<defs>
					<linearGradient
						id="paint0_linear_202:4"
						x1="4"
						y1="28.5"
						x2="230"
						y2="27"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor={theme.colors.brand} />
						<stop offset="1" stopColor={theme.colors.brand} />
					</linearGradient>
				</defs>
			</svg>
		</Wrapper>
	</Link>
);

export default Logo;