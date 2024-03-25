import crypto from 'crypto';



export const POST = async ({request}) =>{
    const data = await request.json();
    const {phoneNumber} = data;
    const allowedNumbers = ['6129869586','5125491883'];

    if(!allowedNumbers.includes(phoneNumber.toString())){
      return new Response(JSON.stringify({error:'Not Authorized User!'}), { status: 403 });
    }
    //generate 5 random numbers using random bytes
    const randomBytes = crypto.getRandomValues(new Uint32Array(5));
    //trim each element in the array to 1 digit
    randomBytes.forEach((element,index) => {
      randomBytes[index] = element % 10;
    });
    const appReply = new Response(JSON.stringify({signin:randomBytes}), { status: 200 });
    appReply.headers.set('Access-Control-Allow-Origin', '*');
    return appReply;
  }