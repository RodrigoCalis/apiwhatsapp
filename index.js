const venom = require("venom-bot");
const fs = require('fs');
const fse = require('fs-extra');
const momentzone = require("moment-timezone");
var hora = momentzone.tz("America/Sao_Paulo").format("HH:mm");
  var frase = "";
  console.log("hora do envio", hora);
if (hora >= "05:00" && hora <= "11:59") {
  frase = "Bom dia, ";
} else if (hora >= "12:00" && hora <= "17:59") {
  frase = "Boa tarde, ";
} else if (hora >= "18:00" && hora <= "04:59") {
  frase = "Boa noite, ";
}

venom.create().then((client) => start(client));


function start(client) {

  client.onMessage((message) => {
    console.log("Message: ", message.body);
    console.log("Group: ", message.isGroupMsg);
   //console.log("Informações: ", message.sender);
    console.log("Pessoa: ", message.sender.pushname);

    var message_what = message.body.toLowerCase();



  //------------------------------INICIO MENSAGEM ------------------------------
    if ((message_what.includes("exemplo de mensagem enviada pelo usuário") || message_what.includes("exemplo de mensagem enviada pelo usuário") || message_what.includes("exemplo de mensagem enviada pelo usuário")) && message.isGroupMsg == false) {
      client
        .sendText(
          message.from,
          `${frase} ${message.sender.pushname}!\ncoloca a mensagem que vai aparecer para o usuario`
        )
        .then((result) => {
          console.log("Result: ", result); //retorna um objeto de successo
          console.log("teste", result.pushname);
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
        });
    }

    if (message_what.includes("Duvidas") && message.isGroupMsg == false )  {
      client
        .sendText(
          message.from,
          `Favor informar o numero da opção abaixo.\n1.Como liberar o acesso ao app.\n2.Gerar Relatorios.`
        )
        .then((result) => {
          console.log("Result: ", result); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
        });
    }

    if (message_what === "1" && message.isGroupMsg === false) {
      client
        .sendText(
          message.from,
          `Para liberar o acesso você tem que ir no menu configurações`
        )
        .then((result) => {
          console.log("Result: ", result); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
        });
    }

    if (message_what === "2" && message.isGroupMsg == false) {
      client
        .sendText(
          message.from,
          `Caminho> Relatorios -> Gastos.`
        )
        .then((result) => {
          console.log("Result: ", result); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
        });
    }

      //------------------------------FIM MENSAGEM ------------------------------

     
      if (message_what.includes("excluir arquivos etiqueta") && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Digite a opção abaixo.\nUnid 07\nUnid 32\nUnid 33\nUnid 41\nUnid 311`
          )
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });
      }


     

            //------------------------------INICIO EXCLUIR ARQUIVOS ------------------------------
      if (message_what === "unid 07" && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Arquivos excluídos com sucesso!`
          )
          fs.readdirSync('//caminho aonde fica o arquivo/').forEach(file => {
            file.includes("uni_41_") && fs.unlinkSync(`//caminho aonde fica o arquivo/${file}`);
          })
          //fse.emptyDirSync('//10.11.1.6/nfs/eti_ident_exped/processar/', function (err) {            
           // if (err) {                                                 
              //  console.error(err);                                    
          // }      
                                                                
         //console.log('File has been Deleted');                           
   //   })
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
            console.log("teste", result.pushname);
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });

          
      }

      if (message_what === "unid 32" && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Arquivos excluídos com sucesso!`
          )
          fs.readdirSync('//caminho aonde fica o arquivo/').forEach(file => {
            file.includes("uni_41_") && fs.unlinkSync(`//caminho aonde fica o arquivo/${file}`);
          })
          //fse.emptyDirSync('//10.11.1.6/nfs/eti_ident_exped/processar/', function (err) {            
           // if (err) {                                                 
              //  console.error(err);                                    
          // }      
                                                                
         //console.log('File has been Deleted');                           
   //   })
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
            console.log("teste", result.pushname);
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });

          
      }
   //------------------------------FIM EXCLUIR ARQUIVOS ------------------------------
         



         
      if (message_what === "unid 32" && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Arquivos excluídos com sucesso!`
          )
          fs.readdirSync('//caminho aonde fica o arquivo/').forEach(file => {
            file.includes("uni_41_") && fs.unlinkSync(`//caminho aonde fica o arquivo/${file}`);
          })
          //fse.emptyDirSync('//10.11.1.6/nfs/eti_ident_exped/processar/', function (err) {            
           // if (err) {                                                 
              //  console.error(err);                                    
          // }      
                                                                
         //console.log('File has been Deleted');                           
   //   })
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
            console.log("teste", result.pushname);
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });

          
      }
   
      if (message_what === "unid 41" && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Arquivos excluídos com sucesso!`
          )
          fs.readdirSync('//caminho aonde fica o arquivo/').forEach(file => {
            file.includes("uni_41_") && fs.unlinkSync(`//caminho aonde fica o arquivo/${file}`);
          })
          //fse.emptyDirSync('//10.11.1.6/nfs/eti_ident_exped/processar/', function (err) {            
           // if (err) {                                                 
              //  console.error(err);                                    
          // }      
                                                                
         //console.log('File has been Deleted');                           
   //   })
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
            console.log("teste", result.pushname);
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });

          
      }

         
      if (message_what === "unid 311" && message.isGroupMsg == false) {
        client
          .sendText(
            message.from,
            `Arquivos excluídos com sucesso!`
          )
          fs.readdirSync('//caminho aonde fica o arquivo/').forEach(file => {
            file.includes("uni_41_") && fs.unlinkSync(`//caminho aonde fica o arquivo/${file}`);
          })
          //fse.emptyDirSync('//10.11.1.6/nfs/eti_ident_exped/processar/', function (err) {            
           // if (err) {                                                 
              //  console.error(err);                                    
          // }      
                                                                
         //console.log('File has been Deleted');                           
   //   })
          .then((result) => {
            console.log("Result: ", result); //retorna um objeto de successo
            console.log("teste", result.pushname);
          })
          .catch((erro) => {
            console.error("Erro ao enviar mensagem: ", erro); //return um objeto de erro
          });

          
      }


  });
}
