/*
import { ContaBancaria } from "./ContaBancaria";

export class ContaUni extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo, Uni){
        super(agencia, numero, tipo, saldo)
        this.uni = Uni
    }

    saldoUniversitario(value){
        return 500(value)
    }

    get saldoUni(){
        return this.uni
    }

    set depositar(depUni){
        depUni = parseInt(prompt("Quanto você deseja depositar?"))
        let novaUni = this.uni + depUni
        this.alterarPoupanca(novaUni)
        console.log(`Depósito de R$${depUni} realizado. Saldo atual: R$${this.novaUni}`)
    }

    set retirar(retirarDinheiro){
        retirarDinheiro = parseInt(prompt("Quanto deseja sacar?"))
        if(retirarDinheiro > this.uni ){
            console.log('Saldo insuficiente.')
        }else{
            let novaUni = this.uni - retirarDinheiro
            this.alterarSaldoUni(novaUni)
        }
        console.log(`Saque de R${retirarDinheiro} realizado. Saldo atual: R$${this.novaUni}`)
    }

    executar() {
        let opcao;
        do {
          opcao = this.exibirMenu();
      
          switch (opcao) {
            case "1":
              this.saldoUni();
              break;
            case "2":
               this.depositar();
              break;
            case "3":
              this.retirar();
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
  
      const deposito = form.querySelector('.deposito')
      const retirar = form.querySelector('.retirar')

      DepArray.push(parseFloat(deposito.value))
      RetArray.push(parseFloat(retirar.value))

      AtuGraf()
      AtuGrafdois()
  
      saldo.push({
          deposito: deposito.ariaValueMax,
          retirar: retirar.value
      })
  
      console.log(saldo)
  
      resultado.innerHTML += `<p>Depósito de R$${deposito.value}. </p>`
      
      resultado.innerHTML += `<p>Retirada de R$${retirar.value}. </p>`
  
    }
  
    form.addEventListener('submit', recebeEventoForm)
    plots = document.getElementById("plots")
  
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
    const DepArray = []
    const RetArray = []

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
    }

    function AtuGrafdois(){
      const plots2 = document.getElementById("outroGrafico")
      const chart1 = new Chart(plots2, {
        type: 'line',
        data:{
          labels: mes,
          datasets: [{
            data: RetArray,
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