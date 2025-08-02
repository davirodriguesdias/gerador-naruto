let res = document.getElementById('res')

function gerador(tp) {
    if (tp == 'vila') {
        const vilas = [
            { name: "Folha", chance: 18, pts: 5 },
            { name: "Areia", chance: 18, pts: 5 },
            { name: "Rocha", chance: 18, pts: 5 },
            { name: "Névoa", chance: 18, pts: 5 },
            { name: "Chuva", chance: 18, pts: 5 },
            { name: "Kage Folha", chance: 2, pts: 10 },
            { name: "Kage Areia", chance: 2, pts: 10 },
            { name: "Kage Rocha", chance: 2, pts: 10 },
            { name: "Kage Névoa", chance: 2, pts: 10 },
            { name: "Kage Chuva", chance: 2, pts: 10 },
        ];
        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < vilas.length; i++) {
            total += vilas[i].chance
            if (r < total) {
                res.textContent = `${vilas[i].name}(${vilas[i].pts}pts)`
                break
            }
        }
    }    

    else if (tp == 'clã') {
        let clas = [
            { name: "Ōtsutsuki", chance: 1, pts: 100 },
            { name: "Senju", chance: 2, pts: 98 },
            { name: "Uchiha", chance: 3, pts: 96 },
            { name: "Kaguya (Clã)", chance: 4, pts: 92 },
            { name: "Uzumaki", chance: 6, pts: 88 },
            { name: "Hyuga", chance: 7, pts: 84 },
            { name: "Hozuki", chance: 9, pts: 77 },
            { name: "Sarutobi", chance: 9, pts: 74 },
            { name: "Yamanaka", chance: 11, pts: 72 },
            { name: "Akimichi", chance: 12, pts: 70 },
            { name: "Nara", chance: 12, pts: 65 },
            { name: "Aburame", chance: 12, pts: 63 },
            { name: "Inuzuka", chance: 12, pts: 62 }
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < clas.length; i++) {
            total += clas[i].chance
            if (r < total) {
                res.textContent = `${clas[i].name}(${clas[i].pts}pts)`
                break
            }
        }
    }

    else if (tp == 'arma') {
        let armas = [
            { name: "Hogoramo stick", chance: 1, pts: 30 },
            { name: "Gunbai", chance: 2, pts: 26 },
            { name: "Samehada", chance: 3, pts: 22 },
            { name: "Triple Foice", chance: 4, pts: 21 },
            { name: "Zabuza Sword", chance: 6, pts: 18 },
            { name: "Sasuke Katana", chance: 7, pts: 15 },
            { name: "Chidori Sword", chance: 9, pts: 13 },
            { name: "Kunai Minato", chance: 9, pts: 12 },
            { name: "Leque Temari", chance: 11, pts: 10 },
            { name: "Kunai Asuma", chance: 12, pts: 9 },
            { name: "Shuriken", chance: 12, pts: 7 },
            { name: "Kunai", chance: 12, pts: 5 },
            { name: "Bastão", chance: 12, pts: 2 }
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < armas.length; i++) {
            total += armas[i].chance
            if (r < total) {
                res.textContent = `${armas[i].name}(${armas[i].pts}pts)`
                break
            }
        }
    }
}