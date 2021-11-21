import React, { FC, memo, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { theme } from "../Theme";
import { InternalUrl } from "../Url";
import Logo from "./Logo";
import ClientOnlyPortal from "../Portal";

const paths = {
	Create: "/url",
	Credits: "/credits",
} as const;

const Nav = styled(motion.nav)`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
`;

const NavMobile = styled(Nav)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 1.5rem;
	background: none;
	border: none;
	padding: 10px;
	border-radius: 5px;
	transition: background-color 0.1s ease-in-out;
	color: ${theme.colors.brandDark};

	width: 1.5em;
	height: 1.5em;

	&:hover {
		background-color: ${theme.colors.fontDark}50;
	}
`;

const Span = styled(motion.span)`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const iconVariants: Variants = {
	initial: {
		rotate: 0,
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	exit: {
		rotate: 180,
		scale: 0,
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const NavButton: FC<{
	open: boolean;
	onClick: () => void;
}> = ({ open, onClick }) => (
	<Button
		onClick={onClick}
		onKeyDown={(e) => {
			if (e.key === "Enter") {
				onClick();
			}
		}}
		tabIndex={0}
	>
		<AnimatePresence initial={false}>
			{open ? (
				<Span key="nav-close" variants={iconVariants} animate="animate" initial="initial">
					<AiOutlineClose />
				</Span>
			) : (
				<Span key="nav-open" variants={iconVariants} animate="animate" initial="initial">
					<AiOutlineMenu />
				</Span>
			)}
		</AnimatePresence>
	</Button>
);

const Header = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	width: 100%;
	padding: ${theme.fontSize.m};
	padding-bottom: ${theme.fontSize.s};
	background-color: ${theme.colors.header};
	backdrop-filter: blur(5px);
	justify-content: space-between;
	align-items: center;
	padding: 10px 15px;
	z-index: 10;
`;

const NavUrlsMemo = (() => {
	const NavUrls: FC = () => (
		<>
			{Object.keys(paths).map((key) => (
				<InternalUrl key={key} href={paths[key as keyof typeof paths]}>
					{key}
				</InternalUrl>
			))}
		</>
	);

	return memo(NavUrls);
})();

const navVariants: Variants = {
	initial: {
		opacity: 0,
		y: -40,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

const portalVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0,
		},
	},
};

const Portal = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5000;
	background-color: ${theme.colors.background}f0;
`;

const Position = styled.div`
	position: absolute;
	right: 15px;
	top: 20px;
`;

interface State {
	open: boolean;
	small: boolean;
	loaded: boolean;
}

type Action = { type: "toggle" } | { type: "large" } | { type: "small" } | { type: "loaded" };

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "toggle":
			return { ...state, open: !state.open };
		case "large":
			return { ...state, small: false, open: false };
		case "small":
			return { ...state, small: true };
		case "loaded":
			return { ...state, loaded: true };
		default:
			return state;
	}
};

const FuncHeader: FC = () => {
	const [state, dispatch] = React.useReducer(reducer, {
		open: false,
		small: false,
		loaded: false,
	});

	useEffect(() => {
		dispatch({ type: "loaded" });
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > parseInt(theme.breakpoint.md.slice(0, -2), 10)) {
				if (state.small) dispatch({ type: "large" });
				return 0;
			}

			if (!state.small) dispatch({ type: "small" });
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [state, dispatch]);

	return (
		<>
			<ClientOnlyPortal>
				<AnimatePresence>
					{state.open && (
						<Portal
							variants={portalVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.1, delayChildren: 0.2 }}
						>
							<NavMobile variants={navVariants}>
								<NavUrlsMemo />
							</NavMobile>
							<Position>
								<NavButton onClick={() => dispatch({ type: "toggle" })} open={state.open} />
							</Position>
						</Portal>
					)}
				</AnimatePresence>
			</ClientOnlyPortal>
			<Header>
				<Logo />
				{!state.loaded ||
					(state.small ? (
						<NavButton onClick={() => dispatch({ type: "toggle" })} open={state.open} />
					) : (
						<Nav>
							<NavUrlsMemo />
						</Nav>
					))}
			</Header>
		</>
	);
};

export default FuncHeader;
