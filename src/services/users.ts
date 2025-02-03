export async function getStudents(page: number=1, limit: number=10) {
    return await fetch(`/api/users?limit=${limit}&skip=${(page-1)*limit}`)
        .then(response => response.json()).then(resp => resp.users);
}