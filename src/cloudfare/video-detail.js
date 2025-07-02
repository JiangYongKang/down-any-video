export default {
    async fetch(request, env, ctx) {
        if (request.method === "POST") {
            const requestBody = await request.text();
            const data = JSON.parse(requestBody).data;
            const apiURL = `https://v3.alapi.cn/api/video/url?url=${encodeURIComponent(data)}`;
            const response = await fetch(apiURL, { headers: { "token": env.TOKEN } });
            const responseData = await response.text();
            return Response.json(JSON.parse(responseData));
        }
        return new Response("{\"code\":200,\"message\":\"method not allowed\"}", { status: 500 });
    },
};