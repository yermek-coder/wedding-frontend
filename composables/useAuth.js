import api from "~/services/api";

export default function () {
    const router = useRouter();

    function logout() {
        api.post("logout").then(() => {
            router.push("/login");
        });
    }

    function login(user) {
        api.post("login", user).then(() => {
            router.push("/admin");
        });
    }

    return { logout, login };
}
