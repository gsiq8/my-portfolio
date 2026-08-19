# Organize — Copy Draft (PT / EN)

Status: DRAFT — review and edit before/after wiring lives in `data/organize-copy.ts`. Keep both files in sync manually if you edit here.

## Hero

Title (fixed):
- PT: Organize sua casa
- EN: Organize Your Home

Subtitle options (pick one, or merge phrasing — default used in code: option 1):
1. PT: "Organização por cômodo ou para a mudança, sem estresse." / EN: "Room by room, or for your next move — organizing made simple."
2. PT: "Da bagunça à clareza — cômodo por cômodo ou na hora da mudança." / EN: "From clutter to clarity — one room at a time, or all at once for your move."
3. PT: "Ambientes organizados, mudanças mais leves: por cômodo ou de uma vez." / EN: "Organized spaces, lighter moves — by room or all together."

## Etapas do processo / Process stages

Titles are FINAL in Portuguese (do not change): Triagem, Escopo, Entrega. English equivalents below are drafted for the toggle.

### Triagem / Assessment
- PT: "Avaliamos cada ambiente com você, identificando o que fica, o que sai e o que muda de lugar — o primeiro passo para clareza antes de organizar."
- EN: "We walk through each space with you, identifying what stays, what goes, and what moves — the first step toward clarity before organizing."

### Escopo / Scope
- PT: "Definimos juntos o plano de ação: prioridades, prazos e materiais necessários para transformar o espaço com previsibilidade."
- EN: "Together we define the action plan: priorities, timeline, and materials needed to transform the space with no surprises."

### Entrega / Delivery
- PT: "Executamos a organização combinada e entregamos o ambiente pronto para uso, com orientações simples para manter a nova rotina."
- EN: "We carry out the agreed organization and hand over a ready-to-use space, with simple guidance to keep the new routine going."

## Antes e depois / Before & after (real photos, in `public/images/organize/`)

- Despensa / Pantry
- Sapateira / Shoe cabinet
- Quarto do bebê / Baby's room
- Cozinha / Kitchen
- Closet / Closet
- Closet — Projeto 2 / Closet — Project 2
- Closet masculino / Men's closet
- Maquiagens / Makeups

## CTA

Heading:
- PT: "Vamos organizar seu espaço?"
- EN: "Ready to organize your space?"

Subheading:
- PT: "Entre em contato agora e receba seu orçamento"
- EN: "Contact us now and start your assessment"

Contact: rendered as a WhatsApp icon linking to `https://wa.me/<digits>`. `phonePlaceholder` in `data/organize-copy.ts` is currently `[TELEFONE]` (no digits) — replace it with the real WhatsApp number in international digits-only format (e.g. `5511999999999`) before launch; the link is built automatically from that value.
