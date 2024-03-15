

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
  { id: 4, name: 'Alice Williams' },
  { id: 5, name: 'Mike Brown' },
];


export const GET = async ({}) =>{
  return  new Response(JSON.stringify(users),{status: 200});
}

export const OPTIONS = async ({}) =>{
  const appReply =  new Response(null,{status: 204});
  appReply.headers.set('Access-Control-Allow-Origin', 'https://build.draftbit.com');
  appReply.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  appReply.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  appReply.headers.set('Access-Control-Max-Age', '86400');

  return appReply;
}
