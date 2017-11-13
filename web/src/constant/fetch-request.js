export const post = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            body: JSON.stringify(data)
        });

        const status = res.status;
        return {status};
    } catch (ex) {
        alert(ex);
        return {status: ex.status}
    }
};