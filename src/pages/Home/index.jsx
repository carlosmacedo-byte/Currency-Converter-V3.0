import { useState, useEffect, Children } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. IMPORTAÇÕES UNIFICADAS (Sem referências a pastas Clear ou Dark)
import Fundo from '../../components/Fundo/index.jsx';
import ButtConvert from '../../components/Converter/index.jsx';
import ButtFeedBack from '../../components/FeedBack/index.jsx';
import SetaSifrao from '../../components/Indicador/index.jsx';

import {
  Text,
  CardCripto,
  CardMoney,
  ConteinerHeaders,
  Temas,
  ButtonsMenu,
  Body,
  Headers,
  NameCurrency,
  ValueCurrency,
  ButtonDark,
  ButtonClear,
} from './styles.js';

// Assets
import ImgDolar from '../../assets/moedadolar.png';
import ImgReal from '../../assets/moedareal.png';
import ImgEuro from '../../assets/moedaeuro.png';
import ImgLibra from '../../assets/moedalibra.png';
import ImgYuan from '../../assets/moedayuan.png';
import ImgIene from '../../assets/moedaiene.png';
import ImgPeso from '../../assets/moedapeso.png';
import ImgRublo from '../../assets/moedarublo.png';
import ImgBitcoin from '../../assets/moedabitcoin.png';
import ImgEther from '../../assets/moedaether.png';
import ImgDogecoin from '../../assets/moedadogecoin.png';
import ImgLitecoin from '../../assets/moedalitecoin.png';
import ImgXrp from '../../assets/moedaxrp.png';
import ImgSolana from '../../assets/moedasolana.png';
import ImgBinanceCoin from '../../assets/moedabinance.png';

// Dicionários e Utilitários (Regras de Negócio Inalteradas)
const currencyMap = {
  real: { locale: "pt-BR", currency: "BRL" },
  dolar: { locale: "en-US", currency: "USD" },
  euro: { locale: "de-DE", currency: "EUR" },
  libra: { locale: "en-GB", currency: "GBP" },
  yuan: { locale: "zh-CN", currency: "CNY" },
  iene: { locale: "ja-JP", currency: "JPY" },
  peso: { locale: "es-AR", currency: "ARS" },
  rublo: { locale: "ru-RU", currency: "RUB" },
  bitcoin: { locale: "en-US", currency: "BTC" },
  ether: { locale: "en-US", currency: "ETH" },
  dogecoin: { locale: "en-US", currency: "DOG" },
  litecoin: { locale: "en-US", currency: "LTC" },
  xrp: { locale: "en-US", currency: "XRP" },
  solana: { locale: "en-US", currency: "SOL" },
  binancecoin: { locale: "en-US", currency: "BNB" },
};

const formatCurrency = (value, currencyKey) => {
  const numericValue = parseFloat(value) || 0;
  const config = currencyMap[currencyKey];
  if (!config) return numericValue;
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency
  }).format(numericValue);
};

const calculateConversion = (amount, rateFrom, rateTo) => {
  const amountFloat = parseFloat(amount);
  if (isNaN(amountFloat) || amountFloat <= 0) return { error: "Número inválido" };
  if (isNaN(rateFrom) || rateFrom === 0 || isNaN(rateTo) || rateTo === 0) return { error: "Indisponível na API" };
  return { result: (amountFloat * rateFrom) / rateTo };
};

const visualsMap = {
  real: { src: ImgReal, name: "Real" },
  dolar: { src: ImgDolar, name: "Dólar" },
  euro: { src: ImgEuro, name: "Euro" },
  libra: { src: ImgLibra, name: "Libra" },
  yuan: { src: ImgYuan, name: "Yuan" },
  iene: { src: ImgIene, name: "Iene" },
  peso: { src: ImgPeso, name: "Peso" },
  rublo: { src: ImgRublo, name: "Rublo" },
  bitcoin: { src: ImgBitcoin, name: "Bitcoin" },
  ether: { src: ImgEther, name: "Ethereum" },
  dogecoin: { src: ImgDogecoin, name: "Dogecoin" },
  litecoin: { src: ImgLitecoin, name: "Litecoin" },
  xrp: { src: ImgXrp, name: "XRP" },
  solana: { src: ImgSolana, name: "Solana" },
  binancecoin: { src: ImgBinanceCoin, name: "Binance" },
};

// 2. INJEÇÃO DE DEPENDÊNCIA (Recebendo os disparadores de estado global)
function Home({ setDarkTheme, setClearTheme }) {
  const navigate = useNavigate();

  // Estados
  const [currencyFrom, setCurrencyFrom] = useState('real');
  const [currencyTo, setCurrencyTo] = useState('dolar');
  const [amountOne, setAmountOne] = useState('');
  const [erroConversao, setErroConversao] = useState(false);
  const [resultado, setResultado] = useState(0);

  const [cryptoFrom, setCryptoFrom] = useState('bitcoin');
  const [cryptoTo, setCryptoTo] = useState('ether');
  const [amountTwo, setAmountTwo] = useState('');
  const [erroConversaoCrypto, setErroConversaoCrypto] = useState(false);
  const [resultadoCrypto, setResultadoCrypto] = useState(0);

  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchAllRates = async () => {
      try {
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CNY-BRL,JPY-BRL,ARS-BRL,RUB-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL,USDT-BRL,XRP-BRL,SOL-BRL,BNB-BRL");
        const data = await response.json();
        setRates(data);
        console.log("Sucesso: Cotações unificadas carregadas no sistema!", data);
      } catch (error) {
        console.error("Erro na comunicação com a API:", error);
      }
    };

    fetchAllRates();
  }, []);

  const imgFrom = visualsMap[currencyFrom]?.src;
  const nameFrom = visualsMap[currencyFrom]?.name;
  
  const imgTo = visualsMap[currencyTo]?.src;
  const nameTo = visualsMap[currencyTo]?.name;

  const imgCryptoFrom = visualsMap[cryptoFrom]?.src;
  const nameCryptoFrom = visualsMap[cryptoFrom]?.name;
  
  const imgCryptoTo = visualsMap[cryptoTo]?.src;
  const nameCryptoTo = visualsMap[cryptoTo]?.name;

  const ButtonMoney = () => {
    if (!rates) return;

    const valueCurrency = {
      real: 1,
      dolar: parseFloat(rates.USDBRL?.high),
      euro: parseFloat(rates.EURBRL?.high),
      libra: parseFloat(rates.GBPBRL?.high),
      yuan: parseFloat(rates.CNYBRL?.high),
      iene: parseFloat(rates.JPYBRL?.high),
      peso: parseFloat(rates.ARSBRL?.high),
      rublo: parseFloat(rates.RUBBRL?.high)
    };

    const rateOne = valueCurrency[currencyFrom];
    const rateTwo = valueCurrency[currencyTo];

    const conversao = calculateConversion(amountOne, rateOne, rateTwo);

    if (conversao.error) {
      setResultado(conversao.error);
      setErroConversao(true);
      return;
    }

    setErroConversao(false);
    setResultado(conversao.result);
  };

  const ButtonCrypto = () => {
    if (!rates) return;

    const valueCrypto = {
      bitcoin: parseFloat(rates.BTCBRL?.high),
      ether: parseFloat(rates.ETHBRL?.high),
      dogecoin: parseFloat(rates.DOGEBRL?.high),
      litecoin: parseFloat(rates.LTCBRL?.high),
      xrp: parseFloat(rates.XRPBRL?.high),
      solana: parseFloat(rates.SOLBRL?.high),
      binancecoin: parseFloat(rates.BNBBRL?.high),
    };

    const rateOne = valueCrypto[cryptoFrom];
    const rateTwo = valueCrypto[cryptoTo];

    const conversao = calculateConversion(amountTwo, rateOne, rateTwo);

    if (conversao.error) {
      setResultadoCrypto(conversao.error);
      setErroConversaoCrypto(true);
      return;
    }

    setErroConversaoCrypto(false);
    setResultadoCrypto(conversao.result);
  };

  return (
    <Fundo>
      <Headers>
        <ConteinerHeaders>
          <ButtonsMenu>
            {/* 3. NAVEGAÇÃO LIMPA: Apenas as rotas oficiais */}
            <ButtConvert type='button' onClick={() => navigate('/')}>Converter</ButtConvert>
            <ButtFeedBack type='button' onClick={() => navigate('/feedback')}>Feedback</ButtFeedBack>
          </ButtonsMenu>
          <Temas>
            {/* 4. DISPARADORES DE ESTADO: Mutações diretas no Contexto, sem rotas falsas */}
            <ButtonDark type='button' onClick={setDarkTheme}>☾</ButtonDark>
            <ButtonClear type='button' onClick={setClearTheme}>☀</ButtonClear>
          </Temas>
        </ConteinerHeaders>

        <Body>
          <Text>
            <h1>Currency Converter</h1>
            <p>Olá, você que está aqui, seja bem vindo ao <b>Currency Converter</b>,
                um conversor cambial que traz os preços atuais de cada respectiva moeda
                selecionada nos campos da sua direita.
              <br/><br/>
              O objetivo deste projeto é facilitar a leitura estratégica de valores cambiais através de alguns cliques e observação.<br/><br/>
              Este é um projeto ambicioso e de constante evolução, por isso estamos nos esforçando para que ele cresça,
               trabalhando para que mais moedas sejam selecionadas e a diversidade desse projeto fique ainda maior.<br/><br/>
              Até então contamos com as moedas e as criptomoedas mundiais mais importantes, porém sabemos que existem cerca 180 moedas 
              oficiais reconhecidas pela <b>Organização das Nações Unidas (ONU)</b> em circulação no mundo e vamos trabalhar para que as melhores se enquadrem aqui.<br/><br/>
              Peço que acessem a aba de FeedBack e deem um parecer sobre sua experiência nesse site e como pensam que esse projeto ainda pode 
              evoluir. Sua opinião e ideia é muito importante para nossa evolução!
               Obrigado por acessar essa ferramenta que provavelmente lhe será muito útil.
              <br/><br/>
              <b>Sucesso!</b>
            </p>
          </Text>

          <CardMoney>
            <label>
              <p>Converter de</p>
              <select value={currencyFrom} onChange={(e) => {setCurrencyFrom(e.target.value); setResultado(0);}}>
                <option value="real">R$ Real Brasileiro</option>
                <option value="dolar">US$ Dólar Americano</option>
                <option value="euro">€ Euro Europeu</option>
                <option value="libra">£ Libra Esterlina</option>
                <option value="yuan">¥ Yuan Chinês</option>
                <option value="iene">¥ Iene Japonês</option>
                <option value="peso">$ Peso Argentino</option>
                <option value="rublo">₽ Rublo Russo</option>
              </select>
            </label>

            <label>
              <p>Converter para</p>
              <select value={currencyTo} onChange={(e) => {setCurrencyTo(e.target.value); setResultado(0);}}>
                <option value="dolar">US$ Dólar Americano</option>
                <option value="real">R$ Real Brasileiro</option>
                <option value="euro">€ Euro Europeu</option>
                <option value="libra">£ Libra Esterlina</option>
                <option value="yuan">¥ Yuan Chinês</option>
                <option value="iene">¥ Iene Japonês</option>
                <option value="peso">$ Peso Argentino</option>
                <option value="rublo">₽ Rublo Russo</option>
              </select>
            </label>

            <label>
              <p>Valor</p>
              <input type="number" step="0.01" placeholder="R$ 0,00" value={amountOne} onChange={(e) => setAmountOne(e.target.value)} />
            </label>

            <button onClick={ButtonMoney}>Converter</button>

            <section>
              <div>
                <img src={imgFrom} alt="Câmbio Brasileiro" />
                <NameCurrency>{nameFrom}</NameCurrency>
                <ValueCurrency $error={erroConversao}>
                  {erroConversao ? resultado : formatCurrency(amountOne, currencyFrom)}
                </ValueCurrency>
              </div>
              <SetaSifrao />
              <div>
                <img src={imgTo} alt="Câmbio Estrangeiro" />
                <NameCurrency>{nameTo}</NameCurrency>
                <ValueCurrency $error={erroConversao}>
                  {erroConversao ? resultado : formatCurrency(resultado, currencyTo)}
                </ValueCurrency>
              </div>
            </section>
          </CardMoney>

          <CardCripto>
            <label>
              <p>Converter de</p>
              <select value={cryptoFrom} onChange={(e) => { setCryptoFrom(e.target.value); setResultadoCrypto(0); }}>
                <option value="bitcoin">₿ Bitcoin</option>
                <option value="ether">Ξ Ether</option>
                <option value="dogecoin">Ð Dogecoin</option>
                <option value="litecoin">Ł Litecoin</option>
                <option value="xrp">✕ XRP</option>
                <option value="solana">◎ Solana</option>
                <option value="binancecoin">◆ Binance Coin</option>
              </select>
            </label>

            <label>
              <p>Converter para</p>
              <select value={cryptoTo} onChange={(e) => { setCryptoTo(e.target.value); setResultadoCrypto(0); }}>
                <option value="ether">Ξ Ether</option>
                <option value="bitcoin">₿ Bitcoin</option>
                <option value="dogecoin">Ð Dogecoin</option>
                <option value="litecoin">Ł Litecoin</option>
                <option value="xrp">✕ XRP</option>
                <option value="solana">◎ Solana</option>
                <option value="binancecoin">◆ Binance Coin</option>
              </select>
            </label>

            <label>
              <p>Valor</p>
              <input type="number" step="0.01" placeholder="₿ 0,00" value={amountTwo} onChange={(e) => setAmountTwo(e.target.value)} />
            </label>

            <button onClick={ButtonCrypto}>Converter</button>

            <section>
              <div>
                <img src={imgCryptoFrom} alt="Câmbio Bitcoin" />
                <NameCurrency>{nameCryptoFrom}</NameCurrency>
                <ValueCurrency $error={erroConversaoCrypto}>
                  {erroConversaoCrypto ? resultadoCrypto : formatCurrency(amountTwo, cryptoFrom)}
                </ValueCurrency>
              </div>
              <SetaSifrao />
              <div>
                <img src={imgCryptoTo} alt="Câmbio Estrangeiro" />
                <NameCurrency>{nameCryptoTo}</NameCurrency>
                <ValueCurrency $error={erroConversaoCrypto}>
                  {erroConversaoCrypto ? resultadoCrypto : formatCurrency(resultadoCrypto, cryptoTo)}
                </ValueCurrency>
              </div>
            </section>
          </CardCripto>
        </Body>
      </Headers>
    </Fundo>
  );
}

export default Home;