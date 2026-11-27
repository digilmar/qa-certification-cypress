/// <reference types="cypress" />

// Define quantas questões o teste espera encontrar.
const TOTAL_QUESTOES = 40

// Abre a página do simulado CTFL agrupa os testes do simulado CTFL.
describe('Simulado certificação CTFL', () => {

// Antes de cada teste, realiza o login do usuário e mantém a sessão ativa.    
    beforeEach(() => {

// Carrega os dados do usuário a partir do arquivo de fixture 'endereco_login.json' e realiza o login usando a função 'cy.realizarLogin'. A sessão é mantida ativa usando 'cy.session' para evitar a necessidade de login repetido em cada teste.        
        cy.fixture('endereco_login').then((usuario) => {

// Cria uma chave de sessão única para o usuário, baseada no email do usuário.            
            const chaveSessao = `ctfl-${usuario.email}`

// Mantém a sessão ativa para o usuário, evitando a necessidade de login repetido em cada teste.
            cy.session(chaveSessao, () => {

// Realiza o login do usuário usando os dados carregados do fixture.                
                cy.realizarLogin(usuario.email, usuario.password)
            })
        })
    })

// Teste que verifica se o simulado pode ser aberto e se a pontuação é exibida corretamente após responder todas as questões.    
    it('Responde o simulado e exibe o resultado', () => {

// navega pelas certificações CTFL e clica em “Revisar Simulado” e “Iniciar Simulado”.         
        cy.abrirSimuladoCTFL()

// Responde todas as questões do simulado usando a função 'cy.responderSimulado' e passando o número total de questões como argumento.        
        cy.responderSimulado(TOTAL_QUESTOES)

// Verifica se a pontuação final do simulado é exibida corretamente na tela, utilizando uma expressão regular para validar o formato da pontuação.        
        cy.contains(/Sua pontuação:\s*\d+\/\d+\s*\(\d+%\)/i, { timeout: 15000 })
            .should('be.visible')
    })
})