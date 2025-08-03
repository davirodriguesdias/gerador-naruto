let res = document.getElementById('res')
let som = document.getElementById('som')
let imgvila = document.getElementById('vila')
let pontos = 0

function gerador(tp) {
    som.src = "narutosound.mpeg"
    if (tp == 'vila') {
        const vilas = [
            { name: "Kage Folha", chance: 2, pts: 10, img:"Kage Folha.jpeg" },
            { name: "Kage Areia", chance: 2, pts: 10, img:"Kage Areia.jpeg" },
            { name: "Kage Pedra", chance: 2, pts: 10, img:"Kage Pedra.jpeg" },
            { name: "Kage Névoa", chance: 2, pts: 10, img:"Kage Névoa.jpeg" },
            { name: "Kage Relâmpago", chance: 2, pts: 10, img:"Kage Relâmpago.jpeg" },
            { name: "Folha", chance: 18, pts: 5, img:"Folha.jpeg" },
            { name: "Areia", chance: 18, pts: 5, img:"Areia.jpeg" },
            { name: "Pedra", chance: 18, pts: 5, img:"Pedra.jpeg" },
            { name: "Névoa", chance: 18, pts: 5, img:"Névoa.jpeg" },
            { name: "Chuva", chance: 18, pts: 5, img:"Chuva.jpeg" },
        ];
        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < vilas.length; i++) {
            total += vilas[i].chance
            if (r < total) {
                pontos += vilas[i].pts
                res.textContent = `${vilas[i].name} (${pontos}pts)`
                imgvila.src = vilas[i].img
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
                pontos += clas[i].pts
                res.textContent = `${clas[i].name} (${pontos}pts)`
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
            { name: "Kunai", chance: 24, pts: 5 },
        ];
        
        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < armas.length; i++) {
            total += armas[i].chance
            if (r < total) {
                pontos += armas[i].pts
                res.textContent = `${armas[i].name} (${pontos}pts)`
                break
            }
        }
    }

    else if (tp == 'estilo') {
        let estilos = [
            { name: "Ranton", chance: 2, pts: 96 },
            { name: "Mokuton", chance: 3, pts: 94 },
            { name: "Hyoton", chance: 5, pts: 90 },
            { name: "Yoton", chance: 6, pts: 86 },
            { name: "Raiton", chance: 9, pts: 82 },
            { name: "Katon", chance: 11, pts: 78 },
            { name: "Fuuton", chance: 12, pts: 75 },
            { name: "Doton", chance: 13, pts: 72 },
            { name: "Suiton", chance: 14, pts: 70 },
            { name: "Yin Yang", chance: 25, pts: 65 },
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < estilos.length; i++) {
            total += estilos[i].chance
            if (r < total) {
                pontos += estilos[i].pts
                res.textContent = `${estilos[i].name} (${pontos}pts)`
                break
            }
        }
    }

    else if (tp == 'modo') {
        let modos = [
            { name: "Senpõ Hashirama", chance: 3, pts: 100 },
            { name: "Senpõ Cobra", chance: 4, pts: 98 },
            { name: "Senpõ Sapo", chance: 5, pts: 94 },
            { name: "Senpõ Lesma", chance: 6, pts: 90 },
            { name: "Nenhum", chance: 82, pts: 0 },
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < modos.length; i++) {
            total += modos[i].chance
            if (r < total) {
                pontos += modos[i].pts
                res.textContent = `${modos[i].name} (${pontos}pts)`
                break
            }
        }
    }

    else if (tp == 'extra') {
        let extras = [
            { name: "Juubi", chance: 0.5, pts: 100 },
            { name: "Rinnegan Supremo", chance: 0.7, pts: 98 },
            { name: "Rinnesharingan", chance: 1, pts: 96 },
            { name: "Rinnegan Dourado", chance: 1.2, pts: 94 },
            { name: "Susanoo Kurama", chance: 1.3, pts: 92 },
            { name: "Rinnegan", chance: 1.4, pts: 90 },
            { name: "Mangekyou Madara", chance: 1, pts: 89 },
            { name: "Mangekyou Sasuke", chance: 1, pts: 88 },
            { name: "Mangekyou Obito", chance: 1, pts: 86 },
            { name: "Mangekyou Shisui", chance: 0.7, pts: 85 },
            { name: "Mangekyou Itachi", chance: 0.7, pts: 84 },
            { name: "Mangekyou Izuna", chance: 0.7, pts: 83 },
            { name: "Karma", chance: 1, pts: 82 },
            { name: "Marca da Maldição", chance: 1, pts: 81 },
            { name: "Byakugan Dourado", chance: 1, pts: 80 },
            { name: "Jogan", chance: 1, pts: 79 },
            { name: "Ketsuryugan", chance: 0.7, pts: 78 },
            { name: "Kurama", chance: 0.6, pts: 76 },
            { name: "Portões", chance: 0.6, pts: 75 },
            { name: "Gyuki", chance: 0.6, pts: 73 },
            { name: "Choumei", chance: 0.6, pts: 72 },
            { name: "Matatabi", chance: 0.6, pts: 71 },
            { name: "Saiken", chance: 0.6, pts: 70 },
            { name: "Isobu", chance: 0.6, pts: 69 },
            { name: "Son Goku", chance: 0.6, pts: 68 },
            { name: "Kokuo", chance: 0.6, pts: 67 },
            { name: "Shukaku", chance: 0.6, pts: 66 },
            { name: "Areia de Ferro", chance: 0.5, pts: 65 },
            { name: "Byakugan", chance: 0.5, pts: 64 },
            { name: "Sharingan", chance: 0.5, pts: 62 },
            { name: "Ritual", chance: 0.5, pts: 60 },
            { name: "Papel", chance: 2, pts: 10 },
            { name: "Nada", chance: 40, pts: 0 }
        ];

        let totalChance = extras.reduce((sum, item) => sum + item.chance, 0);
        let r = Math.random() * totalChance;
        let total = 0;

        for (let i = 0; i < extras.length; i++) {
            total += extras[i].chance
            if (r < total) {
                pontos += extras[i].pts
                res.textContent = `${extras[i].name} (${pontos}pts)`
                break
            }
        }
    }
}
