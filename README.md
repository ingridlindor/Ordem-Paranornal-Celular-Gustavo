# Celular de Gustavo — A Maldição do Ídolo de Pedra

Simulador de celular para ser usado como prop em mesa de RPG (Ordem Paranormal). Os jogadores encontram o celular de Gustavo bloqueado e precisam investigar pistas para acessá-lo, assim como os apps dentro dele.

Feito em HTML, CSS e JavaScript puros — sem dependências, sem build. Basta abrir o `index.html` ou publicar em qualquer hospedagem estática (Vercel, Netlify, GitHub Pages etc).

## Como usar na mesa

1. Abra o link do celular publicado (ou o `index.html` localmente) e compartilhe a tela com os jogadores.
2. Eles verão a tela de bloqueio pedindo um PIN de 4 dígitos.
3. Após 3 tentativas erradas, aparece a opção "Esqueceu a senha? Deseja recuperar a senha?", que abre 4 perguntas de segurança baseadas em pistas que os jogadores devem descobrir na investigação.
4. Depois de desbloqueado, o celular tem uma tela inicial com apps: **Mensagens**, **E-mail**, **TRANCATRON** e **Contatos**.

## Apps disponíveis

- **Contatos** — lista de contatos salvos no celular (Alan, Edgar, Eloísa, Kenia, Victor).
- **Mensagens** — conversas de WhatsApp já registradas no celular (grupo "Lidando com despedidas", Alan e Victor).
- **E-mail** — antes de abrir, pede um código de verificação (simulando uma confirmação de segurança enviada ao computador de Gustavo). Depois de liberado, mostra a Caixa de entrada e os Enviados.
- **TRANCATRON** — app de controle de tranca eletrônica. Pede uma senha numérica de 6 dígitos para abrir a porta do porão. Errar a senha bloqueia o app por um tempo antes de permitir nova tentativa.

## Personalizar

Praticamente todo o conteúdo (senhas, respostas, contatos, e-mails e mensagens) fica no arquivo [`script.js`](script.js), no topo, na seção `CONFIGURAÇÃO`. Basta editar os valores para adaptar à sua mesa.

---

## ⚠️ NÃO LEIA DAQUI PARA BAIXO SE VOCÊ NÃO FOR O MESTRE ⚠️

Esta seção contém **todas as senhas e respostas** que desbloqueiam o celular e seus apps. Se você é jogador, pare de ler agora — isso estraga a investigação.

### PIN da tela de bloqueio
```
2547
```
(configurável em `CORRECT_PIN`, no topo do `script.js`)

### Perguntas de recuperação de senha (após 3 erros no PIN)

| Pergunta | Resposta |
|---|---|
| Nome completo de quem criou a senha | Gustavo Alves de Campos |
| Aniversário de quem criou a senha | 07/06/1978 |
| Data importante (casamento ou nascimento da filha) | 10/08/1997 **ou** 02/09/2015 |
| Nome importante para essa pessoa | Olívia **ou** Laura |

Os dois campos de data usam um seletor de calendário (`<input type="date">`).

### Código de verificação do e-mail
```
87NF25
```
(configurável em `EMAIL_CODE`)

### Senha do TRANCATRON (tranca do porão)
```
160322
```
Errar a senha bloqueia o teclado por 2 minutos (configurável em `TRANCATRON_LOCKOUT_SECONDS`).

### Dica in-game
O lembrete de senha do celular ("💡" na tela de bloqueio) mostra a pista **"Prata = 25"**.
