const downloads = document.getElementById("downloads");
const users = document.getElementById("users");
const projects = document.getElementById("projects");
const paths = document.getElementById("paths");

async function fetchData() {
    if (sessionStorage.getItem("users")) {
        setCounts();
        return;
    }

    try {
        const userCount = await fetch("https://animation-repathing.hfcred.workers.dev/getusers");
        const userCountJson = await userCount.json();

        const projectCount = await fetch("https://animation-repathing.hfcred.workers.dev/getprojects");
        const projectCountJson = await projectCount.json();

        const pathCount = await fetch("https://animation-repathing.hfcred.workers.dev/getpaths");
        const pathCountJson = await pathCount.json();

        sessionStorage.setItem("users", userCountJson);
        sessionStorage.setItem("projects", projectCountJson);
        sessionStorage.setItem("paths", pathCountJson);
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

        const gumroadCount = await fetch("https://animation-repathing.hfcred.workers.dev/getdownloads");
        const gumroadCountJson = await gumroadCount.json();

        downloads += gumroadCountJson;

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
    paths.innerText = sessionStorage.getItem("paths");
}

fetchData();