const useUid = () => {
	const searchParams = new URLSearchParams(window.location.search);
	const id = searchParams.get("id");

	return id;
};
