const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request) => {
  const body = await request.json();
  console.log(body);

  const message = `
      Name: ${body.fullName}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;



    await mail.send({
      to: 'furkanb_@outlook.com',
      from: 'furkan4rck@gmail.com',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    });


  return new Response(JSON.stringify(body), {
    status: 201
  })
}
