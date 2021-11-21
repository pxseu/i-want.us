import { useState, useEffect } from "react";

const useDelayUnmount = (mounted: boolean, delay: number) => {
	const [unmount, setUnmount] = useState(mounted);

	useEffect(() => {
		if (mounted) {
			const timer = setTimeout(() => setUnmount(true), delay);

			return () => clearTimeout(timer);
		}
	}, [mounted, delay]);

	return unmount;
};

export default useDelayUnmount;
