/*import { Menu } from "./Menu.js"

export class ContaBancaria extends Menu{

    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia,
        this.numero = numero, 
        this.tipo = tipo,
        this.saldo = saldo
    }

    saldoValido(value){
        return this.saldo.test(value)
    }

    get saldoAtual(){
        return this.saldo
    }

    set alterarSaldo(novoSaldo){
        this.saldo = novoSaldo 
    }
    
    set depositar(dinheiroDepositar){
        let novoSaldo = this.saldo + dinheiroDepositar
        this.alterarSaldo(novoSaldo) 
    }

    set sacar(dinheiroSacar){
        dinheiroSacar = parseInt(prompt("Quanto deseja sacar?"))
        if(dinheiroSacar>this.saldo){
            console.log("Saldo insuficiente")
        }else{
            let novoSaldo = this.saldo - dinheiroSacar
            this.alterarSaldo(novoSaldo)
        }
        console.log(`Saque de R${dinheiroSacar} realizado. Saldo atual: R$${this.novoSaldo}`)
    } 

}
*/

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
           link.style.animation
           ? (link.style.animation = "")
           : (link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`) 
        })
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init()

function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
  
    const saldo = []
  
    function recebeEventoForm(evento){
      evento.preventDefault()
  
      const deposito = form.querySelector('.deposito')
      const saque = form.querySelector('.saque')
      const saldoAtual = 1000
  
      saldo.push({
          deposito: deposito.ariaValueMax,
          saque: saque.value
      })
  
      console.log(saldo)
  
      resultado.innerHTML += `<p>Depósito de R$${deposito.value}. </p>`
      
      resultado.innerHTML += `<p>Saque de R$${saque.value}. </p>`
  
    }
  
    form.addEventListener('submit', recebeEventoForm)
  }
  
  meuEscopo()
  
  
  