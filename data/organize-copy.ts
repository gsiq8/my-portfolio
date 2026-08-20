// Keep in sync with /content/organize-copy.md — that file is the reviewable draft.
import type { LocalizedString } from "./types";

export interface ProcessStage {
  key: "triagem" | "escopo" | "entrega";
  title: LocalizedString;
  description: LocalizedString;
}

export interface BeforeAfterExample {
  id: string;
  images: string[];
  caption: LocalizedString;
  isPlaceholder: boolean;
}

export interface OrganizeCopy {
  hero: {
    title: LocalizedString;
    subtitleOptions: LocalizedString[];
  };
  stages: ProcessStage[];
  beforeAfter: {
    title: LocalizedString;
    examples: BeforeAfterExample[];
  };
  cta: {
    heading: LocalizedString;
    subheading: LocalizedString;
    phonePlaceholder: string;
  };
  footer: {
    date:LocalizedString;
  }
}
 

const ORGANIZE_IMAGE_DIR = "/images/organize";

export const organizeCopy: OrganizeCopy = {
  hero: {
    title: { pt: "Organize sua casa", en: "Organize Your Home" },
    subtitleOptions: [
      {
        pt: "Organização por cômodo ou para a mudança, sem estresse.",
        en: "Room by room, or for your next move — organizing made simple.",
      },
      {
        pt: "Da bagunça à clareza — cômodo por cômodo ou na hora da mudança.",
        en: "From clutter to clarity — one room at a time, or all at once for your move.",
      },
      {
        pt: "Ambientes organizados, mudanças mais leves: por cômodo ou de uma vez.",
        en: "Organized spaces, lighter moves — by room or all together.",
      },
    ],
  },
  stages: [
    {
      key: "triagem",
      title: { pt: "Triagem", en: "Assessment" },
      description: {
        pt: "Avaliamos cada ambiente com você, identificando o que fica, o que sai e o que muda de lugar — o primeiro passo para clareza antes de organizar.",
        en: "We walk through each space with you, identifying what stays, what goes, and what moves — the first step toward clarity before organizing.",
      },
    },
    {
      key: "escopo",
      title: { pt: "Escopo", en: "Scope" },
      description: {
        pt: "Definimos juntos o plano de ação: prioridades, prazos e materiais necessários para transformar o espaço com previsibilidade.",
        en: "Together we define the action plan: priorities, timeline, and materials needed to transform the space with no surprises.",
      },
    },
    {
      key: "entrega",
      title: { pt: "Entrega", en: "Delivery" },
      description: {
        pt: "Executamos a organização combinada e entregamos o ambiente pronto para uso, com orientações simples para manter a nova rotina.",
        en: "We carry out the agreed organization and hand over a ready-to-use space, with simple guidance to keep the new routine going.",
      },
    },
  ],
  beforeAfter: {
    title: { pt: "Trabalhos Recentes", en: "Recent Work"},  
    examples:[
      
      {
        id: "sapateira",
        images: ["sapateira_1.jpg", "sapateira_2.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Sapateira", en: "Shoe cabinet" },
        isPlaceholder: false,
      },
      {
        id: "bebe",
        images: Array.from({ length: 7 }, (_, i) => `${ORGANIZE_IMAGE_DIR}/bebe_${i + 1}.jpg`),
        caption: { pt: "Quarto do bebê", en: "Baby's room" },
        isPlaceholder: false,
      },
      {
        id: "cozinha",
        images: ["cozinha_1.jpg", "cozinha_2.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Cozinha", en: "Kitchen" },
        isPlaceholder: false,
      },
      {
        id: "closet",
        images: ["closet_1.jpg", "closet_2.jpg", "closet_3.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Closet", en: "Closet" },
        isPlaceholder: false,
      },
      {
        id: "closet1",
        images: ["closet1_1.jpg", "closet1_2.jpg", "closet1_3.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Closet", en: "Closet" },
        isPlaceholder: false,
      },
      {
        id: "closet-homem",
        images: ["closet_homem_1.jpg", "closet_homem_2.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Closet masculino", en: "Men's closet" },
        isPlaceholder: false,
      },
      {
        id: "makes",
        images: ["makes_1.jpg", "makes_2.jpg", "makes_3.jpg"].map((f) => `${ORGANIZE_IMAGE_DIR}/${f}`),
        caption: { pt: "Maquiagens", en: "Makeups" },
        isPlaceholder: false,
      },
      {
        id: "dispensa",
        images: ["dispensa_depois.jpg", "dispensa_depois_2.jpg", "dispensa_antes.jpg"].map(
          (f) => `${ORGANIZE_IMAGE_DIR}/${f}`,
        ),
        caption: { pt: "Despensa", en: "Pantry" },
        isPlaceholder: false,
      },
    ],
  },
  cta: {
    heading: { pt: "Vamos organizar seu espaço?", en: "Ready to organize your space?" },
    subheading: { pt: "Entre em contato agora e receba seu orçamento", en: "Contact us now and start your assessment" },
    phonePlaceholder: "34988546363",
  },
  footer: {
    date: { pt: "Desde 2023", en: "Since 2023" },
  }
};
