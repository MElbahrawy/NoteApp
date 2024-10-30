const FetchUsers = async (api) => {
    try {
        const response = await fetch(api);
        const fetchedUsers = await response.json();
        return fetchedUsers;
    } catch (err) {
        console.log("Error fetching users", err);
        return err;
    }
};
export default FetchUsers;
