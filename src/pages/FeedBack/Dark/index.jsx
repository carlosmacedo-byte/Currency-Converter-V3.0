import ButtConvertDark from '../../../Components/Converter/dark/index.jsx'
import ButtFBdark from '../../../Components/FeedBack/dark/index.jsx'
import FundoPagina from '../../../Components/Fundo/dark/index.jsx'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { 
    Headers, 
    ButtonsMenu, 
    Body, 
    Temas,
    ConteinerHeaders,
    ButtonDark,
    ButtonClear,
    Caixa,
    Information,
    ButtonCaixa,
    Text,
    Alert
} from './styles.js'

function FeedBack() {

  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');

  const [mensagemAlerta, setMensagemAlerta] = useState(''); 
  const [isError, setIsError] = useState(false);

  const EnvioText = async () => {

    if (!feedback.trim()) {
      setIsError(true);
      setMensagemAlerta("Por favor, digite um feedback antes de enviar.");
      return;
    }

    try {
      const urlWebhookN8n = 'https://n8n.aidigitalmarketing.com.br/webhook/be8b07e3-0164-456e-a98f-9f8301e1ce50';

      const response = await fetch(urlWebhookN8n, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensagem: feedback })
      });

      if (response.ok) {
        setIsError(false);
        setMensagemAlerta("Feedback enviado com sucesso! Agradecemos a colaboração.");
        setFeedback('');
      } else {
        setIsError(true);
        setMensagemAlerta("Houve uma falha na comunicação com o sistema de feedback.");
      }

    } catch (erro) {
      console.error("Erro no envio para o n8n:", erro);
      setIsError(true);
      setMensagemAlerta("Sistema indisponível no momento. Tente novamente mais tarde.");
    }
  };

    return (

        <FundoPagina>

            <Headers>


        <ConteinerHeaders>

          <ButtonsMenu>

            <ButtConvertDark type='button' onClick={() => navigate('/dark')}>Converter</ButtConvertDark>
            <ButtFBdark type='button' onClick={() => navigate('/feedback')}>Feedback</ButtFBdark>

          </ButtonsMenu>
          <Temas>

            <ButtonDark type='button'  onClick={() => navigate('/feedback')}>☾</ButtonDark>
            <ButtonClear type='button' onClick={() => navigate('/feedback-clear')}>☀</ButtonClear>

          </Temas>

        </ConteinerHeaders>

                <Body>
                    <Caixa>
                        <Text>Nos conte o que acha desse projeto e se podemos melhorar de alguma forma. <br/> 
                        Seu Feedback é muito importante para nós!</Text>
                        <Alert $error={isError}>{mensagemAlerta}</Alert>
                        <Information placeholder="Digite seu feedback aqui..." value={feedback} onChange={(e) => setFeedback(e.target.value)}/> 
                        <ButtonCaixa type='button' onClick={EnvioText}>Enviar</ButtonCaixa>
                    </Caixa>

                </Body>

            </Headers>

        </FundoPagina>




    )
}

export default FeedBack