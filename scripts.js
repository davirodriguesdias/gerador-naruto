let res = document.getElementById('res')
let som = document.getElementById('som')
let imgvila = document.getElementById('vila')
let imgclan = document.getElementById('clã')
let imgarma = document.getElementById('arma')
let imgestilo = document.getElementById('estilo')
let imgextra = document.getElementById('extra')
let imgmodo = document.getElementById('modo')
let nomePlayer1 = document.getElementById('p1')
let nomePlayer2 = document.getElementById('p2')
let pontos1 = 0
let pontos2 = 0
let pontos = 0

function gerador(tp) {
    som.src = "narutosound.mpeg"
    if (tp == 'vila') {
        const vilas = [
            { name: "Kage Folha", chance: 2, pts: 10, img: "Kage Folha.jpeg" },
            { name: "Kage Areia", chance: 2, pts: 10, img: "Kage Areia.jpeg" },
            { name: "Kage Pedra", chance: 2, pts: 10, img: "Kage Pedra.jpeg" },
            { name: "Kage Névoa", chance: 2, pts: 10, img: "Kage Névoa.jpeg" },
            { name: "Kage Relâmpago", chance: 2, pts: 10, img: "Kage Relâmpago.jpeg" },
            { name: "Folha", chance: 18, pts: 5, img: "Folha.jpeg" },
            { name: "Areia", chance: 18, pts: 5, img: "Areia.jpeg" },
            { name: "Pedra", chance: 18, pts: 5, img: "Pedra.jpeg" },
            { name: "Névoa", chance: 18, pts: 5, img: "Névoa.jpeg" },
            { name: "Chuva", chance: 18, pts: 5, img: "Chuva.jpeg" },
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
            { name: "Ōtsutsuki", chance: 1, pts: 100, img: "otsuki.jpg" },
            { name: "Senju", chance: 2, pts: 98, img: "senju.jpg" },
            { name: "Uchiha", chance: 3, pts: 96, img: "uchiha.jpg" },
            { name: "Kaguya", chance: 4, pts: 92, img: "kaguya.jpg" },
            { name: "Uzumaki", chance: 6, pts: 88, img: "uzumaki.jpg" },
            { name: "Hyuga", chance: 7, pts: 84, img: "hyuuga.jpg" },
            { name: "Hozuki", chance: 9, pts: 77, img: "hozuki.jpg" },
            { name: "Sarutobi", chance: 9, pts: 74, img: "sarutobi.jpg" },
            { name: "Yamanaka", chance: 11, pts: 72, img: "yamanaka.jpg" },
            { name: "Akimichi", chance: 12, pts: 70, img: "akimichi.jpg" },
            { name: "Nara", chance: 12, pts: 65, img: "nara.jpg" },
            { name: "Aburame", chance: 12, pts: 63, img: "aburame.jpg" },
            { name: "Inuzuka", chance: 12, pts: 62, img: "inuzuka.jpg" }
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < clas.length; i++) {
            total += clas[i].chance
            if (r < total) {
                pontos += clas[i].pts
                res.textContent = `${clas[i].name} (${pontos}pts)`
                imgclan.src = clas[i].img
                break
            }
        }
    }

    else if (tp == 'arma') {
        let armas = [
            { name: "Hogoramo stick", chance: 1, pts: 30, img: "Hogoramo.jpg" },
            { name: "Gunbai", chance: 2, pts: 26, img: "Gunbai.jpg" },
            { name: "Samehada", chance: 3, pts: 22, img: "Samehada.jpg" },
            { name: "Triple Foice", chance: 4, pts: 21, img: "Triple.jpg" },
            { name: "Zabuza Sword", chance: 6, pts: 18, img: "Zabuza.jpg" },
            { name: "Sasuke Katana", chance: 7, pts: 15, img: "Katana.jpg" },
            { name: "Chidori Sword", chance: 9, pts: 13, img: "Chidori.jpg" },
            { name: "Kunai Minato", chance: 9, pts: 12, img: "KunaiMi.jpg" },
            { name: "Leque Temari", chance: 11, pts: 10, img: "Temari.jpg" },
            { name: "Kunai Asuma", chance: 12, pts: 9, img: "Asuma.jpg" },
            { name: "Shuriken", chance: 12, pts: 7, img: "Shuriken.jpg" },
            { name: "Kunai", chance: 24, pts: 5, img: "Kunai.jpg" },
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < armas.length; i++) {
            total += armas[i].chance
            if (r < total) {
                pontos += armas[i].pts
                res.textContent = `${armas[i].name} (${pontos}pts)`
                imgarma.src = armas[i].img
                break
            }
        }
    }

    else if (tp == 'estilo') {
        let estilos = [
            { name: "Ranton", chance: 2, pts: 96, img: "ranton.jpg" },
            { name: "Mokuton", chance: 3, pts: 94, img: "mokuton.jpg" },
            { name: "Hyoton", chance: 5, pts: 90, img: "hyoton.jpeg" },
            { name: "Yoton", chance: 6, pts: 86, img: "yoton.jpg" },
            { name: "Raiton", chance: 9, pts: 82, img: "raiton.jpg" },
            { name: "Katon", chance: 11, pts: 78, img: "katon.jpg" },
            { name: "Fuuton", chance: 12, pts: 75, img: "futon.jpg" },
            { name: "Doton", chance: 13, pts: 72, img: "doton.jpg" },
            { name: "Suiton", chance: 14, pts: 70, img: "suiton.jpg" },
            { name: "Yin Yang", chance: 25, pts: 65, img: "yy.jpg" },
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < estilos.length; i++) {
            total += estilos[i].chance
            if (r < total) {
                pontos += estilos[i].pts
                res.textContent = `${estilos[i].name} (${pontos}pts)`
                imgestilo.src = estilos[i].img
                break
            }
        }
    }

    else if (tp == 'modo') {
        let modos = [
            { name: "Senpõ Hashirama", chance: 3, pts: 100, img: "hashirama.jpg" },
            { name: "Senpõ Cobra", chance: 6, pts: 98, img: "cobra.jpg" },
            { name: "Senpõ Sapo", chance: 12, pts: 94, img: "sapo.jpg" },
            { name: "Senpõ Lesma", chance: 19, pts: 90, img: "lesma.jpg" },
            { name: "Nenhum", chance: 60, pts: 0, img: "X.webp" },
        ];

        let r = Math.random() * 100;
        let total = 0;

        for (let i = 0; i < modos.length; i++) {
            total += modos[i].chance
            if (r < total) {
                pontos += modos[i].pts
                res.textContent = `${modos[i].name} (${pontos}pts)`
                imgmodo.src = modos[i].img
                break
            }
        }
    }

    else if (tp == 'extra') {
        let extras = [
            { name: "Juubi", chance: 0.5, pts: 100, img: "juubi.jpg" },
            { name: "Rinnegan Supremo", chance: 0.7, pts: 98, img: "supremo.jpg" },
            { name: "Rinnesharingan", chance: 1, pts: 96, img: "rinesha.jpg" },
            { name: "Rinnegan Dourado", chance: 1.2, pts: 94, img: "rinedou.jpg" },
            { name: "Susanoo Kurama", chance: 1.3, pts: 92, img: "kusu.jpg" },
            { name: "Rinnegan", chance: 1.4, pts: 90, img: "rine.jpg" },
            { name: "Mangekyou Madara", chance: 1, pts: 89, img: "madara.jpg" },
            { name: "Mangekyou Sasuke", chance: 1, pts: 88, img: "sasuke.jpg" },
            { name: "Mangekyou Obito", chance: 1, pts: 86, img: "obito.jpg" },
            { name: "Mangekyou Shisui", chance: 0.7, pts: 85, img: "shisui.jpg" },
            { name: "Mangekyou Itachi", chance: 0.7, pts: 84, img: "itachi.jpg" },
            { name: "Mangekyou Izuna", chance: 0.7, pts: 83, img: "izuna.jpg" },
            { name: "Karma", chance: 1, pts: 82, img: "karma.jpg" },
            { name: "Marca da Maldição", chance: 1, pts: 81, img: "marca.jpg" },
            { name: "Byakugan Dourado", chance: 1, pts: 80, img: "bydou.jpg" },
            { name: "Jogan", chance: 1, pts: 79, img: "jogan.jpg" },
            { name: "Ketsuryugan", chance: 0.7, pts: 78, img: "ketsu.jpg" },
            { name: "Kurama", chance: 0.6, pts: 76, img: "9.jpg" },
            { name: "Portões", chance: 0.6, pts: 75, img: "gate.jpg" },
            { name: "Gyuki", chance: 0.6, pts: 73, img: "8.jpg" },
            { name: "Choumei", chance: 0.6, pts: 72, img: "7.jpg" },
            { name: "Matatabi", chance: 0.6, pts: 71, img: "2.jpg" },
            { name: "Saiken", chance: 0.6, pts: 70, img: "6.jpg" },
            { name: "Isobu", chance: 0.6, pts: 69, img: "3.jpg" },
            { name: "Son Goku", chance: 0.6, pts: 68, img: "4.jpg" },
            { name: "Kokuo", chance: 0.6, pts: 67, img: "5.jpg" },
            { name: "Shukaku", chance: 0.6, pts: 66, img: "1.jpg" },
            { name: "Areia de Ferro", chance: 0.5, pts: 65, img: "sand.jpg" },
            { name: "Byakugan", chance: 0.5, pts: 64, img: "bya.jpg" },
            { name: "Sharingan", chance: 0.5, pts: 62, img: "sha.jpg" },
            { name: "Ritual", chance: 0.5, pts: 60, img: "ritu.jpg" },
            { name: "Papel", chance: 2, pts: 10, img: "pap.jpg" },
            { name: "Nada", chance: 40, pts: 0, img: "X.webp" }
        ];

        let totalChance = extras.reduce((sum, item) => sum + item.chance, 0);
        let r = Math.random() * totalChance;
        let total = 0;

        for (let i = 0; i < extras.length; i++) {
            total += extras[i].chance
            if (r < total) {
                pontos += extras[i].pts
                res.textContent = `${extras[i].name} (${pontos}pts)`
                imgextra.src = extras[i].img
                break
            }
        }
    }
}

function player(p) {

    if (pontos == 0) {
        res.textContent = "ERRO! CRIE SEU PERSONAGEM!"
    }

    else if (p == 1) {
        pontos1 = pontos
        nomePlayer1 = nomePlayer1.value

    }
    else if (p == 2) {
        pontos2 = pontos
        nomePlayer2 = nomePlayer2.value
    }

    pontos = 0
    imgclan.src = 'nullnaruto.jpg'
    imgextra.src = 'nullnaruto.jpg'
    imgarma.src = 'nullnaruto.jpg'
    imgvila.src = 'nullnaruto.jpg'
    imgmodo.src = 'nullnaruto.jpg'
    imgestilo.src = 'nullnaruto.jpg'
}

function fight() {

    if (pontos1 == 0 || pontos2 == 0) {
        res.textContent = 'ERRO! VOCÊ NÃO CRIOU UM PERSONAGEM!'
    }

    else if (pontos1 > pontos2) {
        if (pontos2 <= 180) {
            res.textContent = `${nomePlayer1} derrotou ${nomePlayer2} facilmente `
        }
        else if (pontos2 <= 250) {
            res.textContent = `${nomePlayer1} derrotou ${nomePlayer2}`
        }
        else if (pontos2 <= 350) {
            res.textContent = `${nomePlayer1} derrotou ${nomePlayer2} com dificuldade `
        }
        else {
            res.textContent = `${nomePlayer1} derrotou ${nomePlayer2}, mas por pouco morria`
        }
    }

    else if (pontos2 > pontos1) {
        if (pontos1 <= 180) {
            res.textContent = `${nomePlayer2} derrotou ${nomePlayer1} facilmente `
        }
        else if (pontos1 <= 250) {
            res.textContent = `${nomePlayer2} derrotou ${nomePlayer1} com dificuldade `
        }
        else if (pontos1 <= 350) {
            res.textContent = `${nomePlayer2} derrotou ${nomePlayer1}`
        }
        else {
            res.textContent = `${nomePlayer2} derrotou ${nomePlayer1}, mas por pouco morria`
        }
    }

    else if (pontos1 == pontos2) {
        if (pontos1 <= 180) {
            res.textContent = `${nomePlayer1} e ${nomePlayer2} empataram`
        }
        else if (pontos1 <= 250) {
            res.textContent = `${nomePlayer1} e ${nomePlayer2} empataram e desmaiaram`
        }
        else {
            res.textContent = `${nomePlayer1} e ${nomePlayer2} empataram e morreram`
        }
    }
}
