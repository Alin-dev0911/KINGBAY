import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (hash) {
				const sectionId = decodeURIComponent(hash.replace("#", ""));
				const section = document.getElementById(sectionId);

				if (section) {
					section.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});

					return;
				}
			}

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "auto",
			});
		}, 100);

		return () => clearTimeout(timeout);
	}, [pathname, hash]);

	return null;
}
