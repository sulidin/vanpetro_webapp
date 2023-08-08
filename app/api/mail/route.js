// export const POST = async (req,res) => {
//       const body = JSON.parse(req.body);
//       console.log(body);
//       res.status(200).json({message: 'Success'});
//   }

// const mail = require('@sendgrid/mail');

// mail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request) => {
  const body = await request.json();
  console.log(body);

  const message = `
      Name: ${body.fullName}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

    console.log(message);



  //   await mail.send({
  //     to: 'to.name@email.com',
  //     from: 'from.name@email.com',
  //     subject: 'New Message!',
  //     text: message,
  //     html: message.replace(/\r\n/g, '<br>'),
  //   });

  return new Response(JSON.stringify(body), {
    status: 201
  })
}
