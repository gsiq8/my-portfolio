import type { Project } from "@/data/types";

export const waterQualityEtl: Project = {
  slug: "water-quality-etl",
  title: {
    pt: "Qualidade de Água do Brasil",
    en: "Tap Water Quality in Brazil",
  },
  description: {
    pt: "Do ETL à Análise",
    en: "From ETL to Analysis",
  },
  thumbnail: "/images/portfolio/placeholder.svg",
  date: "2026-08-23",
  tags: ["ETL", "Python", "SQL", "Docker", "Airflow", "DAG", "Looker/Data Studio"],
  links: [{ label: "Github", href: "https://github.com/gsiq8/water-quality-etl" }],
  body: [
    {
      type: "paragraph",
      text: {
        en: "Back in 2023, I built a personalized email marketing tool for an e-commerce client — pull a customer's zip code, look up their local tap water quality, send them a report. It worked, but it was heavier and more expensive to run than it needed to be, mostly because Brazil's water quality system (SISAGUA) didn't have a public API yet. You had to work with bulk CSV exports, which meant a lot of manual wrangling before any of the data was usable.",
        pt: "Em 2023, construí uma ferramenta de email marketing personalizada para um cliente de e-commerce — pegar o CEP do cliente, buscar a qualidade da água da torneira na região dele, enviar um relatório. Funcionava, mas era mais pesado e mais caro de rodar do que precisava ser, principalmente porque o sistema de qualidade da água do Brasil (SISAGUA) ainda não tinha uma API pública. Era preciso trabalhar com exportações de CSV em lote, o que significava bastante trabalho manual antes que os dados ficassem utilizáveis.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: 'This year I rebuilt the same idea from scratch, smaller and on free tiers, as a live demo you can actually poke at: a pipeline that pulls Brazil\'s tap water quality data straight from the government\'s open-data API, cleans it up into something a non-technical person could actually read, and serves it back out through a Postgres database and a Looker Studio dashboard. You can check it out below. The marketing automation piece — the original email report flow — is still part of the project, but that\'s its own story; I get into it in more detail here [link TBD].',
        pt: "Neste ano, reconstruí a mesma ideia do zero, menor e rodando em camadas gratuitas, como uma demo ao vivo que dá para explorar de verdade: um pipeline que puxa os dados de qualidade da água da torneira do Brasil direto da API de dados abertos do governo, limpa tudo até virar algo que uma pessoa não técnica consiga ler, e devolve isso através de um banco Postgres e um dashboard no Looker Studio. Você pode conferir abaixo. A parte de automação de marketing — o fluxo original de envio de relatório por email — ainda faz parte do projeto, mas é uma história à parte; entro em mais detalhes sobre isso aqui [link a definir].",
      },
    },
    {
      type: "embed",
      url: "https://datastudio.google.com/embed/reporting/9566a935-9d1d-4989-a18b-c06326769e8c/page/yp86F",
      title: "Water Quality Dashboard",
    },
    {
      type: "paragraph",
      text: {
        en: 'The interesting part of rebuilding this wasn\'t the happy path, it was how much of the "obvious" plan turned out to be wrong once I actually tested it against live data. SISAGUA\'s API has five endpoints that looked like they\'d cover everything I needed — basic parameters, "other" parameters, samples out of spec, infrastructure, sampling plans. I built against all five, and only then noticed something off: the endpoint that was supposed to carry metals and pesticide readings wasn\'t returning any. I sampled it deep — hundreds of thousands of records in — and it was the same single microbiological parameter over and over. So I went back to the full API spec instead of just the five endpoints I\'d been told about, and found a different one entirely (a semester-based endpoint) that actually had the metals, pesticides, and organic compound data, with the safety threshold for each parameter built right into the record.',
        pt: 'A parte interessante de reconstruir isso não foi o caminho feliz, foi o quanto do plano "óbvio" se mostrou errado assim que testei contra dados reais. A API do SISAGUA tem cinco endpoints que pareciam cobrir tudo que eu precisava — parâmetros básicos, "outros" parâmetros, amostras fora do padrão, infraestrutura, planos de amostragem. Construí em cima dos cinco, e só depois percebi algo estranho: o endpoint que deveria trazer leituras de metais e agrotóxicos não estava retornando nada. Investiguei bem a fundo — centenas de milhares de registros depois — e era sempre o mesmo único parâmetro microbiológico. Então voltei para a especificação completa da API em vez de me limitar aos cinco endpoints que eu tinha mapeado, e encontrei um totalmente diferente (um endpoint semestral) que de fato tinha os dados de metais, agrotóxicos e compostos orgânicos, com o limite de segurança de cada parâmetro já embutido no registro.',
      },
    },
    {
      type: "paragraph",
      text: {
        en: 'That safety threshold — VMP, Valor Máximo Permitido, the max allowed value per parameter — turned into its own rabbit hole. I wanted every report to show not just "here\'s what\'s in your water" but "here\'s whether that\'s actually safe." The obvious move was to look up Brazil\'s official potability standard and hardcode the limits. Except the sources I found online disagreed with each other on the same parameter, and I wasn\'t willing to guess at something health-related. Digging into a historical government dataset I already had access to, I found the real thresholds — and then found something more interesting: those thresholds actually change over time, as the regulation gets revised. A value I\'d grabbed from 2022 data was already out of date by 2024. So instead of hardcoding anything, the pipeline now pulls the threshold live, matched to the exact period each water sample was collected in. It\'s a small design choice, but it\'s the difference between "looks right" and "is right."',
        pt: 'Esse limite de segurança — o VMP, Valor Máximo Permitido — virou seu próprio buraco de coelho. Eu queria que cada relatório mostrasse não só "aqui está o que tem na sua água", mas "aqui está se isso é seguro ou não". O caminho óbvio era buscar o padrão oficial de potabilidade do Brasil e fixar os limites no código. Só que as fontes que encontrei online divergiam entre si no mesmo parâmetro, e eu não estava disposta a chutar algo relacionado à saúde. Cavando em uma base de dados histórica do governo à qual eu já tinha acesso, encontrei os limites reais — e aí encontrei algo mais interessante ainda: esses limites mudam ao longo do tempo, conforme a regulamentação é revisada. Um valor que eu tinha pego de dados de 2022 já estava desatualizado em 2024. Então, em vez de fixar qualquer coisa no código, o pipeline agora busca o limite ao vivo, casado com o período exato em que cada amostra de água foi coletada. É uma escolha pequena de design, mas é a diferença entre "parece certo" e "está certo".',
      },
    },
    {
      type: "paragraph",
      text: {
        en: "The rest of the build was the usual pile of infrastructure gremlins that don't show up until you actually run things end to end: Airflow's newer major version quietly renamed half the API I'd built DAGs against before, Docker's default networking couldn't reach Supabase's direct connection at all (IPv6-only, fixed by switching to their connection pooler), and a couple of unpinned dependencies in an old requirements file broke cleanly in a fresh container even though they'd worked fine in a stale local environment for years. None of these are exotic problems — they're the kind of thing you only catch by actually deploying, not by reading the code and assuming it's fine.",
        pt: "O resto da construção foi a pilha usual de perrengues de infraestrutura que só aparecem quando você roda tudo de ponta a ponta de verdade: uma versão mais nova do Airflow renomeou silenciosamente metade da API sobre a qual eu tinha construído as DAGs, a rede padrão do Docker não conseguia alcançar a conexão direta do Supabase de jeito nenhum (só IPv6, resolvido trocando para o pooler de conexão deles), e algumas dependências sem versão fixada em um requirements antigo quebraram na hora em um container novo, mesmo tendo funcionado bem em um ambiente local desatualizado por anos. Nenhum desses é um problema exótico — são o tipo de coisa que só aparece quando você realmente faz o deploy, não quando você lê o código e assume que está tudo bem.",
      },
    },
    {
      type: "paragraph",
      text: {
        en: "If you want to see what your own city's tap water looks like, or you're the kind of person who reads a data pipeline write-up all the way to the bottom (respect), I'm running the original email report flow from this project too — drop your email below and I'll send you a full water quality report for your city.",
        pt: "Se você quer ver como está a água da torneira na sua própria cidade, ou é do tipo que lê um texto sobre pipeline de dados até o final (respeito), eu também estou rodando o fluxo original de relatório por email deste projeto — deixe seu email abaixo e eu te envio um relatório completo de qualidade da água da sua cidade.",
      },
    },
    {
      type: "klaviyo-form",
      formId: "RejCPY",
    },
  ],
};
