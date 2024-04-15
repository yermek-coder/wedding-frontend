import api from "~/services/api";

export default function () {
    function logout() {
        return api.post("logout");
    }

    function login(user) {
        return api.post("login", user);
    }

    return { logout, login };
}
