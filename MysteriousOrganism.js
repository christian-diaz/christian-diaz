// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum,
      dna,
      mutate() {
        let randBaseIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while(newBase === dna[randBaseIndex]) {
          newBase = returnRandBase();
        };
        this.dna[randBaseIndex] = newBase;
        return this.dna;
      },
      compareDNA(obj) {
        let totalEqual = 0;
        let percentage = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(dna[i] === obj[i]){
            totalEqual += 1;
          } 
          //TODO: test codesnapper
        };
        percentage = (totalEqual/this.dna.length) * 100;
        percentage2Dec = percentage.toFixed(2);
        console.log(`${this.specimenNum} and ${obj.specimenNum} have ${percentage2Dec}% DNA in common.`);
      },
      willLikelySurvive() {
        const cOrG = this.dna.filter(base => base === 'C' || base === 'G');
        return cOrG.length / this.dna.length >= 0.6;
      },
    };
  };
  
  
  const survivingSpecimen = [];
  let specimenCounter = 1;
  
  while(specimenCounter < 30) {
    let newOrg = pAequorFactory(specimenCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    };
    specimenCounter++;
    //FIXME: why does it throw random numbers and not sequentually from 1 - 30??
  };
  
  console.log(survivingSpecimen);