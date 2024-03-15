

export async function handle({ event, resolve }) {

    //check for OPTIONS requests and return 200
    if (event.request.method === 'OPTIONS') {
        const optionsReply = new Response(null, { status: 200 });
        optionsReply.headers.set('Access-Control-Allow-Origin', '*');
        optionsReply.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        optionsReply.headers.set('Access-Control-Allow-Headers', 'Content-Type');
        return optionsReply;
    }

	const response = await resolve(event);
	return response;
}
