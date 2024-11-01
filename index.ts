const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);

        if (url.pathname === '/') {
            const body = "Hello, World!";
            return new Response(body, { status: 200 });
        } else if (url.pathname === '/greet') {
            try {
                const file = Bun.file('./greet.txt');
                return new Response(file, { status: 200 });
            } catch (error) {
                console.error("Error reading file:", error);
                return new Response("Error loading file", { status: 500 });
            }
        } else {
            return new Response("Not Found", { status: 404 });
        }
    }
});
