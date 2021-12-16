import React, { FC, useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ClientOnlyPortal: FC = ({ children }) => {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.getElementById("modal");
		setMounted(true);
	}, []);

	if (!mounted || !ref.current) return null;

	return createPortal(<>{children}</>, ref.current!);
};

export default ClientOnlyPortal;
