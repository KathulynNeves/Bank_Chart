/*import { ContaBancaria } from "./ContaBancaria.js"

export class ContaCorrente extends ContaBancaria{

    constructor(agencia, numero, tipo, saldo, cartaoCredito){
        super(agencia, numero, tipo, saldo)
        this.cartaoCredito = cartaoCredito
    }
    
    limiteCartao(value){
        return 1000(value)
    }

    get limiteAtual(){
        return this.cartaoCredito
    } 

    set alterarLimite(novoLimite){
        novoLimite = parseInt(prompt("Quanto você deseja alterar o limite?"))
        this.cartaoCredito = novoLimite
        console.log(`Mudança de R$${novoLimite} realizado. Limite atual: R$${this.novoLimite}`)
    }

    set comprar(perderDinheiro){
        perderDinheiro = parseInt(prompt("Quanto você vai gastar?"))
        let novoLimite = this.cartaoCredito - perderDinheiro
        this.alterarLimite(novoLimite)
        console.log(`O gasto foi de R$${perderDinheiro}. Limite atual: R$${this.novoLimite}`)
    }
    
    executar() {
        let opcao;
        do {
          opcao = this.exibirMenu();
      
          switch (opcao) {
            case "1":
              this.limiteAtual();
              break;
            case "2":
               this.alterarLimite();
              break;
            case "3":
              this.comprar();
              break;
            case "4":
              console.log("Programa encerrado.");
              break;
            default:
              console.log("Opção Inválida! Digite novamente.");
          }
        } while (opcao !== "4");
      }

}
*/
document.addEventListener ("DOMContentLoaded", function (){

  function meuEscopo() {
      const form = document.querySelector('.form')
      const resultado = document.querySelector('.resultado')
    
      const saldo = []
    
      function recebeEventoForm(evento){
        evento.preventDefault()
    
        const alterarSaldo = form.querySelector('.SaldoAlt')
        const comprar = form.querySelector('.Comp')
        const limiteAtual = 1000
  
        DepArray.push(parseFloat(alterarSaldo.value))
        CompArray.push(parseFloat(comprar.value))
  
        AtuGraf()
        AtuGrafdois()
    
        saldo.push({
            alterarSaldo: alterarSaldo.value,
            comprar: comprar.value
        })
    
        console.log(saldo)
    
        resultado.innerHTML += `<p>Novo saldo de R$${alterarSaldo.value} alterado. </p>`
        
        resultado.innerHTML += `<p>Compra de R$${comprar.value} feita. </p>`
    
      }
    
      form.addEventListener('submit', recebeEventoForm)
  
      plots = document.getElementById("plots")
  
      const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
      const DepArray = []
      const CompArray = []
  
      function AtuGraf(){
        const plots1 = document.getElementById("plots")
        const chart1 = new Chart(plots1, {
          type: 'line',
          data:{
            labels: mes,
            datasets: [{
              data: DepArray,
              backgroundColor: 'yellow',
              borderColor: 'white',
              fill: false,
            }]
          }
        })

        const chart2 = new Chart(plots1, {
          type: 'line',
          data:{
            labels: mes,
            datasets: [{
              data: DepArray,
              backgroundColor: 'yellow',
              borderColor: 'white',
              fill: false,
            }]
          }
        })
      }
  
      function AtuGrafdois(){
        const plots2 = document.getElementById("outroGrafico")
        const chart1 = new Chart(plots2, {
          type: 'line',
          data:{
            labels: mes,
            datasets: [{
              data: CompArray,
              backgroundColor: 'yellow',
              borderColor: 'white',
              fill: false,
              
            }]
          }
        })
      }

  
      AtuGraf()
      AtuGrafdois()
  
    }
    
    meuEscopo()
    
  })