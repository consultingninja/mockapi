

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


