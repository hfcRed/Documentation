const downloads = document.getElementById("downloads");
const users = document.getElementById("users");
const projects = document.getElementById("projects");

async function fetchData() {
    if (sessionStorage.getItem("users")) {
        setCounts();
        return;
    }

    try {
        const userCount = await fetch("https://api.hfcred.dev/animation-repathing/getusers");
        const userCountJson = await userCount.json();

        const projectCount = await fetch("https://api.hfcred.dev/animation-repathing/getprojects");
        const projectCountJson = await projectCount.json();

        sessionStorage.setItem("users", userCountJson);
        sessionStorage.setItem("projects", projectCountJson);
    }
    catch (error) {
        console.error(error);
        return;
    }

    try {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("GitHub timeout")), 5000)
        );
        const githubPromise = await fetch("https://api.github.com/repos/hfcRed/Animation-Repathing/releases");

        const response = await Promise.race([githubPromise, timeoutPromise]);
        if (!response.ok) throw new Error("Could not fetch GitHub releases");

        const githubJson = await response.json();
        if (!githubJson) throw new Error("Could not fetch GitHub releases");

        let downloads = 0;

        for (let release in githubJson) {
            let assets = githubJson[release].assets;
            for (let asset in assets) {
                downloads += assets[asset].download_count;
            }
        }

        sessionStorage.setItem("downloads", downloads);
    }
    catch (error) {
        console.error(error);
        return;
    }

    setCounts();
}

function setCounts() {
    users.innerText = sessionStorage.getItem("users");
    projects.innerText = sessionStorage.getItem("projects");
    downloads.innerText = sessionStorage.getItem("downloads");
}

fetchData();