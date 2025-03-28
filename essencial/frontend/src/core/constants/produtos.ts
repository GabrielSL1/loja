import Produto from "../produto/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Apple iPhone 13",
        descricao: "Smartphone Apple iPhone 13 com 128GB de armazenamento.",
        marca: "Apple",
        modelo: "iPhone 13",
        imagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315917",
        videoReview: "https://www.youtube.com/watch?v=E4p3pXUe6mI",
        nota: 4.8,
        tags: ["smartphone", "apple", "iphone"],
        preco: 6.999,
        especificacoes: {
            destaque: "Tela Super Retina XDR de 6,1 polegadas e chip A15 Bionic."
        },
        precobase: 6.999,
        precopromocional: 6.499,
        menorpreco: 6.499,
        maiorpreco: 6.999,
        precomedio: 6.749,
    },
    {
        id: 2,
        nome: "Samsung Galaxy S23",
        descricao: "Smartphone Samsung Galaxy S23 com 256GB de armazenamento.",
        marca: "Samsung",
        modelo: "Galaxy S23",
        imagem: "https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-PNG-Photo.png",
        videoReview: "https://www.youtube.com/watch?v=3xV1mJvwXok",
        nota: 4.7,
        tags: ["smartphone", "samsung", "android"],
        preco: 5.999,
        especificacoes: {
            destaque: "Processador Snapdragon 8 Gen 2 e câmera de 50 MP."
        },
        precobase: 5.999,
        precopromocional: 5.499,
        menorpreco: 5.499,
        maiorpreco: 5.999,
        precomedio: 5.749,
    },
    {
        id: 3,
        nome: "Sony WH-1000XM5",
        descricao: "Fone de ouvido com cancelamento de ruído Sony WH-1000XM5.",
        marca: "Sony",
        modelo: "WH-1000XM5",
        imagem: "https://www.telstra.com.au/content/dam/tcom/devices/general/hardware/headphones/ghdwhph-wpnc/black/front.png",
        videoReview: "https://www.youtube.com/watch?v=8a2zv6srz3I",
        nota: 4.9,
        tags: ["fone de ouvido", "sony", "cancelamento de ruído"],
        preco: 2.499,
        especificacoes: {
            destaque: "Cancelamento de ruído líder do mercado e bateria de até 30 horas."
        },
        precobase: 2.499,
        precopromocional: 2.299,
        menorpreco: 2.299,
        maiorpreco: 2.499,
        precomedio: 2.399,
    },
    {
        id: 4,
        nome: "Dell XPS 13",
        descricao: "Notebook Dell XPS 13 com processador Intel Core i7 e 16GB de RAM.",
        marca: "Dell",
        modelo: "XPS 13",
        imagem: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=398&qlt=100,1&resMode=sharp2&size=398,402&chrss=full",
        videoReview: "https://www.youtube.com/watch?v=J5pJb5KpLrE",
        nota: 4.6,
        tags: ["notebook", "dell", "ultrabook"],
        preco: 10.999,
        especificacoes: {
            destaque: "Tela InfinityEdge 4K e design ultrafino."
        },
        precobase: 10.999,
        precopromocional: 9.999,
        menorpreco: 9.999,
        maiorpreco: 10.999,
        precomedio: 10.499,
    },
    {
        id: 5,
        nome: "Logitech G305 Lightspeed",
        descricao: "Mouse sem fio Logitech G305 Lightspeed com sensor de alta precisão.",
        marca: "Logitech",
        modelo: "G305",
        imagem: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/l/o/logitech02c.png",
        videoReview: "https://www.youtube.com/watch?v=5z1u5ZasqP4",
        nota: 4.8,
        tags: ["mouse", "logitech", "ergonômico"],
        preco: 270,
        especificacoes: {
            destaque: "Sensor de alta precisão e design ergonômico."
        },
        precobase: 250,
        precopromocional: 190,
        menorpreco: 190,
        maiorpreco: 300,
        precomedio: 250,
    },
    {
        id: 6,
        nome: "PlayStation 5",
        descricao: "Console de última geração da Sony com suporte a jogos em 4K.",
        marca: "Sony",
        modelo: "PlayStation 5",
        imagem: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-edition-left-image-block-01-en-24jun24?$1600px--t$",
        videoReview: "https://www.youtube.com/watch?v=RkC0l4iekYo",
        nota: 4.9,
        tags: ["console", "sony", "playstation"],
        preco: 4.999,
        especificacoes: {
            destaque: "Suporte a jogos em 4K, SSD ultrarrápido e controle DualSense."
        },
        precobase: 4.999,
        precopromocional: 4.499,
        menorpreco: 4.499,
        maiorpreco: 4.999,
        precomedio: 4.749,
    },
    {
        id: 7,
        nome: "Apple MacBook Air M2",
        descricao: "Notebook ultrafino da Apple com chip M2 e tela Retina.",
        marca: "Apple",
        modelo: "MacBook Air M2",
        imagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1741885365897",
        videoReview: "https://www.youtube.com/watch?v=5iK6ixev8m8",
        nota: 4.8,
        tags: ["notebook", "apple", "macbook"],
        preco: 12.999,
        especificacoes: {
            destaque: "Chip M2, tela Retina de 13,6 polegadas e bateria de longa duração."
        },
        precobase: 12.999,
        precopromocional: 11.999,
        menorpreco: 11.999,
        maiorpreco: 12.999,
        precomedio: 12.499,
    },
    {
        id: 8,
        nome: "Razer DeathAdder V3 Pro",
        descricao: "Mouse gamer ultraleve com sensor óptico de alta precisão.",
        marca: "Razer",
        modelo: "DeathAdder V3 Pro",
        imagem: "https://acdn-us.mitiendanube.com/stores/001/929/213/products/razer-deathadder-v3-pro_12-ca03a13a561e78918d16614583560920-640-0.webp",
        videoReview: "https://www.youtube.com/watch?v=Q9XJzR8z9yI",
        nota: 4.7,
        tags: ["mouse", "razer", "gamer"],
        preco: 799,
        especificacoes: {
            destaque: "Sensor óptico Focus Pro 30K DPI e design ultraleve de 63g."
        },
        precobase: 899,
        precopromocional: 799,
        menorpreco: 799,
        maiorpreco: 899,
        precomedio: 849,
    },
    {
        id: 9,
        nome: "Samsung Odyssey G7",
        descricao: "Monitor gamer curvo de 27 polegadas com taxa de atualização de 240Hz.",
        marca: "Samsung",
        modelo: "Odyssey G7",
        imagem: "https://images.samsung.com/is/image/samsung/p6pim/it/lc27g75tqspxen/gallery/it-odyssey-g7-c27g75t-449941-lc27g75tqspxen-535155086?$684_547_JPG$",
        videoReview: "https://www.youtube.com/watch?v=6C2jRzGd4sA",
        nota: 4.8,
        tags: ["monitor", "samsung", "gamer"],
        preco: 3.499,
        especificacoes: {
            destaque: "Tela QHD curvada, 240Hz e suporte a G-Sync/FreeSync."
        },
        precobase: 3.499,
        precopromocional: 3.199,
        menorpreco: 3.199,
        maiorpreco: 3.499,
        precomedio: 3.349,
    },
    {
        id: 10,
        nome: "HyperX Cloud Alpha Wireless",
        descricao: "Headset gamer sem fio com bateria de longa duração.",
        marca: "HyperX",
        modelo: "Cloud Alpha Wireless",
        imagem: "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_black_1_main_900x.jpg?v=1662420668",
        videoReview: "https://www.youtube.com/watch?v=3m5q8z1ZxKM",
        nota: 4.9,
        tags: ["headset", "hyperx", "gamer"],
        preco: 1.499,
        especificacoes: {
            destaque: "Bateria de até 300 horas e som surround virtual DTS."
        },
        precobase: 1.599,
        precopromocional: 1.499,
        menorpreco: 1.499,
        maiorpreco: 1.599,
        precomedio: 1.549,
    }
];

export default produtos;