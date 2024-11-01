const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === '/') {
            const body = "Hello, World!";
            return new Response(body, { status: 200 });
        } else if (url.pathname === '/greet') {
            return new Response(Bun.file('./greet.txt'));
        } else {
            return new Response("Not Found", { status: 404 });
        }
    }
});
