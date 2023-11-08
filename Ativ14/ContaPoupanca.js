/*
import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, saldo, poupanca, cartaoDebito){
        super (agencia, numero, tipo, saldo)
        this.poupanca = poupanca
        this.cartaoDebito = cartaoDebito

    }

    poupancaPessoa(value){
        return this.poupanca.test(value)
    }
 
    get poupancaAtual(){
        return this.poupanca
    }

    set depositar(addDinheiro){
        addDinheiro = parseInt(prompt("Quanto você deseja depositar?"))
        let novaPoupanca = this.poupanca + addDinheiro 
        this.alterarPoupanca(novaPoupanca)
        console.log(`Depósito de R$${addDinheiro} feito. Poupança atual: R$${novaPoupanca}`)
    }

    set retirar(retirarDinheiro){
        retirarDinheiro = parseInt(prompt("Quanto deseja sacar?"))
        if(retirarDinheiro>this.poupanca){
            console.log("Pedido inválido; saldo insuficiente.")
        }else{
            let novaPoupanca = this.poupanca - retirarDinheiro
            this.alterarPoupanca(novaPoupanca)
        }
        console.log(`Saque de R${retirarDinheiro} realizado. Saldo atual: R$${this.novaPoupanca}`)
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
      const saque = form.querySelector('.saque')

      DepArray.push(parseFloat(deposito.value))
      SaqArray.push(parseFloat(saque.value))
  
      AtuGraf()
      AtuGrafdois()
  
      saldo.push({
          deposito: deposito.ariaValueMax,
          saque: saque.value
      })
  
      console.log(saldo)
  
      resultado.innerHTML += `<p>Depósito de R$${deposito.value}. </p>`
      
      resultado.innerHTML += `<p>Saque de R$${saque.value}. </p>`
  
    }
  
    form.addEventListener('submit', recebeEventoForm)
    plots = document.getElementById("plots")
  
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]
    const DepArray = []
    const SaqArray = []

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
            data: SaqArray,
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