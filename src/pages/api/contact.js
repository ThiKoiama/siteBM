import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function contact(req, res) {
  try {
    await sendgrid.send({
      to: 'suportebmbike@gmail.com',
      from: 'mensageirobmbike@gmail.com',
      subject: `Mensagem de ${req.body.email} pelo site da BM.`,
      text: "Nome: " + req.body.nome + "\nEndereço: " + req.body.endereco + "\nEmail: " + req.body.email + "\nAssunto: " + req.body.assunto + "\nTelefone: " + req.body.telefone + "\nMensagem: " + req.body.mensagem,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error: error.message
    });
  }

  return res.status(200).json({
    error: ''
  });
};

export default contact;