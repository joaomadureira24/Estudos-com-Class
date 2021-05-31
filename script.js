class Bankac{
    constructor(agen, countn, balance){
        this.agen = agen;
        this.countn = countn;
        this.balance = balance;
    }
    deposSit(value){
        this.balance += this.value;
        return this.showBalance();
    }
    showBalance(){
        console.log(`Ag: ${this.agen} Count: ${this.countn} Balance: ${this.balance}`)
    }
    towitThdraw(value){
       this.balance -= this.value;
        this.showBalance();
    }
}

const count1 = new Bankac(11, 776);
console.log(count1);
count1.deposSit(52);