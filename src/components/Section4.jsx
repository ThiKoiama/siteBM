import styles from "../styles/Section4.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Section4() {
  const [nome, setNome] = useState("")
  const [endereco, setEndereco]= useState("")
  const [email, setEmail]= useState("")
  const [telefone, setTelefone]= useState("")
  const [assunto, setAssunto]= useState("")
  const [mensagem, setMensagem] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        nome,
        endereco,
        email,
        telefone,
        assunto,
        mensagem
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      toast.error("Algo deu errado!");
      console.log(error);
      return;
    }
    toast.success("Enviado!");
    console.log(nome, endereco, email, telefone, assunto, mensagem);
  };
  return (
    <div className={styles.section4}>
      <div id="contato" className={styles.contato}>
        <div className={styles.div1}>
          <h2>Entre em contato</h2>
          <p>Rua Elizabeth Koller, 303, Portal Santa Fé, Itupeva-SP</p>
          <p>atendimento@bmbike.com.br</p>
          <p>Tel:(11) 4591-4101</p>
        </div>
        <div className={styles.div2}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Nome">Nome: </label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              id="nome"
              name="nome"
              placeholder="Insira seu nome"
              required
            />
           

            <label htmlFor="endereco">Endereço: </label>
           
            <input
              type="text"
              onChange={(e) => setEndereco(e.target.value)}
              id="endereco"
              name="endereco"
              required
              placeholder="Insira seu endereço"
            />
           
            
         
            <label htmlFor="email">Email: </label>
           
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              required
              placeholder="Insira seu email"
            />
     
            
            <label htmlFor="telefone"> Telefone: </label>
        
            <input
              type="text"
              onChange={(e) => setTelefone(e.target.value)}
              id="telefone"
              name="telefone"
              required
              placeholder="Insira seu telefone"
            />
  
  
            <label htmlFor="assunto">Assunto: </label>
           
            <input
              type="text"
              onChange={(e) => setAssunto(e.target.value)}
              id="assunto"
              name="assunto"
              required
              placeholder="Insira o assunto"
            />
           
            <label htmlFor="mensagem">Mensagem: </label>
           
            <textarea
              onChange={(e) => setMensagem(e.target.value)}
              className={styles.mensagem}
              id="mensagem"
              name="mensagem"
              wrap="hard"
              required
              placeholder="Digite sua mensagem aqui"
            ></textarea>
            <center>
              <input className={styles.enviar} type="submit" />
            </center>
          </form>
        </div>
      </div>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3400948361577!2d-47.03140569739221!3d-23.157784301064694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf30e55941ebb5%3A0xf628d6266164d980!2sR.%20Elizabete%20Koler%2C%20303%20-%20Portal%20de%20Santa%20Fe%2C%20Itupeva%20-%20SP%2C%2013295-000!5e0!3m2!1spt-BR!2sbr!4v1649852864370!5m2!1spt-BR!2sbr"
      ></iframe>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
